// Tier 1-1: 백업 & 복구 시스템 - Content 데이터
const tier1_1_content = {
  beginner: {
    title: "초급: 백업이 왜 필요한지 이해하고 수동 백업하기",
    sections: [
      {
        heading: "📚 학습 목표",
        content: "데이터베이스 백업의 개념과 필요성을 이해하고, mysqldump를 사용하여 수동 백업을 실행할 수 있다."
      },
      {
        heading: "1. 백업이란 무엇인가?",
        content: "백업은 데이터베이스의 현재 상태를 파일로 저장하는 작업입니다. 서버 장애, 실수로 인한 삭제, 해킹 등의 상황에서 데이터를 복구하기 위한 필수 작업입니다.",
        list: [
          "사용자가 실수로 DELETE FROM users; 실행 → 모든 회원 데이터 삭제",
          "서버 디스크 고장 → 모든 데이터 영구 손실",
          "랜섬웨어 공격 → 데이터 암호화되어 접근 불가"
        ]
      },
      {
        heading: "2. mysqldump 기본 사용법",
        code: `# CapRover에서 MySQL 컨테이너에 접속
docker exec -it $(docker ps | grep mysql | awk '{print $1}') bash

# 전체 데이터베이스 백업
mysqldump -u root -p'비밀번호' --all-databases > /backup/full_backup_$(date +%Y%m%d).sql

# 특정 데이터베이스만 백업
mysqldump -u root -p'비밀번호' cms_database > /backup/cms_backup.sql

# 백업 파일을 호스트로 복사
docker cp mysql_container:/backup/cms_backup.sql ./backups/`
      },
      {
        heading: "3. 백업 파일 확인하기",
        content: "백업 파일은 SQL 문으로 이루어진 텍스트 파일입니다:",
        code: `head -20 cms_backup.sql
# 출력 예시:
# -- MySQL dump 10.13
# CREATE TABLE users (
#   id int PRIMARY KEY,
#   username varchar(50),
#   ...
# );
# INSERT INTO users VALUES (1, 'admin', ...);`
      },
      {
        heading: "4. 실습: 첫 백업 실행하기",
        steps: [
          { label: "Step 1", text: "CapRover 대시보드 → Apps → MySQL → 터미널 접속" },
          { label: "Step 2", text: "백업 디렉토리 생성", code: "mkdir -p /backup" },
          { label: "Step 3", text: "백업 실행", code: "mysqldump -u root -p$MYSQL_ROOT_PASSWORD cms_database > /backup/my_first_backup.sql" },
          { label: "Step 4", text: "백업 확인", code: `ls -lh /backup/\n# 출력: -rw-r--r-- 1 mysql mysql 15M Jan 15 10:30 my_first_backup.sql`, note: "파일 크기가 0보다 크면 성공!" }
        ]
      },
      {
        heading: "5. 백업 파일 보관하기",
        content: "백업 파일은 데이터베이스 서버와 다른 장소에 보관해야 합니다:",
        list: [
          "로컬 컴퓨터에 다운로드",
          "클라우드 스토리지 (Google Drive, AWS S3)",
          "외부 서버"
        ],
        code: `# CapRover 호스트에서 실행\ndocker cp $(docker ps | grep mysql | awk '{print $1}'):/backup/my_first_backup.sql ~/safe_location/`
      },
      {
        heading: "⚠️ 주의사항",
        list: [
          "백업 파일에는 비밀번호 등 민감정보가 포함되어 있습니다",
          "백업 파일 권한을 600으로 제한: chmod 600 backup.sql",
          "정기적으로 백업 파일이 복구 가능한지 테스트하세요"
        ]
      },
      {
        heading: "✅ 체크리스트",
        checklist: [
          "mysqldump 명령어로 백업 실행 성공",
          "백업 파일 크기 확인 (0보다 커야 함)",
          "백업 파일을 안전한 장소에 복사",
          "백업 파일을 텍스트 에디터로 열어 내용 확인"
        ],
        nextStep: "이 백업을 실제로 복구하는 방법을 배우고, 백업을 자동화하는 방법을 익힙니다."
      }
    ]
  },
  intermediate: {
    title: "중급: 백업 자동화하고 복구 시나리오 대비하기",
    sections: [
      {
        heading: "📚 학습 목표",
        content: "Cron을 사용하여 백업을 자동화하고, 다양한 복구 시나리오에 대비할 수 있다."
      },
      {
        heading: "1. 백업 자동화가 필요한 이유",
        content: "수동 백업의 문제점:",
        list: [
          "깜빡하고 잊어버림 → 장애 발생 시 복구 불가",
          "백업 주기가 불규칙 → 최신 데이터 손실 위험",
          "사람이 직접 해야 함 → 시간 낭비"
        ]
      },
      {
        heading: "2. 백업 스크립트 작성",
        code: `#!/bin/bash
# /backup/mysql_backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup"
DB_NAME="cms_database"
KEEP_DAYS=7

# 백업 실행
mysqldump -u root -p$MYSQL_ROOT_PASSWORD \
  --single-transaction \
  --routines \
  --triggers \
  $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# 압축하여 공간 절약
gzip $BACKUP_DIR/backup_$DATE.sql

# 7일 이상 된 백업 삭제
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +$KEEP_DAYS -delete

echo "Backup completed: backup_$DATE.sql.gz"`
      },
      {
        heading: "3. Cron 설정하기",
        steps: [
          { label: "Step 1", text: "스크립트 실행 권한 부여", code: "chmod +x /backup/mysql_backup.sh" },
          { label: "Step 2", text: "Cron 편집기 열기", code: "crontab -e" },
          { label: "Step 3", text: "매일 새벽 2시에 백업 실행", code: "0 2 * * * /backup/mysql_backup.sh >> /var/log/backup.log 2>&1" },
          { label: "Step 4", text: "Cron 작업 확인", code: "crontab -l" }
        ]
      },
      {
        heading: "4. 복구 테스트",
        content: "백업은 복구할 수 있어야 의미가 있습니다. 반드시 테스트하세요!",
        steps: [
          { label: "테스트 DB 생성", code: "mysql -u root -p -e 'CREATE DATABASE test_restore;'" },
          { label: "백업 파일 복구", code: "gunzip < backup_20250104_020001.sql.gz | mysql -u root -p test_restore" },
          { label: "데이터 확인", code: "mysql -u root -p test_restore -e 'SHOW TABLES;'" },
          { label: "테스트 DB 삭제", code: "mysql -u root -p -e 'DROP DATABASE test_restore;'" }
        ]
      },
      {
        heading: "✅ 자동화 체크리스트",
        checklist: [
          "백업 스크립트가 정상 실행되는가?",
          "Cron이 설정된 시간에 작동하는가?",
          "오래된 백업이 자동 삭제되는가?",
          "복구 테스트가 성공했는가?"
        ]
      }
    ]
  },
  advanced: {
    title: "고급: 증분 백업과 Point-in-Time 복구",
    sections: [
      {
        heading: "📚 학습 목표",
        content: "Binary Log를 활용한 증분 백업과 특정 시점으로 복구하는 방법을 익힙니다."
      },
      {
        heading: "1. Binary Log란?",
        content: "MySQL의 모든 데이터 변경 사항(INSERT, UPDATE, DELETE)을 기록하는 로그입니다. 이를 활용하면:",
        list: [
          "전체 백업 + Binary Log = 어떤 시점으로든 복구 가능",
          "디스크 공간 절약 (전체 백업은 하루 1회, 증분은 계속)",
          "사용자가 실수한 직전 시점으로 복구"
        ]
      },
      {
        heading: "2. Binary Log 활성화",
        content: "CapRover MySQL 컨테이너의 my.cnf 설정:",
        code: `[mysqld]
server-id = 1
log_bin = /var/log/mysql/mysql-bin.log
expire_logs_days = 7
max_binlog_size = 100M

# 컨테이너 재시작 필요
docker restart $(docker ps | grep mysql | awk '{print $1}')`
      },
      {
        heading: "3. Point-in-Time 복구 시나리오",
        content: "예시: 오후 3시에 실수로 DELETE 쿼리 실행, 마지막 전체 백업은 새벽 2시",
        steps: [
          {
            label: "Step 1",
            text: "새벽 2시 전체 백업 복구",
            code: "mysql -u root -p cms_database < backup_20250104_020000.sql"
          },
          {
            label: "Step 2",
            text: "Binary Log에서 2시~3시 사이의 변경사항 추출",
            code: "mysqlbinlog --start-datetime='2025-01-04 02:00:00' \\\n  --stop-datetime='2025-01-04 14:59:59' \\\n  /var/log/mysql/mysql-bin.000001 > incremental.sql"
          },
          {
            label: "Step 3",
            text: "증분 복구 적용",
            code: "mysql -u root -p cms_database < incremental.sql"
          },
          {
            label: "결과",
            text: "오후 3시 직전 상태로 완벽 복구!"
          }
        ]
      },
      {
        heading: "4. 실전 복구 플레이북",
        content: "긴급 상황 대응 절차:",
        checklist: [
          "즉시 서비스 중지 (추가 손상 방지)",
          "현재 데이터베이스 전체 덤프 (현재 상태 보존)",
          "가장 최근 전체 백업 확인",
          "Binary Log 위치 확인",
          "테스트 환경에서 복구 시뮬레이션",
          "성공 확인 후 프로덕션 복구",
          "서비스 재개 및 데이터 검증"
        ]
      },
      {
        heading: "5. 고급 백업 전략",
        list: [
          "3-2-1 규칙: 3개 복사본, 2개 다른 미디어, 1개 오프사이트",
          "핫 백업(실시간) vs 콜드 백업(서비스 중지)",
          "레플리카 서버 활용 (읽기 부하 분산 + 백업 소스)",
          "클라우드 백업 자동화 (AWS S3, Google Cloud Storage)"
        ]
      },
      {
        heading: "⚡ 고급 실습 과제",
        checklist: [
          "Binary Log를 활성화하고 5분 후 특정 레코드 삭제 후 복구",
          "백업 파일을 S3에 자동 업로드하는 스크립트 작성",
          "복구 시간 목표(RTO) 1시간 이내 달성 가능한지 테스트",
          "재해 복구 문서(Disaster Recovery Plan) 작성"
        ]
      }
    ]
  }
};

// 전체 프레임워크 데이터
export const frameworkData = {
  tiers: [
    {
      id: 'tier1',
      name: 'Tier 1: 긴급 생존 기술',
      period: '1~2주, 필수',
      color: 'bg-red-100 border-red-300 text-red-800',
      reason: '서비스가 다운되거나 데이터가 날아갔을 때 복구하기 위해',
      topics: [
        {
          id: '1-1',
          name: '백업 & 복구 시스템',
          goal: '데이터를 안전하게 보관하고 문제 시 복구할 수 있다',
          hours: 5,
          keywords: ['mysqldump', 'mysql import', 'cron', 'backup strategy'],
          tasks: [
            'MySQL 수동 백업 3회 실행',
            '백업 파일로 테스트 DB 복구',
            '자동 백업 스크립트 작성 및 테스트'
          ],
          content: tier1_1_content
        },
        {
          id: '1-2',
          name: 'CapRover 대시보드 마스터',
          goal: 'CapRover를 통해 시스템 상태를 파악하고 기본 조치를 할 수 있다',
          hours: 3,
          keywords: ['CapRover', 'Docker container', 'application monitoring'],
          tasks: [
            '각 앱의 로그 10분씩 관찰',
            '의도적으로 앱 중지 후 재시작',
            '환경변수 하나 변경하고 재배포'
          ],
          content: {
            beginner: {
              title: "초급: CapRover 인터페이스 익히기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "CapRover 대시보드의 주요 메뉴를 이해하고, 앱의 상태를 파악할 수 있다."
                },
                {
                  heading: "1. CapRover란?",
                  content: "CapRover는 Docker 기반의 오픈소스 PaaS(Platform as a Service)입니다. Heroku처럼 쉽게 앱을 배포하지만, 자신의 서버에서 완전한 제어권을 갖습니다.",
                  list: [
                    "무료 오픈소스 (Heroku는 유료)",
                    "Git push만으로 자동 배포",
                    "무중단 배포, SSL 인증서 자동 발급",
                    "하나의 서버에서 여러 앱 관리"
                  ]
                },
                {
                  heading: "2. 대시보드 주요 메뉴 둘러보기",
                  steps: [
                    {
                      label: "Apps",
                      text: "배포된 앱 목록 (MySQL, Redis, PHP 백엔드, React 프론트엔드 등)"
                    },
                    {
                      label: "Monitoring",
                      text: "NetData 연동 - CPU, 메모리, 디스크, 네트워크 실시간 그래프"
                    },
                    {
                      label: "Cluster",
                      text: "서버(노드) 관리 - 여러 서버를 클러스터로 묶을 수 있음"
                    },
                    {
                      label: "Settings",
                      text: "시스템 설정 - 도메인, SSL, 비밀번호 변경 등"
                    }
                  ]
                },
                {
                  heading: "3. 앱 상태 확인하기",
                  content: "Apps 메뉴에서 각 앱의 상태를 확인할 수 있습니다:",
                  list: [
                    "초록불: 정상 실행 중 (Running)",
                    "회색: 중지됨 (Stopped)",
                    "빨강: 에러 발생 (Error/Crashed)"
                  ],
                  code: `# 앱을 클릭하면 볼 수 있는 정보:
- Instance Count: 실행 중인 컨테이너 수
- Memory Limit: 메모리 제한 (기본 512MB)
- Port Mapping: 포트 설정
- Environment Variables: 환경 변수 (DB 비밀번호 등)
- Logs: 최근 로그 100줄`
                },
                {
                  heading: "4. 실습: 앱 로그 10분간 관찰하기",
                  steps: [
                    {
                      label: "Step 1",
                      text: "Apps → MySQL 앱 클릭"
                    },
                    {
                      label: "Step 2",
                      text: "App Logs 탭으로 이동"
                    },
                    {
                      label: "Step 3",
                      text: "Auto Refresh 활성화 (우측 상단 토글)"
                    },
                    {
                      label: "관찰 포인트",
                      text: "어떤 쿼리가 실행되는가? 에러 메시지는 없는가?"
                    }
                  ]
                },
                {
                  heading: "5. HTTP Settings 이해하기",
                  content: "각 앱의 HTTP Settings에서 도메인과 SSL을 설정합니다:",
                  code: `# 예시:
- Enable HTTPS: 체크 (Let's Encrypt 자동 SSL)
- Container HTTP Port: 80 (앱이 리스닝하는 포트)
- Force HTTPS: 체크 (HTTP → HTTPS 리다이렉트)
- Custom Domain: cms.example.com`
                },
                {
                  heading: "✅ 초급 체크리스트",
                  checklist: [
                    "각 앱의 상태(초록/회색/빨강) 확인",
                    "MySQL, Redis, 백엔드, 프론트엔드 로그를 각각 10분씩 관찰",
                    "앱 하나의 Environment Variables 확인",
                    "Monitoring 메뉴에서 CPU/메모리 그래프 확인"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 컨테이너 라이프사이클과 문제 해결",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "컨테이너를 중지/재시작하고, 환경변수를 변경하여 앱 동작을 제어할 수 있다."
                },
                {
                  heading: "1. 컨테이너 라이프사이클",
                  content: "컨테이너는 생명주기를 가진 프로세스입니다:",
                  list: [
                    "Created: 이미지로부터 생성됨",
                    "Running: 실행 중 (앱이 작동하는 상태)",
                    "Stopped: 중지됨 (데이터는 보존)",
                    "Restarting: 재시작 중",
                    "Dead: 비정상 종료"
                  ]
                },
                {
                  heading: "2. 실습: 의도적으로 앱 중지 후 재시작",
                  steps: [
                    {
                      label: "Step 1",
                      text: "테스트용 앱 선택 (프론트엔드 추천)",
                      code: "Apps → React 앱 클릭"
                    },
                    {
                      label: "Step 2",
                      text: "앱 중지하기",
                      code: "우측 상단 ... 메뉴 → Stop"
                    },
                    {
                      label: "Step 3",
                      text: "브라우저에서 사이트 접속 → 502 Bad Gateway 확인"
                    },
                    {
                      label: "Step 4",
                      text: "앱 재시작",
                      code: "... 메뉴 → Start"
                    },
                    {
                      label: "Step 5",
                      text: "30초 대기 후 사이트 정상 작동 확인"
                    }
                  ]
                },
                {
                  heading: "3. 환경변수 변경하기",
                  content: "환경변수는 앱의 설정값입니다 (DB 주소, API 키 등). 변경 시 재배포가 필요합니다.",
                  steps: [
                    {
                      label: "예시",
                      text: "백엔드 앱의 디버그 모드 활성화",
                      code: `# App Config 탭 → Environment Variables
KEY: DEBUG
VALUE: true

# Save & Update 클릭 → 자동 재배포 시작`
                    }
                  ]
                },
                {
                  heading: "4. 로그로 문제 진단하기",
                  content: "앱이 제대로 시작하지 않을 때:",
                  list: [
                    "App Logs에서 에러 메시지 확인",
                    "환경변수 오타 확인 (DB_HOST vs DATABASE_HOST)",
                    "포트 충돌 확인 (같은 포트를 2개 앱이 사용)",
                    "메모리 부족 (앱이 반복적으로 재시작)"
                  ],
                  code: `# 흔한 에러 예시
Error: connect ECONNREFUSED 127.0.0.1:3306
→ MySQL이 중지되었거나 연결 정보가 틀림

FATAL: could not allocate memory
→ 메모리 제한 초과, App Config에서 메모리 증가 필요`
                }
                ,
                {
                  heading: "5. 재배포(Redeploy) 이해하기",
                  content: "다음 경우에 재배포가 필요합니다:",
                  list: [
                    "환경변수 변경",
                    "코드 업데이트 (Git push)",
                    "컨테이너 설정 변경 (메모리, 포트 등)"
                  ],
                  code: `# 재배포 과정:
1. 새 컨테이너 생성 (새로운 설정 적용)
2. 헬스체크 통과 확인
3. 기존 컨테이너 트래픽 차단
4. 새 컨테이너로 트래픽 전환
5. 기존 컨테이너 종료

→ 무중단 배포(Zero Downtime Deployment)`
                },
                {
                  heading: "✅ 중급 체크리스트",
                  checklist: [
                    "앱 중지 → 재시작 성공",
                    "환경변수 하나 변경 후 재배포 성공",
                    "로그에서 에러 메시지 찾아 해석",
                    "재배포 과정에서 사이트 접속 테스트 (무중단 확인)"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 무중단 배포와 스케일링",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "앱을 스케일 아웃하여 트래픽을 분산하고, 무중단 배포를 완벽히 이해한다."
                },
                {
                  heading: "1. 스케일링이란?",
                  content: "트래픽이 증가하면 서버를 확장해야 합니다:",
                  list: [
                    "Scale Up (수직 확장): 서버의 CPU/메모리 증가",
                    "Scale Out (수평 확장): 같은 앱의 컨테이너를 여러 개 실행"
                  ],
                  code: `# CapRover는 Scale Out을 쉽게 지원
App Config → Instance Count: 3
→ 같은 앱이 3개 컨테이너로 실행
→ 트래픽은 자동으로 로드밸런싱`
                },
                {
                  heading: "2. 실습: 앱 스케일 아웃",
                  steps: [
                    {
                      label: "Step 1",
                      text: "백엔드 앱의 Instance Count를 3으로 변경"
                    },
                    {
                      label: "Step 2",
                      text: "Save & Update → 3개 컨테이너 생성 확인"
                    },
                    {
                      label: "Step 3",
                      text: "Monitoring에서 메모리 사용량 증가 확인"
                    },
                    {
                      label: "Step 4",
                      text: "로그에서 3개 컨테이너의 다른 로그 확인",
                      note: "요청이 각 컨테이너에 분산됨"
                    }
                  ]
                },
                {
                  heading: "3. 로드밸런싱 전략",
                  content: "CapRover는 Nginx로 로드밸런싱을 수행합니다:",
                  list: [
                    "Round Robin: 순서대로 요청 분배 (기본값)",
                    "Least Connections: 연결이 적은 컨테이너 우선",
                    "IP Hash: 같은 IP는 같은 컨테이너로 (세션 유지)"
                  ],
                  code: `# 고급 설정 (Nginx Config Override)
upstream backend {
  least_conn;
  server container1:3000;
  server container2:3000;
  server container3:3000;
}`
                },
                {
                  heading: "4. 헬스체크와 자동 복구",
                  content: "CapRover는 컨테이너 상태를 주기적으로 확인합니다:",
                  code: `# App Config → Health Check Path
/health

# 백엔드에서 헬스체크 엔드포인트 구현
GET /health
Response: { "status": "ok", "timestamp": 1234567890 }

# 헬스체크 실패 시:
1. 해당 컨테이너로 트래픽 차단
2. 3번 재시도
3. 여전히 실패하면 컨테이너 재시작`
                },
                {
                  heading: "5. 무중단 배포 심화",
                  content: "배포 시 다운타임을 0으로 만드는 전략:",
                  steps: [
                    {
                      label: "Blue-Green 배포",
                      text: "기존(Blue)과 새(Green) 환경을 동시 운영 → 전환",
                      note: "CapRover는 자동으로 Blue-Green 배포 수행"
                    },
                    {
                      label: "Rolling 배포",
                      text: "인스턴스를 하나씩 순차적으로 업데이트",
                      code: "Instance Count: 3\n1번 업데이트 → 2, 3번으로 트래픽\n2번 업데이트 → 1, 3번으로 트래픽\n3번 업데이트 → 1, 2번으로 트래픽"
                    }
                  ]
                },
                {
                  heading: "6. 리소스 제한과 모니터링",
                  content: "컨테이너가 과도한 리소스를 사용하지 않도록 제한:",
                  code: `# App Config → Advanced Settings
Memory Limit: 512MB (기본값)
CPU Shares: 1024 (상대적 비율)

# 메모리 초과 시:
- OOMKilled (Out Of Memory Killed)
- 컨테이너 강제 종료 → 자동 재시작
- 로그: FATAL: could not allocate memory`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "백엔드 앱을 3개 인스턴스로 스케일 아웃",
                    "부하 테스트 도구(Apache Bench)로 100 req/s 전송하여 로드밸런싱 확인",
                    "헬스체크 엔드포인트 구현 및 테스트",
                    "의도적으로 하나의 컨테이너를 중지하고 트래픽이 다른 컨테이너로 이동하는지 확인",
                    "배포 시 다운타임 0초 달성 (브라우저 자동 새로고침 스크립트로 테스트)"
                  ]
                }
              ]
            }
          }
        },
        {
          id: '1-3',
          name: '로그 읽기와 에러 해석',
          goal: '에러 로그를 보고 문제의 원인을 파악할 수 있다',
          hours: 4,
          keywords: ['log analysis', 'error debugging', 'stack trace'],
          tasks: [
            '각 서비스(MySQL, Redis, PHP, React) 로그 형식 파악',
            '의도적으로 에러 발생시키고 로그 분석',
            'AI에게 에러 해결 질문 3회'
          ],
          content: {
            beginner: {
              title: "초급: 로그의 기본 개념과 읽는 법",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "로그가 무엇인지 이해하고, 각 서비스(MySQL, Redis, PHP, React)의 로그를 읽을 수 있다."
                },
                {
                  heading: "1. 로그란 무엇인가?",
                  content: "로그는 프로그램이 실행되면서 남기는 기록입니다. 일기장처럼 '언제, 무엇을, 어떻게' 했는지 기록합니다.",
                  list: [
                    "정상 작동 로그: 사용자 로그인, 파일 업로드 성공 등",
                    "경고(Warning): 문제는 아니지만 주의가 필요한 상황",
                    "에러(Error): 요청 실패, 연결 오류 등",
                    "크리티컬(Critical): 서비스 중단급 심각한 문제"
                  ]
                },
                {
                  heading: "2. 로그 레벨 이해하기",
                  code: `# 로그 레벨 (심각도 순서)
DEBUG    → 개발자용 상세 정보
INFO     → 일반 정보 (사용자 로그인, API 호출)
WARNING  → 경고 (디스크 80% 사용, 느린 쿼리)
ERROR    → 오류 (DB 연결 실패, 파일 없음)
CRITICAL → 치명적 (서비스 중단, 메모리 고갈)

# 운영 환경에서는 보통 INFO 이상만 기록
# 개발 환경에서는 DEBUG까지 모두 기록`
                },
                {
                  heading: "3. MySQL 로그 읽기",
                  content: "CapRover의 MySQL 앱 로그에서 볼 수 있는 내용:",
                  code: `# 정상 작동
2025-01-04T10:30:15.123Z [Note] Server socket created on IP: '0.0.0.0'.
2025-01-04T10:30:16.456Z [Note] mysqld: ready for connections.

# 새 연결
2025-01-04T10:35:20.789Z [Note] Access granted for user 'cms_user'@'172.17.0.5'

# 슬로우 쿼리 경고
2025-01-04T10:40:00.123Z [Warning] Query took 5.2 seconds: SELECT * FROM posts WHERE ...

# 에러
2025-01-04T10:45:30.456Z [ERROR] Access denied for user 'wrong_user'@'172.17.0.5'`
                },
                {
                  heading: "4. Redis 로그 읽기",
                  code: `# Redis 시작
1:M 04 Jan 2025 10:30:00.123 * Server initialized
1:M 04 Jan 2025 10:30:00.456 * Ready to accept connections

# 명령 실행 (DEBUG 모드)
1:M 04 Jan 2025 10:35:15.789 "GET" "session:user123"
1:M 04 Jan 2025 10:35:16.012 "SET" "session:user123" "..."

# 메모리 경고
1:M 04 Jan 2025 10:40:00.123 # WARNING: Memory usage is 80%

# 에러
1:M 04 Jan 2025 10:45:00.456 # ERROR: Out of memory`
                },
                {
                  heading: "5. 백엔드(PHP/Node.js) 로그 읽기",
                  code: `# PHP 로그 예시
[2025-01-04 10:30:15] INFO: User login successful (user_id: 123)
[2025-01-04 10:35:20] WARNING: Deprecated function called in /app/old_code.php:45
[2025-01-04 10:40:00] ERROR: Database connection failed: SQLSTATE[HY000] [2002] Connection refused

# Node.js 로그 예시
2025-01-04T10:30:15.123Z INFO  User authenticated: user123
2025-01-04T10:35:20.456Z WARN  API rate limit approaching (95/100)
2025-01-04T10:40:00.789Z ERROR Unable to fetch data from external API: ETIMEDOUT`
                },
                {
                  heading: "6. 프론트엔드(React) 로그 읽기",
                  content: "브라우저 콘솔과 서버 로그를 함께 봐야 합니다:",
                  code: `# Vite 개발 서버 로그
10:30:15 AM [vite] page reload src/App.jsx
10:35:20 AM [vite] hmr update /src/components/Header.jsx

# 빌드 에러
10:40:00 AM [vite] Internal server error: Failed to parse source
  SyntaxError: Unexpected token '<' (12:5)

# 브라우저 콘솔 (개발자 도구 F12)
GET http://api.example.com/users 404 Not Found
Uncaught TypeError: Cannot read property 'map' of undefined`
                },
                {
                  heading: "✅ 초급 실습",
                  checklist: [
                    "CapRover에서 MySQL 로그를 10분간 관찰하고 3가지 유형의 로그 찾기",
                    "Redis 로그에서 메모리 사용량 관련 메시지 찾기",
                    "백엔드 로그에서 ERROR 레벨 메시지 1개 찾아 해석하기",
                    "브라우저 콘솔에서 404 에러 재현하고 원인 파악하기"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 스택 트레이스 읽기와 에러 추적",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "스택 트레이스를 읽고 에러가 발생한 정확한 위치와 원인을 파악할 수 있다."
                },
                {
                  heading: "1. 스택 트레이스란?",
                  content: "에러가 발생했을 때 함수 호출 경로를 역순으로 보여주는 로그입니다. '범인 추적'과 같습니다.",
                  code: `# 예시: PHP 스택 트레이스
Fatal error: Uncaught Error: Call to undefined function connectDB()
Stack trace:
#0 /app/services/UserService.php(25): DatabaseHelper->query('SELECT * FROM...')
#1 /app/controllers/UserController.php(15): UserService->getUser(123)
#2 /app/routes.php(8): UserController->show()
#3 /app/index.php(30): handleRequest()

읽는 순서:
- 맨 위가 에러 발생 지점 (connectDB 함수가 없음)
- #0부터 역순으로 읽으면 호출 경로를 알 수 있음
- #0 → #1 → #2 → #3 순서로 함수가 호출됨`
                },
                {
                  heading: "2. 실전 에러 분석 예시 1: DB 연결 오류",
                  code: `# 로그
[2025-01-04 14:30:00] ERROR: SQLSTATE[HY000] [2002] Connection refused
  at PDO->__construct() in /app/database/Connection.php:15
  at Connection::connect() in /app/services/PostService.php:10
  at PostService->getAllPosts() in /app/controllers/PostController.php:20

분석:
1. Connection refused → MySQL이 중지되었거나 주소가 틀림
2. Connection.php:15 → DB 연결 설정 확인
3. 해결: CapRover에서 MySQL 앱이 Running 상태인지 확인`
                },
                {
                  heading: "3. 실전 에러 분석 예시 2: Null Pointer",
                  code: `# Node.js 에러
TypeError: Cannot read property 'username' of null
    at formatUser (/app/utils/format.js:12:20)
    at /app/routes/api.js:45:18
    at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)

분석:
1. format.js:12번째 줄에서 null.username 접근 시도
2. api.js:45에서 formatUser()를 호출했지만 null을 전달
3. 해결:
   - format.js에 null 체크 추가
   - 또는 api.js에서 호출 전 검증

수정 코드:
function formatUser(user) {
  if (!user) return { username: 'Guest' };  // null 체크 추가
  return { username: user.username };
}`
                },
                {
                  heading: "4. 의도적으로 에러 발생시켜 로그 분석하기",
                  content: "학습을 위해 일부러 에러를 만들어봅시다:",
                  steps: [
                    {
                      label: "시나리오 1",
                      text: "MySQL 앱 중지 → 백엔드 로그에서 DB 연결 에러 확인",
                      code: "CapRover → MySQL → Stop\n백엔드 로그: ECONNREFUSED 127.0.0.1:3306"
                    },
                    {
                      label: "시나리오 2",
                      text: "환경변수 잘못 설정 → 설정 에러 확인",
                      code: "DB_HOST를 'wrong-host'로 변경 → 재배포\n로그: getaddrinfo ENOTFOUND wrong-host"
                    },
                    {
                      label: "시나리오 3",
                      text: "API 엔드포인트 오타 → 404 에러",
                      code: "GET /api/usres (오타) → 404 Not Found\n로그: No route found for GET /api/usres"
                    }
                  ]
                },
                {
                  heading: "5. 에러 로그에서 해결 힌트 찾기",
                  content: "좋은 에러 메시지는 해결 방법을 알려줍니다:",
                  list: [
                    "Connection refused → 서비스가 꺼져있거나 방화벽 문제",
                    "ENOENT: no such file → 파일 경로 확인",
                    "Syntax Error → 코드 문법 오류, 해당 줄 확인",
                    "Port 3000 already in use → 다른 프로세스가 포트 사용 중",
                    "Out of memory → 메모리 부족, 컨테이너 제한 증가 필요"
                  ]
                },
                {
                  heading: "6. AI에게 에러 해결 질문하는 법",
                  code: `# 나쁜 질문
"에러가 나요"

# 좋은 질문
"CapRover에서 Node.js 백엔드를 배포했는데 다음 에러가 발생합니다:

Error: connect ECONNREFUSED 127.0.0.1:3306
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1148:16)

환경:
- Node.js 18, Express
- MySQL은 같은 CapRover에서 실행 중
- DB_HOST 환경변수: srv-captain--mysql

어떻게 해결하나요?"

→ AI가 정확한 답변 제공: "127.0.0.1이 아니라 srv-captain--mysql:3306으로 연결해야 합니다"`
                },
                {
                  heading: "✅ 중급 실습",
                  checklist: [
                    "각 서비스(MySQL, Redis, 백엔드)에서 의도적으로 에러 발생시키기",
                    "스택 트레이스를 읽고 에러 발생 파일과 줄 번호 찾기",
                    "AI(ChatGPT, Claude)에게 에러 로그를 제시하고 해결 방법 3가지 질문하기",
                    "에러를 수정하고 로그에서 정상 작동 확인"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 구조화된 로깅과 AI 활용 디버깅",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "구조화된 로그를 설계하고, 로그 분석 도구 및 AI를 활용하여 효율적으로 디버깅한다."
                },
                {
                  heading: "1. 구조화된 로깅이란?",
                  content: "단순 텍스트 대신 JSON 형식으로 로그를 기록하면 검색과 분석이 쉬워집니다.",
                  code: `# 기존 로그 (비구조화)
2025-01-04 10:30:15 User john logged in from 192.168.1.100

# 구조화된 로그 (JSON)
{
  "timestamp": "2025-01-04T10:30:15.123Z",
  "level": "INFO",
  "event": "user_login",
  "user_id": 123,
  "username": "john",
  "ip": "192.168.1.100",
  "user_agent": "Mozilla/5.0..."
}

장점:
- 특정 사용자의 모든 활동 검색 가능
- IP별 로그인 빈도 분석
- 자동화된 알림 (예: 같은 IP에서 10번 실패 시)`
                },
                {
                  heading: "2. Winston으로 구조화된 로깅 구현 (Node.js)",
                  code: `// npm install winston
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// 사용
logger.info('User login', {
  user_id: 123,
  username: 'john',
  ip: req.ip
});

logger.error('Database query failed', {
  query: 'SELECT * FROM users',
  error: err.message,
  duration_ms: 1234
});`
                },
                {
                  heading: "3. 로그 쿼리와 분석",
                  content: "JSON 로그는 jq 명령어로 쉽게 필터링할 수 있습니다:",
                  code: `# 특정 사용자의 모든 활동
cat combined.log | jq 'select(.user_id == 123)'

# 에러만 필터링
cat combined.log | jq 'select(.level == "ERROR")'

# 느린 쿼리 찾기 (5초 이상)
cat combined.log | jq 'select(.duration_ms > 5000)'

# 시간대별 에러 카운트
cat combined.log | jq -r 'select(.level == "ERROR") | .timestamp' | cut -d'T' -f1 | sort | uniq -c`
                },
                {
                  heading: "4. 중앙 집중식 로깅 (ELK Stack 개념)",
                  content: "여러 서버의 로그를 한 곳에서 보는 방법:",
                  list: [
                    "Elasticsearch: 로그 저장 및 검색",
                    "Logstash: 로그 수집 및 변환",
                    "Kibana: 시각화 대시보드"
                  ],
                  code: `# 간단한 대안: Grafana Loki (무료)
# CapRover에 Loki 설치 가능
# 모든 컨테이너 로그 자동 수집
# 웹 UI에서 실시간 검색

예시 쿼리:
{app="backend"} |= "ERROR"  # 백엔드 에러만
{app="mysql"} | json | duration > 5s  # 느린 쿼리`
                },
                {
                  heading: "5. AI 활용 고급 디버깅",
                  content: "AI에게 복잡한 로그를 분석시키는 방법:",
                  code: `# 프롬프트 예시
"다음은 최근 1시간 동안의 에러 로그입니다.
가장 자주 발생하는 에러 3가지를 찾고,
각각의 근본 원인과 해결 방법을 제시해주세요:

[로그 200줄 붙여넣기]

또한 이 에러들 사이의 연관성이 있다면 설명해주세요."

AI 활용 팁:
- 긴 로그는 요약해서 제공 (중복 제거)
- 환경 정보 함께 제공 (Docker, CapRover, Node.js 버전)
- 이미 시도한 해결 방법 명시
- 타임스탬프 포함 (시간대별 패턴 분석)`
                },
                {
                  heading: "6. 실전: 프로덕션 로깅 전략",
                  list: [
                    "로그 레벨: 프로덕션은 INFO, 개발은 DEBUG",
                    "민감정보 마스킹: 비밀번호, 토큰은 로그에 기록 금지",
                    "로그 로테이션: 오래된 로그 자동 삭제 (7일 보관)",
                    "성능 고려: 로그 과다 기록 시 I/O 병목",
                    "비용 절감: 클라우드 로깅 서비스는 GB당 과금"
                  ],
                  code: `# 로그 로테이션 설정 (Linux logrotate)
/var/log/app/*.log {
  daily
  rotate 7
  compress
  missingok
  notifempty
  create 0644 app app
}

# 민감정보 마스킹 예시
logger.info('User login attempt', {
  username: 'john',
  password: '[REDACTED]',  // 절대 기록하지 말 것!
  ip: req.ip
});`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "백엔드에 Winston 또는 Pino 로깅 라이브러리 적용",
                    "주요 이벤트 5가지를 JSON 형식으로 로깅 (로그인, 주문, 결제 등)",
                    "jq로 로그를 분석하여 '가장 많이 실패한 API' 찾기",
                    "AI에게 복잡한 에러 로그를 제공하고 근본 원인 분석 요청",
                    "로그 로테이션 설정하여 7일 이상 된 로그 자동 삭제"
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      id: 'tier2',
      name: 'Tier 2: 안정적 운영 기술',
      period: '3~4주',
      color: 'bg-yellow-100 border-yellow-300 text-yellow-800',
      reason: '서비스를 안정적으로 유지하고 문제를 예방하기 위해',
      topics: [
        {
          id: '2-1',
          name: 'Docker 기초와 컨테이너 관리',
          goal: 'Docker의 기본 개념을 이해하고 컨테이너를 관리할 수 있다',
          hours: 8,
          keywords: ['Docker basics', 'container orchestration', 'volume management'],
          tasks: [
            'Docker 명령어 10개 연습',
            '볼륨 마운트 테스트',
            '컨테이너 메모리 제한 설정'
          ],
          content: {
            beginner: {
              title: "초급: Docker가 무엇인지 이해하고 기본 명령어 익히기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Docker의 개념을 이해하고, 컨테이너를 조회/시작/중지/삭제할 수 있다."
                },
                {
                  heading: "1. Docker란 무엇인가?",
                  content: "Docker는 '컨테이너'라는 격리된 환경에서 애플리케이션을 실행하는 기술입니다.",
                  list: [
                    "가상머신(VM)보다 가볍고 빠름",
                    "같은 서버에서 여러 앱을 독립적으로 실행",
                    "한 번 만든 이미지로 어디서든 똑같이 실행",
                    "CapRover는 Docker를 쉽게 관리해주는 도구"
                  ]
                },
                {
                  heading: "2. 주요 개념",
                  code: `# 이미지 (Image)
- 앱을 실행하기 위한 '템플릿' 또는 '레시피'
- 예: mysql:8.0, nginx:latest, node:18

# 컨테이너 (Container)
- 이미지로부터 생성된 '실행 중인 인스턴스'
- 하나의 이미지로 여러 컨테이너 생성 가능

# 비유
- 이미지 = 붕어빵 틀
- 컨테이너 = 틀로 만든 실제 붕어빵`
                },
                {
                  heading: "3. 필수 Docker 명령어 10개",
                  steps: [
                    {
                      label: "1. 실행 중인 컨테이너 보기",
                      code: "docker ps\n# CONTAINER ID   IMAGE     COMMAND   STATUS   PORTS   NAMES"
                    },
                    {
                      label: "2. 모든 컨테이너 보기 (중지된 것 포함)",
                      code: "docker ps -a"
                    },
                    {
                      label: "3. 컨테이너 로그 보기",
                      code: "docker logs <container_id>\ndocker logs -f <container_id>  # 실시간으로 계속 보기"
                    },
                    {
                      label: "4. 컨테이너 내부 접속",
                      code: "docker exec -it <container_id> bash\n# MySQL 예시\ndocker exec -it mysql_container mysql -u root -p"
                    },
                    {
                      label: "5. 컨테이너 시작/중지/재시작",
                      code: "docker start <container_id>\ndocker stop <container_id>\ndocker restart <container_id>"
                    },
                    {
                      label: "6. 컨테이너 삭제",
                      code: "docker rm <container_id>\ndocker rm -f <container_id>  # 강제 삭제 (실행 중이어도)"
                    },
                    {
                      label: "7. 이미지 목록 보기",
                      code: "docker images"
                    },
                    {
                      label: "8. 이미지 다운로드",
                      code: "docker pull mysql:8.0\ndocker pull redis:alpine"
                    },
                    {
                      label: "9. 컨테이너 리소스 사용량 확인",
                      code: "docker stats\n# CPU, 메모리, 네트워크 실시간 표시"
                    },
                    {
                      label: "10. 컨테이너 상세 정보",
                      code: "docker inspect <container_id>\n# JSON 형식으로 모든 설정 정보 출력"
                    }
                  ]
                },
                {
                  heading: "4. CapRover에서 Docker 명령어 사용하기",
                  content: "CapRover 서버에 SSH 접속 후 명령어 사용:",
                  code: `# 1. CapRover 호스트에 SSH 접속
ssh root@your-server-ip

# 2. 실행 중인 컨테이너 확인
docker ps

# 3. MySQL 컨테이너 찾기
docker ps | grep mysql

# 4. MySQL 컨테이너 로그 보기
docker logs $(docker ps | grep mysql | awk '{print $1}')

# 5. MySQL 컨테이너 내부 접속
docker exec -it $(docker ps | grep mysql | awk '{print $1}') bash`
                },
                {
                  heading: "✅ 초급 실습",
                  checklist: [
                    "docker ps로 실행 중인 컨테이너 3개 이상 확인",
                    "각 컨테이너의 이름, 이미지, 상태 파악",
                    "docker logs로 MySQL 로그 확인",
                    "docker exec로 MySQL 컨테이너 내부 접속 후 exit로 빠져나오기",
                    "docker stats로 리소스 사용량 확인 (Ctrl+C로 종료)"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 볼륨 마운트와 네트워크 이해하기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Docker 볼륨으로 데이터를 영구 보존하고, 컨테이너 간 네트워크 통신을 이해한다."
                },
                {
                  heading: "1. 볼륨이 필요한 이유",
                  content: "컨테이너는 삭제되면 내부 데이터도 사라집니다. 볼륨을 사용하면 데이터를 컨테이너 외부에 저장할 수 있습니다.",
                  list: [
                    "컨테이너 삭제 후 재생성해도 데이터 유지",
                    "여러 컨테이너가 같은 데이터 공유 가능",
                    "백업과 마이그레이션이 쉬움"
                  ]
                },
                {
                  heading: "2. 볼륨 관련 명령어",
                  code: `# 볼륨 목록 보기
docker volume ls

# 볼륨 상세 정보
docker volume inspect <volume_name>

# 볼륨 생성
docker volume create my_data

# 볼륨으로 컨테이너 실행
docker run -v my_data:/var/lib/mysql mysql:8.0

# 호스트 디렉토리 마운트
docker run -v /host/path:/container/path nginx

# 사용하지 않는 볼륨 삭제
docker volume prune`
                },
                {
                  heading: "3. 실습: 볼륨 테스트",
                  steps: [
                    {
                      label: "Step 1",
                      text: "테스트 볼륨 생성",
                      code: "docker volume create test_vol"
                    },
                    {
                      label: "Step 2",
                      text: "볼륨을 마운트한 컨테이너 실행",
                      code: "docker run -it --rm -v test_vol:/data ubuntu bash\n# 컨테이너 내부에서:\necho 'Hello Volume' > /data/test.txt\nexit"
                    },
                    {
                      label: "Step 3",
                      text: "새 컨테이너로 같은 볼륨 확인",
                      code: "docker run -it --rm -v test_vol:/data ubuntu bash\ncat /data/test.txt  # Hello Volume 출력\nexit"
                    },
                    {
                      label: "결과",
                      text: "컨테이너는 삭제되었지만 데이터는 볼륨에 보존됨!"
                    }
                  ]
                },
                {
                  heading: "4. Docker 네트워크",
                  content: "컨테이너끼리 통신하려면 같은 네트워크에 있어야 합니다.",
                  code: `# 네트워크 목록
docker network ls

# 컨테이너가 속한 네트워크 확인
docker inspect <container_id> | grep NetworkMode

# CapRover는 기본적으로 'captain-overlay-network' 사용
# 같은 네트워크의 컨테이너는 컨테이너명으로 통신 가능

# 예시: 백엔드에서 MySQL 접속
DB_HOST=srv-captain--mysql  # CapRover의 명명 규칙
DB_PORT=3306`
                },
                {
                  heading: "5. CapRover에서 볼륨 확인",
                  code: `# CapRover가 생성한 볼륨 보기
docker volume ls | grep captain

# MySQL 데이터 볼륨 찾기
docker volume ls | grep mysql

# 볼륨 백업 (호스트로 복사)
docker run --rm -v <volume_name>:/source -v $(pwd):/backup ubuntu tar czf /backup/backup.tar.gz -C /source .`
                },
                {
                  heading: "✅ 중급 실습",
                  checklist: [
                    "docker volume ls로 현재 볼륨 확인",
                    "MySQL 컨테이너가 사용하는 볼륨 찾기",
                    "테스트 볼륨 생성 후 데이터 보존 확인",
                    "docker network ls로 CapRover 네트워크 확인",
                    "컨테이너 간 통신 테스트 (백엔드 → MySQL)"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 리소스 제한과 컨테이너 최적화",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "컨테이너의 CPU/메모리를 제한하고, 멀티 스테이지 빌드로 이미지를 최적화한다."
                },
                {
                  heading: "1. 리소스 제한의 필요성",
                  content: "한 컨테이너가 과도한 리소스를 사용하면 다른 컨테이너에 영향을 줍니다.",
                  list: [
                    "메모리 제한 없으면 서버 전체 다운 가능",
                    "CPU 제한으로 공평한 자원 분배",
                    "I/O 제한으로 디스크 병목 방지"
                  ]
                },
                {
                  heading: "2. 메모리 제한",
                  code: `# 컨테이너 생성 시 메모리 제한
docker run -m 512m nginx  # 최대 512MB

# 실행 중인 컨테이너 업데이트
docker update --memory 1g <container_id>

# 메모리 초과 시 동작
--oom-kill-disable  # OOM Killer 비활성화 (위험!)
# 기본값: 메모리 초과 시 컨테이너 강제 종료

# CapRover에서 설정
# App Config → Memory Limit: 512MB`
                },
                {
                  heading: "3. CPU 제한",
                  code: `# CPU 코어 수 제한
docker run --cpus=1.5 nginx  # 1.5개 코어 사용

# CPU 상대 비율 (기본값: 1024)
docker run --cpu-shares=512 nginx  # 절반만 사용

# 특정 CPU 코어 지정
docker run --cpuset-cpus=0,1 nginx  # 코어 0, 1만 사용

# 확인
docker stats --no-stream
# CPU %가 설정한 한도를 넘지 않는지 확인`
                },
                {
                  heading: "4. Dockerfile 최적화",
                  content: "멀티 스테이지 빌드로 이미지 크기를 줄입니다:",
                  code: `# Before: 1.2GB
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]

# After: 150MB (멀티 스테이지)
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["node", "server.js"]

# 크기 비교
docker images
# node:18         1.2GB
# node:18-alpine  150MB`
                },
                {
                  heading: "5. 컨테이너 헬스체크",
                  code: `# Dockerfile에 헬스체크 추가
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# 실행 중인 컨테이너에 헬스체크 추가
docker run --health-cmd='curl -f http://localhost || exit 1' \\
  --health-interval=30s nginx

# 헬스 상태 확인
docker ps
# STATUS: Up 2 minutes (healthy)`
                },
                {
                  heading: "6. 로깅 드라이버 최적화",
                  content: "로그가 무한정 쌓이지 않도록 제한:",
                  code: `# 로그 크기 제한
docker run --log-opt max-size=10m --log-opt max-file=3 nginx

# JSON 파일 로깅 (기본값)
# /var/lib/docker/containers/<container_id>/<container_id>-json.log

# 로그 확인
docker logs --tail 100 <container_id>

# 로그 파일 직접 삭제 (주의!)
truncate -s 0 /var/lib/docker/containers/*/*-json.log`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "컨테이너에 메모리 512MB 제한 설정 후 초과 테스트",
                    "CPU 제한 설정 후 docker stats로 확인",
                    "멀티 스테이지 Dockerfile 작성하여 이미지 크기 50% 이상 감소",
                    "헬스체크 설정 후 의도적으로 실패시켜 unhealthy 상태 확인",
                    "로그 크기 제한 설정 후 오래된 로그 자동 삭제 확인"
                  ]
                }
              ]
            }
          }
        },
        {
          id: '2-2',
          name: '데이터베이스 운영 (MySQL)',
          goal: 'MySQL을 안정적으로 운영하고 성능 문제를 파악할 수 있다',
          hours: 10,
          keywords: ['MySQL optimization', 'slow query', 'database maintenance'],
          tasks: [
            '슬로우 쿼리 로그 활성화',
            '현재 연결 수 확인하는 쿼리 실행',
            '테이블별 용량 확인'
          ],
          content: {
            beginner: {
              title: "초급: MySQL 기본 관리와 상태 확인",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "MySQL 서버 상태를 확인하고, 기본적인 관리 작업을 수행할 수 있다."
                },
                {
                  heading: "1. MySQL 운영이 중요한 이유",
                  content: "데이터베이스는 서비스의 핵심입니다. 작은 문제가 전체 서비스 중단으로 이어질 수 있습니다.",
                  list: [
                    "느린 쿼리 → 사용자 경험 저하 (로딩 5초 이상)",
                    "연결 수 초과 → 신규 사용자 접속 불가",
                    "디스크 용량 부족 → 데이터 입력 실패",
                    "백업 없음 → 데이터 손실 시 복구 불가"
                  ]
                },
                {
                  heading: "2. MySQL 컨테이너 접속하기",
                  steps: [
                    {
                      label: "방법 1: CapRover 대시보드",
                      code: "Apps → MySQL 앱 → 우측 ... 메뉴 → Web Terminal"
                    },
                    {
                      label: "방법 2: Docker 명령어",
                      code: "# MySQL 컨테이너 찾기\ndocker ps | grep mysql\n\n# 컨테이너 내부 접속\ndocker exec -it <container_id> bash\n\n# MySQL 클라이언트 실행\nmysql -u root -p$MYSQL_ROOT_PASSWORD"
                    }
                  ]
                },
                {
                  heading: "3. 서버 상태 확인 필수 명령어",
                  code: `-- 1. 현재 연결 수 확인
SHOW STATUS LIKE 'Threads_connected';
-- 결과: Threads_connected | 15
-- 의미: 현재 15개 연결 활성화

-- 2. 최대 연결 수 확인
SHOW VARIABLES LIKE 'max_connections';
-- 기본값: 151
-- 15/151 = 10% 사용 중 (안전)

-- 3. 실행 중인 쿼리 확인
SHOW PROCESSLIST;
-- Id, User, Host, db, Command, Time, State, Info 표시
-- Time이 큰 쿼리 = 느린 쿼리

-- 4. 데이터베이스 목록
SHOW DATABASES;

-- 5. 현재 사용자 확인
SELECT USER(), DATABASE();`
                },
                {
                  heading: "4. 테이블 용량 확인",
                  code: `-- 데이터베이스별 용량
SELECT
  table_schema AS 'Database',
  ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)'
FROM information_schema.tables
GROUP BY table_schema
ORDER BY SUM(data_length + index_length) DESC;

-- 특정 데이터베이스의 테이블별 용량
USE cms_database;
SELECT
  table_name AS 'Table',
  ROUND((data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)',
  table_rows AS 'Rows'
FROM information_schema.tables
WHERE table_schema = 'cms_database'
ORDER BY (data_length + index_length) DESC;

-- 결과 예시:
-- posts       15.23 MB    50000 rows
-- users        2.45 MB    10000 rows
-- sessions     1.12 MB    25000 rows`
                },
                {
                  heading: "5. 기본 유지보수 작업",
                  steps: [
                    {
                      label: "테이블 최적화",
                      text: "데이터 삭제 후 공간을 회수합니다",
                      code: "OPTIMIZE TABLE posts;\n-- 결과: Table optimized"
                    },
                    {
                      label: "테이블 검사",
                      text: "데이터 손상 여부 확인",
                      code: "CHECK TABLE posts;\n-- 결과: OK 또는 repair 필요"
                    },
                    {
                      label: "테이블 복구",
                      text: "손상된 테이블 수리",
                      code: "REPAIR TABLE posts;"
                    }
                  ]
                },
                {
                  heading: "6. 일반적인 문제와 해결",
                  list: [
                    "연결 실패 → 방화벽, 비밀번호 확인",
                    "Too many connections → max_connections 증가 또는 유휴 연결 종료",
                    "Disk full → 오래된 로그 삭제, 불필요한 데이터 정리",
                    "Table is full → 테이블 용량 제한 확인 (InnoDB는 보통 무제한)"
                  ]
                },
                {
                  heading: "✅ 초급 실습",
                  checklist: [
                    "MySQL 컨테이너에 접속하여 root로 로그인",
                    "현재 연결 수와 최대 연결 수 확인",
                    "SHOW PROCESSLIST로 실행 중인 쿼리 확인",
                    "데이터베이스별 용량 확인 쿼리 실행",
                    "가장 큰 테이블 3개 찾기"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 슬로우 쿼리 분석과 성능 튜닝",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "느린 쿼리를 찾아내고, 인덱스를 활용하여 성능을 개선할 수 있다."
                },
                {
                  heading: "1. 슬로우 쿼리 로그란?",
                  content: "지정한 시간(예: 2초) 이상 걸리는 쿼리를 자동으로 기록하는 기능입니다.",
                  list: [
                    "병목 쿼리를 식별할 수 있음",
                    "인덱스가 필요한 부분 파악",
                    "불필요한 JOIN이나 서브쿼리 발견",
                    "프로덕션에서는 항상 활성화 권장"
                  ]
                },
                {
                  heading: "2. 슬로우 쿼리 로그 활성화",
                  code: `-- 현재 설정 확인
SHOW VARIABLES LIKE 'slow_query%';
SHOW VARIABLES LIKE 'long_query_time';

-- 활성화 (재시작 시 유지하려면 my.cnf 수정 필요)
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;  -- 2초 이상 쿼리 기록
SET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';

-- my.cnf 영구 설정
[mysqld]
slow_query_log = 1
long_query_time = 2
slow_query_log_file = /var/log/mysql/slow.log
log_queries_not_using_indexes = 1  -- 인덱스 미사용 쿼리도 기록`
                },
                {
                  heading: "3. 슬로우 쿼리 로그 분석",
                  code: `# 로그 파일 확인
tail -f /var/log/mysql/slow.log

# 로그 예시
# Time: 2025-01-04T15:30:00.123456Z
# User@Host: cms_user[cms_user] @ 172.17.0.5
# Query_time: 5.234567  Lock_time: 0.000123  Rows_sent: 1000  Rows_examined: 500000
SELECT * FROM posts WHERE created_at > '2024-01-01';

-- 분석 포인트:
-- Query_time: 5.2초 (너무 느림!)
-- Rows_examined: 500000 (50만 행 검사)
-- Rows_sent: 1000 (1000행만 반환)
-- → 인덱스가 없어서 전체 테이블 스캔!`
                },
                {
                  heading: "4. EXPLAIN으로 쿼리 분석",
                  code: `-- 쿼리 실행 계획 확인
EXPLAIN SELECT * FROM posts WHERE created_at > '2024-01-01';

-- 결과 예시:
-- id | select_type | table | type | possible_keys | key  | rows   | Extra
-- 1  | SIMPLE      | posts | ALL  | NULL          | NULL | 500000 | Using where

-- type = ALL → 전체 테이블 스캔 (최악!)
-- rows = 500000 → 50만 행 검사

-- 인덱스 추가 후:
CREATE INDEX idx_created_at ON posts(created_at);

EXPLAIN SELECT * FROM posts WHERE created_at > '2024-01-01';
-- type = range → 범위 스캔 (좋음)
-- rows = 1000 → 1000행만 검사 (500배 개선!)`
                },
                {
                  heading: "5. 인덱스 전략",
                  content: "효과적인 인덱스 설계:",
                  list: [
                    "WHERE 절에 자주 사용되는 컬럼",
                    "JOIN 조건에 사용되는 외래키",
                    "ORDER BY에 사용되는 컬럼",
                    "복합 인덱스는 카디널리티 높은 컬럼 우선"
                  ],
                  code: `-- 단일 인덱스
CREATE INDEX idx_username ON users(username);

-- 복합 인덱스 (순서 중요!)
CREATE INDEX idx_user_created ON posts(user_id, created_at);
-- user_id로 필터링 후 created_at으로 정렬하는 쿼리에 최적

-- 유니크 인덱스
CREATE UNIQUE INDEX idx_email ON users(email);

-- 인덱스 목록 확인
SHOW INDEX FROM posts;

-- 인덱스 삭제
DROP INDEX idx_created_at ON posts;`
                },
                {
                  heading: "6. 쿼리 최적화 팁",
                  list: [
                    "SELECT * 대신 필요한 컬럼만 조회",
                    "LIMIT 사용하여 결과 제한",
                    "서브쿼리 대신 JOIN 사용 (대부분의 경우)",
                    "COUNT(*)보다 COUNT(id) 또는 캐시 활용",
                    "LIKE '%keyword%' 대신 전문 검색(Full-Text Search)"
                  ],
                  code: `-- 나쁜 쿼리
SELECT * FROM posts WHERE title LIKE '%검색어%';
-- 인덱스 사용 불가, 전체 스캔

-- 개선 1: 전문 검색 인덱스
ALTER TABLE posts ADD FULLTEXT(title);
SELECT * FROM posts WHERE MATCH(title) AGAINST('검색어');

-- 개선 2: 접두어 검색
SELECT * FROM posts WHERE title LIKE '검색어%';
-- 인덱스 사용 가능`
                },
                {
                  heading: "✅ 중급 실습",
                  checklist: [
                    "슬로우 쿼리 로그 활성화 (2초 기준)",
                    "의도적으로 느린 쿼리 실행 후 로그 확인",
                    "EXPLAIN으로 쿼리 분석하여 type=ALL 찾기",
                    "적절한 인덱스 추가 후 성능 비교",
                    "인덱스 추가 전후 EXPLAIN 결과 비교하여 rows 차이 확인"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 복제, 파티셔닝, 고급 튜닝",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "MySQL 복제(Replication)를 설정하고, 대용량 테이블을 파티셔닝하여 성능을 극대화한다."
                },
                {
                  heading: "1. MySQL 복제 (Replication)",
                  content: "마스터-슬레이브 구조로 데이터를 실시간 복사합니다.",
                  list: [
                    "읽기 부하 분산 (슬레이브에서 SELECT)",
                    "백업 소스 (슬레이브에서 백업하여 마스터 부하 감소)",
                    "고가용성 (마스터 장애 시 슬레이브를 승격)",
                    "지리적 분산 (다른 지역에 슬레이브 배치)"
                  ]
                },
                {
                  heading: "2. 복제 설정 (마스터)",
                  code: `# 마스터 my.cnf 설정
[mysqld]
server-id = 1
log_bin = /var/log/mysql/mysql-bin.log
binlog_do_db = cms_database  # 복제할 DB

# MySQL 재시작 후 복제 사용자 생성
CREATE USER 'repl_user'@'%' IDENTIFIED BY 'strong_password';
GRANT REPLICATION SLAVE ON *.* TO 'repl_user'@'%';
FLUSH PRIVILEGES;

# 마스터 상태 확인
SHOW MASTER STATUS;
-- File: mysql-bin.000001, Position: 154`
                },
                {
                  heading: "3. 복제 설정 (슬레이브)",
                  code: `# 슬레이브 my.cnf 설정
[mysqld]
server-id = 2
relay_log = /var/log/mysql/relay.log
read_only = 1  # 실수로 쓰기 방지

# 마스터 연결 설정
CHANGE MASTER TO
  MASTER_HOST='master_ip',
  MASTER_USER='repl_user',
  MASTER_PASSWORD='strong_password',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=154;

# 복제 시작
START SLAVE;

# 복제 상태 확인
SHOW SLAVE STATUS\\G
-- Slave_IO_Running: Yes
-- Slave_SQL_Running: Yes
-- Seconds_Behind_Master: 0`
                },
                {
                  heading: "4. 테이블 파티셔닝",
                  content: "대용량 테이블을 논리적으로 분할하여 성능을 향상시킵니다.",
                  code: `-- 날짜 기준 파티셔닝 (로그 테이블에 유용)
CREATE TABLE access_logs (
  id BIGINT AUTO_INCREMENT,
  user_id INT,
  accessed_at DATETIME,
  ip VARCHAR(45),
  PRIMARY KEY (id, accessed_at)
)
PARTITION BY RANGE (YEAR(accessed_at)) (
  PARTITION p2023 VALUES LESS THAN (2024),
  PARTITION p2024 VALUES LESS THAN (2025),
  PARTITION p2025 VALUES LESS THAN (2026),
  PARTITION p_future VALUES LESS THAN MAXVALUE
);

-- 파티션별 데이터 확인
SELECT
  PARTITION_NAME,
  TABLE_ROWS
FROM INFORMATION_SCHEMA.PARTITIONS
WHERE TABLE_NAME = 'access_logs';

-- 오래된 파티션 삭제 (빠른 삭제)
ALTER TABLE access_logs DROP PARTITION p2023;`
                },
                {
                  heading: "5. 고급 성능 튜닝",
                  code: `-- InnoDB 버퍼 풀 크기 (전체 메모리의 70-80%)
SET GLOBAL innodb_buffer_pool_size = 4G;

-- 쿼리 캐시 (MySQL 8.0에서는 제거됨, Redis로 대체 권장)
SET GLOBAL query_cache_size = 128M;

-- 연결 풀 크기
SET GLOBAL max_connections = 500;
SET GLOBAL wait_timeout = 300;  -- 유휴 연결 5분 후 종료

-- 임시 테이블 크기
SET GLOBAL tmp_table_size = 128M;
SET GLOBAL max_heap_table_size = 128M;

-- 정렬 버퍼 (복잡한 ORDER BY 성능 향상)
SET GLOBAL sort_buffer_size = 4M;`
                },
                {
                  heading: "6. 프로파일링과 진단",
                  code: `-- 프로파일링 활성화 (쿼리 세부 분석)
SET profiling = 1;

SELECT * FROM posts WHERE user_id = 123;

SHOW PROFILES;
-- Query_ID | Duration | Query

SHOW PROFILE FOR QUERY 1;
-- Status                | Duration
-- Opening tables        | 0.000050
-- Executing             | 0.002345
-- Sending data          | 0.001234
-- End                   | 0.000010

-- Performance Schema 활용
SELECT * FROM performance_schema.events_statements_summary_by_digest
ORDER BY SUM_TIMER_WAIT DESC
LIMIT 10;
-- 가장 느린 쿼리 10개`
                },
                {
                  heading: "7. 실전 마이그레이션 전략",
                  content: "무중단 마이그레이션 방법:",
                  steps: [
                    {
                      label: "1단계: 새 슬레이브 추가",
                      text: "기존 마스터에 새 슬레이브 연결"
                    },
                    {
                      label: "2단계: 데이터 동기화",
                      text: "슬레이브가 마스터를 완전히 따라잡을 때까지 대기"
                    },
                    {
                      label: "3단계: 읽기 트래픽 전환",
                      text: "애플리케이션의 SELECT 쿼리를 슬레이브로 전환"
                    },
                    {
                      label: "4단계: 마스터 승격",
                      text: "점검 시간에 슬레이브를 새 마스터로 승격"
                    }
                  ]
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "마스터-슬레이브 복제 구성 (Docker Compose로 로컬 테스트)",
                    "슬레이브에서 읽기 전용 확인 (쓰기 시도 시 에러)",
                    "100만 행 이상 테이블에 파티셔닝 적용",
                    "파티션 프루닝(Partition Pruning) 효과 EXPLAIN으로 확인",
                    "Performance Schema로 가장 느린 쿼리 TOP 10 분석"
                  ]
                }
              ]
            }
          }
        },
        {
          id: '2-3',
          name: 'Redis 운영과 캐싱 전략',
          goal: 'Redis를 효과적으로 활용하고 메모리를 관리할 수 있다',
          hours: 6,
          keywords: ['Redis management', 'session storage', 'cache strategy'],
          tasks: [
            'Redis CLI로 데이터 조회',
            '메모리 사용량 확인',
            '세션 데이터 구조 파악'
          ],
          content: {
            beginner: {
              title: "초급: Redis 기본 개념과 CLI 사용법",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Redis가 무엇인지 이해하고, Redis CLI로 데이터를 조회하고 관리할 수 있다."
                },
                {
                  heading: "1. Redis란 무엇인가?",
                  content: "Redis는 메모리 기반의 키-값(Key-Value) 저장소입니다. 매우 빠른 속도로 데이터를 읽고 쓸 수 있습니다.",
                  list: [
                    "캐시: 자주 사용하는 데이터를 빠르게 조회 (DB 부하 감소)",
                    "세션 저장소: 로그인 정보, 장바구니 등",
                    "실시간 랭킹: 게임 순위, 인기 게시물",
                    "메시지 큐: 작업 대기열, 실시간 알림"
                  ]
                },
                {
                  heading: "2. Redis vs MySQL",
                  code: `# MySQL (디스크 기반)
- 영구 저장 (서버 재시작해도 데이터 유지)
- 복잡한 쿼리 가능 (JOIN, GROUP BY 등)
- 속도: 밀리초 단위 (1~100ms)

# Redis (메모리 기반)
- 휘발성 (기본적으로 재시작 시 삭제, 옵션으로 디스크 저장 가능)
- 단순한 키-값 조회
- 속도: 마이크로초 단위 (0.1ms 미만)

# 활용 예시
MySQL: 사용자 정보, 주문 내역 (영구 보관 필요)
Redis: 로그인 세션, 조회수 캐시 (일시적, 빠른 속도 필요)`
                },
                {
                  heading: "3. Redis CLI 접속하기",
                  steps: [
                    {
                      label: "방법 1: CapRover 대시보드",
                      code: "Apps → Redis 앱 → ... 메뉴 → Web Terminal\nredis-cli"
                    },
                    {
                      label: "방법 2: Docker 명령어",
                      code: "# Redis 컨테이너 찾기\ndocker ps | grep redis\n\n# Redis CLI 실행\ndocker exec -it <container_id> redis-cli\n\n# 연결 확인\nPING\n# 응답: PONG"
                    }
                  ]
                },
                {
                  heading: "4. 기본 명령어",
                  code: `# 1. 문자열 저장/조회
SET username "john"
GET username
# 결과: "john"

# 2. 유효기간 설정 (TTL: Time To Live)
SETEX session:user123 3600 "logged_in"
# 3600초(1시간) 후 자동 삭제

# 3. 남은 시간 확인
TTL session:user123
# 결과: 3599 (초)

# 4. 키 존재 여부
EXISTS username
# 결과: 1 (존재), 0 (없음)

# 5. 키 삭제
DEL username

# 6. 모든 키 보기 (주의: 프로덕션에서는 위험!)
KEYS *

# 7. 특정 패턴의 키 검색
KEYS session:*

# 8. 데이터베이스 선택 (기본 0~15)
SELECT 1
# DB 1번으로 전환`
                },
                {
                  heading: "5. 세션 데이터 구조 파악",
                  content: "실제 서비스에서 Redis에 저장된 세션 데이터 확인하기:",
                  code: `# 세션 키 패턴 찾기
KEYS sess:*
# 또는
KEYS PHPREDIS_SESSION:*

# 세션 데이터 조회
GET "sess:abc123def456"

# 결과 예시 (직렬화된 데이터)
# user_id|i:123;username|s:4:"john";cart|a:2:{i:0;s:5:"item1";i:1;s:5:"item2";}

# 세션 유효기간 확인
TTL "sess:abc123def456"
# 결과: 1800 (30분)`
                },
                {
                  heading: "6. 메모리 사용량 확인",
                  code: `# 서버 정보
INFO memory

# 주요 지표:
# used_memory_human: 15.23M (현재 사용 중인 메모리)
# maxmemory: 256M (최대 메모리 제한)
# used_memory_peak_human: 20.45M (최대 사용량)

# 모든 키 개수
DBSIZE
# 결과: 1523

# 특정 키의 메모리 사용량
MEMORY USAGE username
# 결과: 56 (bytes)`
                },
                {
                  heading: "✅ 초급 실습",
                  checklist: [
                    "Redis CLI 접속 후 PING 명령어로 연결 확인",
                    "SET/GET으로 문자열 저장/조회 테스트",
                    "SETEX로 10초 후 삭제되는 키 생성 후 TTL로 확인",
                    "KEYS 명령어로 현재 저장된 모든 키 확인",
                    "INFO memory로 메모리 사용량 확인"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 캐싱 전략과 데이터 타입 활용",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "다양한 Redis 데이터 타입을 활용하고, 효과적인 캐싱 전략을 수립할 수 있다."
                },
                {
                  heading: "1. Redis 데이터 타입",
                  content: "Redis는 문자열 외에도 다양한 자료구조를 지원합니다:",
                  list: [
                    "String: 단순 값 (세션, 카운터)",
                    "Hash: 객체 저장 (사용자 정보)",
                    "List: 순서가 있는 목록 (최근 활동, 큐)",
                    "Set: 중복 없는 집합 (태그, 좋아요)",
                    "Sorted Set: 순위가 있는 집합 (랭킹, 리더보드)"
                  ]
                },
                {
                  heading: "2. Hash 활용 (객체 저장)",
                  code: `# 사용자 정보를 Hash로 저장
HSET user:123 username "john"
HSET user:123 email "john@example.com"
HSET user:123 age 30

# 여러 필드 한 번에 설정
HMSET user:456 username "alice" email "alice@example.com" age 25

# 전체 데이터 조회
HGETALL user:123
# 결과:
# 1) "username"
# 2) "john"
# 3) "email"
# 4) "john@example.com"
# 5) "age"
# 6) "30"

# 특정 필드만 조회
HGET user:123 username
# 결과: "john"

# 필드 삭제
HDEL user:123 age`
                },
                {
                  heading: "3. List 활용 (최근 활동, 큐)",
                  code: `# 최근 본 상품 (왼쪽에 추가)
LPUSH recent:user123 "product:456"
LPUSH recent:user123 "product:789"

# 최근 5개만 유지 (나머지 삭제)
LTRIM recent:user123 0 4

# 전체 조회
LRANGE recent:user123 0 -1
# 결과: ["product:789", "product:456"]

# 작업 큐 (오른쪽에 추가, 왼쪽에서 꺼내기)
RPUSH job:queue "task1"
RPUSH job:queue "task2"
LPOP job:queue
# 결과: "task1" (FIFO)`
                },
                {
                  heading: "4. Sorted Set 활용 (랭킹)",
                  code: `# 게임 점수 저장 (점수 기준 자동 정렬)
ZADD leaderboard 1500 "player1"
ZADD leaderboard 2300 "player2"
ZADD leaderboard 1800 "player3"

# 상위 3명 조회 (내림차순)
ZREVRANGE leaderboard 0 2 WITHSCORES
# 결과:
# 1) "player2"
# 2) "2300"
# 3) "player3"
# 4) "1800"
# 5) "player1"
# 6) "1500"

# 특정 플레이어 순위 (0부터 시작)
ZREVRANK leaderboard "player3"
# 결과: 1 (2등)

# 점수 증가
ZINCRBY leaderboard 100 "player1"
# player1의 점수 1600으로 증가`
                },
                {
                  heading: "5. 캐싱 전략",
                  content: "언제 캐시를 사용하고, 언제 갱신할까?",
                  list: [
                    "Cache-Aside: 앱이 직접 캐시 관리 (가장 일반적)",
                    "Write-Through: DB 쓰기 시 캐시도 동시 업데이트",
                    "Write-Behind: 캐시에만 쓰고 나중에 DB 동기화",
                    "Refresh-Ahead: 만료 직전 미리 갱신"
                  ],
                  code: `# Cache-Aside 패턴 (의사코드)
function getUser(userId) {
  // 1. 캐시에서 먼저 조회
  cached = redis.get("user:" + userId)
  if (cached) {
    return cached  // 캐시 히트
  }

  // 2. 캐시 미스 → DB 조회
  user = db.query("SELECT * FROM users WHERE id = ?", userId)

  // 3. 캐시에 저장 (1시간 유효)
  redis.setex("user:" + userId, 3600, JSON.stringify(user))

  return user
}

# 캐시 무효화 (데이터 변경 시)
function updateUser(userId, data) {
  db.query("UPDATE users SET ... WHERE id = ?", userId, data)
  redis.del("user:" + userId)  // 캐시 삭제
}`
                },
                {
                  heading: "6. TTL 전략",
                  content: "캐시 유효기간 설정 가이드:",
                  list: [
                    "자주 변경되는 데이터: 짧게 (1~5분)",
                    "거의 변경 없는 데이터: 길게 (1시간~1일)",
                    "세션: 로그인 유지 시간 (30분~24시간)",
                    "임시 데이터: 매우 짧게 (10초~1분)"
                  ],
                  code: `# 상품 정보 (1시간)
SETEX product:123 3600 "{ ... }"

# 실시간 재고 (1분)
SETEX stock:item456 60 "15"

# 일일 방문자 수 (자정까지)
SET daily:visits:20250104 1523
EXPIREAT daily:visits:20250104 1735776000  # Unix timestamp`
                },
                {
                  heading: "✅ 중급 실습",
                  checklist: [
                    "Hash로 사용자 객체 저장 후 HGETALL로 조회",
                    "List로 최근 활동 5개 저장 후 LTRIM으로 제한",
                    "Sorted Set으로 점수 랭킹 구현 후 상위 10명 조회",
                    "Cache-Aside 패턴으로 상품 정보 캐싱 구현",
                    "다양한 TTL 설정하여 자동 삭제 확인"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 메모리 최적화와 고가용성",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Redis 메모리를 효율적으로 관리하고, 클러스터와 센티널로 고가용성을 구현한다."
                },
                {
                  heading: "1. 메모리 관리 전략",
                  content: "메모리가 부족할 때 어떻게 처리할까?",
                  code: `# maxmemory 설정 (redis.conf 또는 런타임)
CONFIG SET maxmemory 256mb

# 메모리 정책 (maxmemory-policy)
CONFIG SET maxmemory-policy allkeys-lru

# 정책 종류:
# noeviction: 메모리 가득 차면 쓰기 거부 (기본값)
# allkeys-lru: 모든 키 중 LRU(Least Recently Used) 삭제
# allkeys-lfu: 모든 키 중 LFU(Least Frequently Used) 삭제
# volatile-lru: TTL 있는 키 중 LRU 삭제
# volatile-ttl: TTL 짧은 키부터 삭제
# allkeys-random: 랜덤 삭제

# 현재 정책 확인
CONFIG GET maxmemory-policy`
                },
                {
                  heading: "2. 메모리 최적화 기법",
                  code: `# 1. 짧은 키 이름 사용
# 나쁨: user:profile:123:information
# 좋음: u:p:123

# 2. Hash 대신 String (작은 객체)
# Hash: 각 필드마다 오버헤드
# String: JSON 직렬화하여 저장
SET u:123 '{"name":"john","age":30}'

# 3. Pipeline으로 여러 명령 한 번에 전송
# 네트워크 왕복 시간(RTT) 감소
MULTI
SET key1 "value1"
SET key2 "value2"
SET key3 "value3"
EXEC

# 4. 대량 데이터 삭제는 UNLINK (비동기)
DEL bigkey  # 블로킹 (모든 작업 중단)
UNLINK bigkey  # 논블로킹 (백그라운드 삭제)

# 5. 불필요한 키 정리
redis-cli --scan --pattern "temp:*" | xargs redis-cli DEL`
                },
                {
                  heading: "3. 영구 저장 (Persistence)",
                  content: "Redis 재시작 시 데이터 복구 방법:",
                  list: [
                    "RDB (Snapshot): 주기적으로 전체 데이터 덤프",
                    "AOF (Append Only File): 모든 쓰기 명령 로그 기록",
                    "RDB + AOF: 두 가지 병행 (권장)"
                  ],
                  code: `# RDB 설정 (redis.conf)
save 900 1      # 900초 동안 1개 이상 변경 시 저장
save 300 10     # 300초 동안 10개 이상 변경 시 저장
save 60 10000   # 60초 동안 10000개 이상 변경 시 저장

# 수동 스냅샷
BGSAVE  # 백그라운드에서 저장

# AOF 활성화
CONFIG SET appendonly yes
CONFIG SET appendfsync everysec  # 1초마다 디스크 동기화

# AOF 재작성 (파일 크기 최적화)
BGREWRITEAOF`
                },
                {
                  heading: "4. Redis Sentinel (고가용성)",
                  content: "마스터 장애 시 자동으로 슬레이브를 승격시킵니다.",
                  code: `# sentinel.conf 설정
sentinel monitor mymaster 127.0.0.1 6379 2
# 2개 센티널이 동의하면 failover

sentinel down-after-milliseconds mymaster 5000
# 5초 응답 없으면 다운으로 간주

sentinel failover-timeout mymaster 60000
# 페일오버 타임아웃 60초

# 센티널 실행
redis-sentinel /path/to/sentinel.conf

# 마스터 상태 확인
redis-cli -p 26379 sentinel master mymaster`
                },
                {
                  heading: "5. Redis Cluster (분산 처리)",
                  content: "데이터를 여러 노드에 분산하여 처리 능력을 확장합니다.",
                  code: `# 클러스터 생성 (최소 6개 노드: 3 마스터 + 3 슬레이브)
redis-cli --cluster create \\
  127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 \\
  127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \\
  --cluster-replicas 1

# 클러스터 상태 확인
redis-cli -c -p 7000 cluster info

# 키 분산 원리: Hash Slot (0~16383)
# CRC16(key) % 16384 = slot 번호
# 각 마스터가 slot 범위 담당

# 클러스터 모드에서 키 조회
redis-cli -c -p 7000
SET mykey "value"
# -> Redirected to slot [14687] located at 127.0.0.1:7002`
                },
                {
                  heading: "6. 모니터링과 진단",
                  code: `# 실시간 명령어 모니터링 (주의: 성능 저하 가능)
MONITOR

# 슬로우 로그 (느린 명령 기록)
CONFIG SET slowlog-log-slower-than 10000  # 10ms 이상
SLOWLOG GET 10
# 가장 느린 명령 10개 표시

# 클라이언트 연결 목록
CLIENT LIST

# 통계 정보
INFO stats
# keyspace_hits: 캐시 히트
# keyspace_misses: 캐시 미스
# 히트율 = hits / (hits + misses)

# 메모리 파편화 확인
INFO memory | grep mem_fragmentation_ratio
# 1.0 ~ 1.5: 정상
# > 1.5: 메모리 파편화 발생 (재시작 필요)`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "maxmemory-policy를 allkeys-lru로 설정 후 메모리 가득 채워 자동 삭제 확인",
                    "RDB + AOF 활성화하여 Redis 재시작 후 데이터 복구 테스트",
                    "Docker Compose로 Sentinel 3개 노드 구성 후 마스터 강제 종료 시 자동 페일오버 확인",
                    "SLOWLOG로 느린 명령 찾아 최적화",
                    "INFO stats로 캐시 히트율 계산 (80% 이상 목표)"
                  ]
                }
              ]
            }
          }
        },
        {
          id: '2-4',
          name: '모니터링과 알림 시스템',
          goal: '문제를 조기에 발견하고 알림을 받을 수 있다',
          hours: 4,
          keywords: ['monitoring', 'alerting', 'uptime tracking'],
          tasks: [
            'Uptime Robot 계정 생성 및 설정',
            'NetData에서 실시간 그래프 확인',
            '알림 테스트 (의도적으로 서비스 중지)'
          ],
          content: {
            beginner: {
              title: "초급: Uptime 모니터링과 기본 알림 설정",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "서비스가 다운되었을 때 즉시 알림을 받을 수 있도록 Uptime 모니터링을 설정한다."
                },
                {
                  heading: "1. 모니터링이 필요한 이유",
                  content: "서버는 언제든 다운될 수 있습니다. 사용자보다 먼저 문제를 발견해야 합니다.",
                  list: [
                    "서버 다운: 하드웨어 장애, 네트워크 문제",
                    "애플리케이션 크래시: 메모리 부족, 버그",
                    "데이터베이스 장애: 연결 수 초과, 디스크 부족",
                    "성능 저하: CPU 100%, 느린 응답 시간"
                  ]
                },
                {
                  heading: "2. Uptime Robot 설정",
                  content: "무료로 50개 모니터를 5분 간격으로 체크할 수 있습니다.",
                  steps: [
                    {
                      label: "Step 1",
                      text: "계정 생성",
                      code: "https://uptimerobot.com 접속\nSign Up (무료)"
                    },
                    {
                      label: "Step 2",
                      text: "새 모니터 추가",
                      code: "Add New Monitor → HTTP(s) 선택\nFriendly Name: My CMS\nURL: https://your-site.com\nMonitoring Interval: 5 minutes"
                    },
                    {
                      label: "Step 3",
                      text: "알림 설정",
                      code: "Alert Contacts → Add Alert Contact\nEmail 또는 Slack, Discord, Telegram 등\n알림 받을 이메일 입력 후 Verify"
                    },
                    {
                      label: "Step 4",
                      text: "모니터 활성화",
                      code: "Create Monitor 클릭\n5분마다 사이트 체크 시작"
                    }
                  ]
                },
                {
                  heading: "3. 모니터링 지표",
                  content: "Uptime Robot이 확인하는 항목:",
                  list: [
                    "HTTP 응답 코드: 200 OK인지 확인",
                    "응답 시간: 몇 초 만에 응답하는가",
                    "다운타임: 며칠 중 몇 시간 다운되었는가",
                    "Uptime 비율: 99.9% (한 달에 약 43분 다운)"
                  ],
                  code: `# Uptime 목표
99.9% (Three Nines): 월 43분 다운 (일반 서비스)
99.99% (Four Nines): 월 4분 다운 (중요 서비스)
99.999% (Five Nines): 월 26초 다운 (금융, 의료)

# 현실적 목표
개인 프로젝트: 99% 이상 (월 7시간)
소규모 비즈니스: 99.5% 이상 (월 3.5시간)
대규모 서비스: 99.9% 이상`
                },
                {
                  heading: "4. 알림 테스트",
                  content: "실제로 알림이 잘 작동하는지 테스트해봅시다.",
                  steps: [
                    {
                      label: "방법 1: 서비스 중지",
                      code: "CapRover → Apps → 프론트엔드 앱 → Stop\n5분 대기\n→ 알림 수신 확인\n→ 다시 Start"
                    },
                    {
                      label: "방법 2: 방화벽 차단",
                      code: "서버 방화벽에서 HTTP(80), HTTPS(443) 임시 차단\n5분 대기\n→ 알림 수신 확인\n→ 방화벽 해제"
                    },
                    {
                      label: "알림 예시",
                      text: "이메일 제목: [Alert] My CMS is DOWN\n내용: Your monitor 'My CMS' is currently down.\nReason: Connection timeout"
                    }
                  ]
                },
                {
                  heading: "5. CapRover 내장 NetData",
                  content: "CapRover에는 NetData가 기본 내장되어 실시간 시스템 모니터링을 제공합니다.",
                  code: `# NetData 접속
https://captain.your-server.com/#/monitoring

# 확인 가능한 지표:
- CPU 사용률 (%)
- 메모리 사용량 (MB)
- 디스크 I/O (MB/s)
- 네트워크 트래픽 (Mbps)
- 컨테이너별 리소스 사용량

# 주의할 지표:
CPU > 80%: 처리 부하 과다
메모리 > 90%: 메모리 부족 위험
디스크 > 90%: 공간 확보 필요`
                },
                {
                  heading: "6. 일일 체크리스트",
                  checklist: [
                    "Uptime Robot 대시보드에서 모든 서비스 Up 상태 확인",
                    "NetData에서 CPU/메모리 정상 범위 확인",
                    "응답 시간이 평소보다 느리지 않은지 확인",
                    "에러 알림이 왔다면 즉시 확인"
                  ]
                },
                {
                  heading: "✅ 초급 실습",
                  checklist: [
                    "Uptime Robot 계정 생성 및 메인 사이트 모니터 추가",
                    "이메일 알림 설정 및 Verify",
                    "의도적으로 서비스 중지 후 5분 내 알림 수신 확인",
                    "NetData 접속하여 실시간 CPU/메모리 그래프 확인",
                    "Uptime Robot 대시보드에서 응답 시간 그래프 확인"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 다층 모니터링과 알림 채널 확장",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "여러 계층(서버, 애플리케이션, 데이터베이스)을 모니터링하고, 다양한 채널로 알림을 받는다."
                },
                {
                  heading: "1. 모니터링 계층",
                  content: "서비스는 여러 계층으로 구성되어 있으며, 각각 모니터링이 필요합니다.",
                  list: [
                    "인프라 계층: 서버 CPU, 메모리, 디스크",
                    "네트워크 계층: 응답 시간, 연결 상태",
                    "애플리케이션 계층: API 응답, 에러율",
                    "데이터베이스 계층: 연결 수, 슬로우 쿼리"
                  ]
                },
                {
                  heading: "2. 여러 엔드포인트 모니터링",
                  content: "메인 페이지뿐만 아니라 중요한 API도 모니터링합니다.",
                  code: `# Uptime Robot 모니터 추가
1. 프론트엔드: https://your-site.com
2. API 헬스체크: https://api.your-site.com/health
3. 관리자 페이지: https://admin.your-site.com
4. 결제 API: https://api.your-site.com/payment/status

# 각 모니터마다 다른 설정:
- 프론트엔드: 5분 간격
- API: 3분 간격 (더 중요)
- 결제: 1분 간격 (가장 중요, 유료 플랜)`
                },
                {
                  heading: "3. Slack 알림 설정",
                  content: "팀 협업 시 Slack으로 알림받기:",
                  steps: [
                    {
                      label: "Step 1",
                      text: "Slack Webhook 생성",
                      code: "Slack → Apps → Incoming Webhooks\nAdd to Slack → 채널 선택 (#alerts)\nWebhook URL 복사"
                    },
                    {
                      label: "Step 2",
                      text: "Uptime Robot 연동",
                      code: "Alert Contacts → Add Alert Contact\nType: Webhook\nWebhook URL: 붙여넣기\nPost Value: JSON 형식 설정"
                    },
                    {
                      label: "Step 3",
                      text: "알림 메시지 커스터마이즈",
                      code: `{
  "text": "*[ALERT]* {{monitorFriendlyName}} is {{monitorAlertType}}",
  "attachments": [
    {
      "color": "danger",
      "fields": [
        {"title": "URL", "value": "{{monitorURL}}", "short": false},
        {"title": "Reason", "value": "{{alertDetails}}", "short": false}
      ]
    }
  ]
}`
                    }
                  ]
                },
                {
                  heading: "4. 커스텀 헬스체크 엔드포인트",
                  content: "애플리케이션이 자체적으로 건강 상태를 보고하도록 합니다.",
                  code: `// Node.js 예시
app.get('/health', async (req, res) => {
  try {
    // 1. DB 연결 확인
    await db.ping();

    // 2. Redis 연결 확인
    await redis.ping();

    // 3. 디스크 공간 확인
    const disk = await checkDiskSpace('/');
    if (disk.free < 1e9) throw new Error('Low disk space');

    // 4. 메모리 확인
    const mem = process.memoryUsage();
    if (mem.heapUsed / mem.heapTotal > 0.9) {
      throw new Error('High memory usage');
    }

    res.status(200).json({
      status: 'ok',
      timestamp: Date.now(),
      uptime: process.uptime(),
      checks: {
        database: 'ok',
        redis: 'ok',
        disk: 'ok',
        memory: 'ok'
      }
    });
  } catch (error) {
    res.status(503).json({
      status: 'error',
      error: error.message
    });
  }
});

// Uptime Robot 설정:
// URL: https://api.your-site.com/health
// Keyword: "status":"ok" (이 텍스트 포함 여부 확인)`
                },
                {
                  heading: "5. 응답 시간 기준 알림",
                  content: "사이트가 느려졌을 때도 알림받기:",
                  code: `# Uptime Robot 설정
Advanced Settings → Response Time Alert
Threshold: 2000ms (2초)
Consecutive Checks: 3 (3번 연속 초과 시 알림)

# 이렇게 하면:
- 일시적 느림: 무시
- 지속적 느림: 알림`
                },
                {
                  heading: "6. 애플리케이션 로그 모니터링",
                  content: "특정 에러가 로그에 나타나면 알림:",
                  code: `# 간단한 로그 모니터링 스크립트
#!/bin/bash
# check_errors.sh

ERROR_COUNT=$(docker logs backend_container --since 5m | grep -c "ERROR\\|FATAL")

if [ $ERROR_COUNT -gt 10 ]; then
  curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \\
    -H 'Content-Type: application/json' \\
    -d "{
      \\"text\\": \\"⚠️ Too many errors: $ERROR_COUNT in last 5 minutes\\"
    }"
fi

# Cron으로 5분마다 실행
*/5 * * * * /path/to/check_errors.sh`
                },
                {
                  heading: "✅ 중급 실습",
                  checklist: [
                    "최소 3개 엔드포인트 (프론트엔드, API, DB) 모니터링 추가",
                    "Slack 또는 Discord Webhook 연동하여 알림 수신",
                    "/health 엔드포인트 구현 후 Uptime Robot 연결",
                    "응답 시간 2초 이상 시 알림 설정",
                    "Docker 로그에서 에러 카운트하는 스크립트 작성"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 종합 모니터링과 SRE 지표",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Prometheus + Grafana로 종합 모니터링 대시보드를 구축하고, SLI/SLO를 정의한다."
                },
                {
                  heading: "1. Prometheus + Grafana 스택",
                  content: "시계열 데이터를 수집하고 시각화하는 산업 표준 도구입니다.",
                  list: [
                    "Prometheus: 메트릭 수집 및 저장 (시계열 DB)",
                    "Grafana: 데이터 시각화 대시보드",
                    "Exporters: 각 서비스의 메트릭 노출 (Node, MySQL, Redis)",
                    "Alertmanager: 복잡한 알림 규칙 관리"
                  ]
                },
                {
                  heading: "2. CapRover에 Prometheus 설치",
                  code: `# CapRover Apps → One-Click Apps → Prometheus
# 설정:
App Name: prometheus
Port: 9090

# prometheus.yml 설정 (환경변수 또는 볼륨)
global:
  scrape_interval: 15s

scrape_configs:
  # Node Exporter (서버 메트릭)
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']

  # MySQL Exporter
  - job_name: 'mysql'
    static_configs:
      - targets: ['mysql-exporter:9104']

  # Redis Exporter
  - job_name: 'redis'
    static_configs:
      - targets: ['redis-exporter:9121']

  # Application (커스텀)
  - job_name: 'app'
    static_configs:
      - targets: ['backend:3000']`
                },
                {
                  heading: "3. Grafana 대시보드 구성",
                  steps: [
                    {
                      label: "Step 1",
                      text: "Grafana 설치",
                      code: "CapRover → One-Click Apps → Grafana\nApp Name: grafana\n접속: https://grafana.your-server.com\n기본 로그인: admin / admin"
                    },
                    {
                      label: "Step 2",
                      text: "Prometheus 데이터소스 추가",
                      code: "Configuration → Data Sources → Add Prometheus\nURL: http://srv-captain--prometheus:9090\nSave & Test"
                    },
                    {
                      label: "Step 3",
                      text: "대시보드 Import",
                      code: "Dashboards → Import\nGrafana.com Dashboard:\n- Node Exporter: 1860\n- MySQL: 7362\n- Redis: 11835\nSelect Prometheus Data Source → Import"
                    }
                  ]
                },
                {
                  heading: "4. 커스텀 메트릭 노출",
                  content: "애플리케이션에서 비즈니스 메트릭 노출하기:",
                  code: `// Node.js (prom-client 라이브러리)
const promClient = require('prom-client');
const register = new promClient.Registry();

// 기본 메트릭 (CPU, 메모리 등)
promClient.collectDefaultMetrics({ register });

// 커스텀 카운터
const requestCounter = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'path', 'status'],
  registers: [register]
});

// 커스텀 히스토그램 (응답 시간)
const responseTime = new promClient.Histogram({
  name: 'http_response_time_seconds',
  help: 'HTTP response time',
  labelNames: ['method', 'path'],
  registers: [register]
});

// 미들웨어
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    requestCounter.inc({
      method: req.method,
      path: req.route?.path || 'unknown',
      status: res.statusCode
    });
    responseTime.observe(
      { method: req.method, path: req.route?.path },
      (Date.now() - start) / 1000
    );
  });
  next();
});

// 메트릭 엔드포인트
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});`
                },
                {
                  heading: "5. SLI/SLO 정의",
                  content: "서비스 수준 목표를 설정하고 추적합니다.",
                  code: `# SLI (Service Level Indicator): 측정 가능한 지표
1. 가용성: Uptime / Total Time
2. 지연시간: 95th percentile 응답 시간
3. 에러율: Error Requests / Total Requests

# SLO (Service Level Objective): 목표 수준
1. 가용성: 99.9% 이상 (월 43분 이하 다운)
2. 지연시간: 95%의 요청이 500ms 이내
3. 에러율: 0.1% 이하 (1000 요청 중 1개 미만)

# SLA (Service Level Agreement): 고객 약속
- SLO 미달 시 보상 (환불, 크레딧 등)

# Prometheus Query 예시
# 가용성
avg_over_time(up[30d]) * 100

# 95th percentile 응답 시간
histogram_quantile(0.95, http_response_time_seconds_bucket)

# 에러율
sum(rate(http_requests_total{status=~"5.."}[5m])) /
sum(rate(http_requests_total[5m])) * 100`
                },
                {
                  heading: "6. 알림 규칙 (Alertmanager)",
                  code: `# Prometheus alert.rules.yml
groups:
  - name: example
    interval: 30s
    rules:
      # 서버 다운
      - alert: InstanceDown
        expr: up == 0
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Instance {{ $labels.instance }} is down"

      # 높은 응답 시간
      - alert: HighResponseTime
        expr: histogram_quantile(0.95, http_response_time_seconds_bucket) > 2
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "95th percentile response time > 2s"

      # 높은 메모리 사용량
      - alert: HighMemoryUsage
        expr: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes > 0.9
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Memory usage > 90%"

      # 디스크 공간 부족
      - alert: DiskSpaceLow
        expr: (node_filesystem_avail_bytes / node_filesystem_size_bytes) < 0.1
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Disk space < 10%"`
                },
                {
                  heading: "7. On-Call 로테이션",
                  content: "24/7 모니터링을 위한 당직 체계:",
                  list: [
                    "PagerDuty: 당직자 자동 호출 (전화, SMS)",
                    "Opsgenie: 에스컬레이션 정책 (1차 → 2차 → 매니저)",
                    "VictorOps: 타임존별 로테이션",
                    "개인 프로젝트: Slack + 스마트폰 알림으로 충분"
                  ]
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "Prometheus + Grafana 스택 구축 및 Node/MySQL/Redis Exporter 연동",
                    "커스텀 메트릭 (요청 수, 응답 시간) 노출 및 Grafana 그래프 생성",
                    "SLI 정의 후 Grafana 대시보드에 표시 (가용성, 지연시간, 에러율)",
                    "Alertmanager로 알림 규칙 설정 (CPU > 80%, 메모리 > 90%)",
                    "7일간 메트릭 수집 후 SLO 달성 여부 분석"
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      id: 'tier3',
      name: 'Tier 3: 확장과 최적화',
      period: '5~8주',
      color: 'bg-green-100 border-green-300 text-green-800',
      reason: '사용자가 늘어나고 데이터가 쌓이면서 생기는 문제 해결',
      topics: [
        {
          id: '3-1',
          name: '성능 최적화 기초',
          goal: '병목 지점을 찾고 개선할 수 있다',
          hours: 8,
          keywords: ['performance optimization', 'bottleneck analysis', 'web vitals'],
          tasks: [
            'Lighthouse로 현재 점수 측정',
            '가장 느린 페이지 3개 찾기',
            '이미지 최적화 1회 실행'
          ]
        },
        {
          id: '3-2',
          name: '동시성 제어와 Race Condition',
          goal: '여러 사용자가 동시에 데이터를 수정할 때 생기는 문제를 해결할 수 있다',
          hours: 10,
          keywords: ['race condition', 'concurrency control', 'database locking'],
          tasks: [
            '2개 브라우저로 동시 수정 테스트',
            '충돌 상황 재현',
            '간단한 잠금 메커니즘 구현'
          ]
        },
        {
          id: '3-3',
          name: '보안 기초',
          goal: '기본적인 보안 위협을 이해하고 대응할 수 있다',
          hours: 12,
          keywords: ['web security', 'SQL injection', 'authentication'],
          tasks: [
            'SQL Injection 공격 시뮬레이션',
            '현재 사용 중인 인증 방식 파악',
            'SSL 인증서 만료일 확인'
          ]
        },
        {
          id: '3-4',
          name: '부하 테스트와 스케일링',
          goal: '시스템의 한계를 파악하고 확장 계획을 세울 수 있다',
          hours: 10,
          keywords: ['load testing', 'scalability', 'performance benchmarking'],
          tasks: [
            '간단한 부하 테스트 (JMeter 또는 Artillery)',
            '현재 시스템의 동시 접속 한계 측정',
            '서버 증설 계획 작성'
          ]
        }
      ]
    },
    {
      id: 'tier4',
      name: 'Tier 4: 고급 운영 기술',
      period: '진행형',
      color: 'bg-blue-100 border-blue-300 text-blue-800',
      reason: '더 전문적이고 효율적인 운영을 위해',
      topics: [
        {
          id: '4-1',
          name: 'CI/CD와 배포 자동화',
          goal: '안전하고 빠르게 배포할 수 있다',
          hours: 15,
          keywords: ['CI/CD', 'Git workflow', 'automated deployment'],
          tasks: []
        },
        {
          id: '4-2',
          name: '로그 관리와 분석',
          goal: '로그를 체계적으로 관리하고 인사이트를 얻을 수 있다',
          hours: 12,
          keywords: ['log management', 'centralized logging', 'log analysis'],
          tasks: []
        },
        {
          id: '4-3',
          name: '데이터베이스 고급 운영',
          goal: '데이터베이스를 전문적으로 관리할 수 있다',
          hours: 20,
          keywords: ['database replication', 'sharding', 'high availability'],
          tasks: []
        },
        {
          id: '4-4',
          name: '인프라 자동화 (IaC)',
          goal: '인프라를 코드로 관리할 수 있다',
          hours: 18,
          keywords: ['Infrastructure as Code', 'Docker Compose', 'disaster recovery'],
          tasks: []
        }
      ]
    }
  ]
};

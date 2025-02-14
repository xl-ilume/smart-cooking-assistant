# 냉장고마스터: 스마트 요리 비서 (Fridge Master: Your Smart Cooking Assistant) 기획서

## 1. 프로젝트 개요

### 목적

사용자가 냉장고에 있는 재료를 입력하면 해당 재료를 활용한 레시피를 추천하여 음식을 쉽게 만들 수 있도록 돕는 웹 애플리케이션.

### 주요 타겟 사용자

- 재료 낭비를 줄이고 싶은 사용자
- 빠르고 쉬운 요리를 원하는 바쁜 현대인
- 다양한 요리 아이디어가 필요한 초보 요리사

---

## 2. MVP 주요 기능

### 1) 재료 관리

- **재료 입력**:
  - 텍스트 입력: 재료 이름을 텍스트로 직접 입력
  - 유통기한 설정 및 관리
  - 유통기한 임박 알림

### 2) 레시피 추천

- **추천 기준**:
  - 입력된 재료와 일치율에 기반한 레시피 추천
  - 부족한 재료 표시 및 대체 재료 제안
  - 요리 시간, 난이도, 칼로리 기반 필터 제공
- **추천 방식**:
  - 개인화된 레시피: 사용자 선호도에 따라 최적화

### 3) 레시피 등록

- **레시피 추가 기능**:
  - 사용자가 직접 레시피를 등록하고 필요한 재료 입력
  - 조리 과정 단계별 입력
  - 레시피 이미지 업로드

### 4) 레시피 상세

- **내용 구성**:
  - 레시피 정보: 조리 시간, 난이도, 칼로리
  - 단계별 조리 과정 (이미지 포함)
  - 재료 목록 및 대체 재료 추천

### 5) 즐겨찾기 및 히스토리

- 즐겨찾기한 레시피 관리
- 최근 조회 및 요리한 레시피 기록

### 6) 추가 기능

- **PWA 기능**:
  - 오프라인 모드 지원
  - 홈 화면에 앱 추가 가능
  - 푸시 알림을 통한 유통기한 알림

---

## 3. 기술 스택 및 아키텍처

### Frontend

- **Next.js 13** (TypeScript): 파일 기반 라우팅 및 서버 컴포넌트 활용
- **Tailwind CSS**: 유틸리티 기반의 CSS 프레임워크
- **상태 관리**: React Context 및 Server Actions
- **데이터 요청/관리**: React Query
- **PWA 기능**:
  - Service Worker 설정
  - Manifest 파일 생성
  - 오프라인 지원 및 푸시 알림

### Backend

- **Next.js API Routes**: 기본 API 구현
- **Firebase**:
  - **Authentication**: Google, Facebook 등 소셜 로그인 지원
  - **Firestore**: 실시간 데이터베이스
  - **Storage**: 이미지 저장

### Testing

- **Unit Test**: Jest를 사용한 컴포넌트 및 유틸리티 테스트
- **E2E Test**: Cypress를 사용하여 주요 사용자 흐름 테스트

---

## 4. 주요 화면 설계

### 홈 화면

- 추천 레시피 카드
- 오늘의 인기 레시피 섹션

### 재료 관리 화면

- 재료 추가/삭제/수정
- 유통기한 표시 및 관리

### 레시피 추천 화면

- 재료와 일치율 표시
- 요리 시간, 난이도 등 필터 적용 가능

### 레시피 상세 화면

- 요리 정보, 조리 과정, 이미지

### 레시피 등록 화면

- 제목, 재료, 조리 과정 입력
- 이미지 업로드

### 설정 화면

- 알림 관리
- 사용자 선호도 설정 (예: 채식, 특정 재료 제외)

---

## 5. 추가 기능 구현 과제

### 유튜브 레시피 통합

- YouTube API를 활용해 영상 레시피를 검색하고 앱에서 바로 재생 가능
- 자막 및 음성을 분석해 필요한 재료와 조리 방법 자동 추출

### 인분 변경에 따른 재료 계산

- 사용자가 원하는 인분 수를 입력하면, 재료의 양이 자동으로 조정되는 기능

### 레시피 공유

- 소셜 미디어(Facebook, Instagram)로 레시피 공유 가능

### 모바일 앱 제작

- React Native 또는 Flutter를 사용하여 웹 애플리케이션을 모바일 앱으로 제작

### 레시피 읽어주는 기능

- **Speak API 및 AI 활용**:
  - 단계별 조리 과정을 음성으로 안내
  - TTS(Text-to-Speech) 기술을 통해 사용자에게 음성 가이드 제공

### 내가 등록한 재료 보관 팁

---

## 6. 개발 로드맵

### 1단계: MVP 개발

- 재료 관리 및 레시피 추천 기능 구현
- 레시피 등록 및 상세 조회 기능 개발
- PWA 기본 설정 완료

### 2단계: 추가 기능 구현

- 유튜브 레시피 통합
- 인분 변경 기능 추가
- 소셜 미디어 공유 기능 개발
- 레시피 읽어주는 기능 구현

### 3단계: 모바일 앱 개발

- React Native 또는 Flutter를 활용한 크로스플랫폼 앱 제작

---

이 기획서는 MVP를 중심으로 주요 기능을 먼저 구현하고, 이후 추가 기능을 확장하는 방식으로 구성되었습니다. 모든 주요 내용을 포함하였으니 추가 요청 사항이 있다면 알려주세요!

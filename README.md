<div align="center"><img src="https://github.com/user-attachments/assets/c84b647e-140d-4f1b-8a6a-3a7b4b54f4d6" alt="My Shop logo"></div>

# 🛍 My-Shop Project

온라인 쇼핑몰 프로젝트입니다! 현대적인 기술 스택을 활용하여 실제 커머스 서비스처럼 구현했습니다. 🚀

## 🚀 프로젝트 소개

관리자 모드, 상품 관리, 장바구니, 결제 시스템 등 전반적인 쇼핑몰의 핵심 기능을 구현한 프로젝트입니다.

## 🛠 사용 기술

- **프론트엔드**: React, TypeScript, Zustand, React Router, FSD Architecture
- **UI 라이브러리**: Tailwind CSS, shadcn/ui
<!-- - **결제 시스템**: 아임포트(I'mport) -->
- **기타**: React Hook Form, Zod
- **스타일링**: 반응형 디자인, 다크모드 지원

<div align="center">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"/>
    <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logoColor=white&logo=shadcnui"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
    <img src="https://img.shields.io/badge/Zustand-8E44AD?style=for-the-badge&logoColor=white"/>
    <img src="https://img.shields.io/badge/FSD (Feature Slice Design)-FF5733?style=for-the-badge&logoColor=white"/>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
    <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
</div>

## 📌 주요 기능

1. **로그인 & 회원가입** 🔐

<img align="right" src="https://github.com/user-attachments/assets/46f07796-3e64-419a-bef1-2955d5a6e3df" width="40%">

- JWT 인증 방식 적용
- 소셜 로그인 지원 (카카오, 구글)

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

2. **상품 관리 및 조회** 🛍

<img align="right" src="https://github.com/user-attachments/assets/de7dbcbe-40f9-4d37-b872-e2565b2250d3" width="40%">

- 상품 상세 정보 제공
- 상품 추가 기능

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

3. **장바구니 & 찜하기** 🛒

<img align="right" src="https://github.com/user-attachments/assets/7d9c2b99-c22f-4875-b262-942e32add88d" width="40%">

- 장바구니 상품 수량 조절
- 장바구니 상품 합계 자동 계산

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

4. **반응형 & 다크모드** 🌓

<img align="right" src="https://github.com/user-attachments/assets/9127eeb8-fed7-4d02-b36c-a9cfc655eff5" width="40%">

- 모바일부터 데스크탑까지 완벽한 반응형 디자인
- 사용자 선호도에 따른 다크모드 전환 가능

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

## 🏗 프로젝트 구조 (FSD - Feature Slice Design)

```
📂 src
 ┣ 📂 app         # 애플리케이션 초기 설정 (라우팅, 글로벌 스타일, 프로바이더 등)
 ┣ 📂 pages       # 전체 페이지 컴포넌트
 ┣ 📂 widgets     # 독립적인 UI 블록 (헤더, 푸터, 장바구니 위젯 등)
 ┣ 📂 features    # 핵심 기능 구현 (상품 필터, 결제, 장바구니 등)
 ┣ 📂 entities    # 비즈니스 엔티티 (상품, 사용자, 주문 등)
 ┗ 📂 shared      # 공통 모듈 (유틸리티, API, UI 컴포넌트 등)
```

## 🛠 기술적 도전

- 아임포트를 이용한 결제 시스템 구현
- FSD 아키텍처를 활용한 확장 가능한 코드 구조 설계
- TypeScript를 활용한 타입 안정성 확보
- Zustand를 이용한 전역 상태 관리
- 모바일부터 데스크탑까지 완벽한 반응형 디자인 구현
- Tailwind CSS와 shadcn/ui를 활용한 다크모드 지원

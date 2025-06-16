# Gen-Next-Pathname

Next.js의 directory page 구조를 쉽게 사용할 수 있도록 타입이 완벽한 상수를 자동 생성하는 CLI 도구입니다.

## 기능

- Next.js page 파일의 dynamic path parameters 지원
- slug 문법 완전 지원
- 디렉토리 구조 읽기 및 분석
- TypeScript 타입 안전성 보장
- Next.js 설정 파일 동적 해석

## 설치

```bash
npm install -g gen-next-pathname
```

## 사용법

```bash
# 기본 사용
npx gen-next-pathname

# 특정 디렉토리 지정
npx gen-next-pathname --dir ./src/app

# 출력 파일 지정
npx gen-next-pathname --output ./src/types/routes.ts
```

## 개발

### 요구사항

- Go 1.21 이상
- Node.js 18 이상

### 설치

```bash
# 저장소 클론
git clone https://github.com/siny/gen-next-pathname.git

# 의존성 설치
go mod tidy
```

### 테스트

```bash
# 모든 테스트 실행
go test ./...

# 특정 패키지 테스트
go test ./internal/config
```

## 라이선스

MIT

## 1. Prettier 설정

- `trailingComma`: "all" - 모든 리스트에 꼬리 콤마를 붙입니다.
- `tabWidth`: 2 - 탭 너비를 2칸으로 설정합니다.
- `useTabs`: false - 탭 대신 공백을 사용합니다.
- `semi`: true - 세미콜론을 사용합니다.
- `singleQuote`: false - 큰따옴표를 사용합니다.
- `jsxSingleQuote`: false - JSX에서도 큰따옴표를 사용합니다.
- `printWidth`: 80 - 한 줄의 최대 길이를 80자로 설정합니다.
- `bracketSpacing`: true - 객체 리터럴에서 괄호 안의 공백을 유지합니다.
- `arrowParens`: "always" - 화살표 함수에서 인자가 하나일 때도 괄호를 붙입니다.

## 2. Husky 설정

- `prepare`: "husky" - npm install 시 자동으로 husky를 설치합니다.
- `pre-commit`: `npx lint-staged` - 커밋 전 변경된 파일에 대해 포멧(Prettier) 및 린트(ESLint)를 실행합니다.

## 3. ESLint 설정

### 자동 강제 규칙 (eslint.config.js)

- `no-unused-vars`: 미사용 변수 오류 (대문자 상수 패턴 예외)
- `camelcase`: 변수명 camelCase 강제
- `no-var`: var 사용 금지
- `prefer-const`: 재할당 없는 변수는 const 강제
- `func-style`: 함수는 화살표 함수(표현식) 사용 강제
- `curly: 'all'`: if문 단일 라인이어도 중괄호 필수
- `no-console`: console 사용 시 경고

### 코드 리뷰로 확인하는 규칙 (자동화 불가)

- boolean 변수명은 `is`, `has`, `should` 중 하나로 시작
- 배열 등 복수 값 변수명에 `s` 붙이기
- 상수(재할당 없는 원시값)는 `UPPER_SNAKE_CASE` 사용
- 이벤트 핸들러명: `handle` + `요소` + `Event` 형태 (예: `handleCloseButtonClick`)
- 축약형 사용 금지 (`button` O / `btn` X)

## 4. FE 네이밍 컨벤션

### 변수

- 기본: camelCase / 상수: UPPER_SNAKE_CASE
- boolean: `is`, `has`, `should` 접두사
- 배열 등 복수: 변수명에 `s` 붙이기
- 축약형 사용 금지

### 함수 · 컴포넌트

- 기본: camelCase / 컴포넌트: PascalCase
- 화살표 함수 사용
- custom hook: `use` 접두사
- 이벤트 핸들러: `handle` + `요소` + `Event`
- 단일 export: `export default` 분리 작성

### 파일 · 폴더

- 컴포넌트 파일/폴더: PascalCase
- 일반 파일/폴더: camelCase (길어지면 camelCase)
- 컴포넌트 폴더 내 진입점: `index.jsx`
- 스타일 파일: `컴포넌트이름Style.js` (PascalCase)
- 이미지: kebab-case (예: `tickita-logo.svg`)

### 코드

- if문 단일 라인이어도 중괄호 필수

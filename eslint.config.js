import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier/flat";

/**
 * 자동 강제 불가 규칙 (코드 리뷰로 확인 필요):
 * - boolean: is/has/should 접두사
 * - 배열 변수명에 s 붙이기
 * - 이벤트 핸들러: handle + 요소 + Event 형태
 * - 상수: UPPER_SNAKE_CASE
 */

export default [
  // 빌드 결과물 등 무시할 경로 설정
  { ignores: ["dist", "node_modules"] },

  // 기본 권장 설정 및 React 관련 설정
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // [Convention] 미사용 변수 금지 (대문자 상수 패턴 예외)
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],

      // [Convention] 변수: camelCase 강제 (프로퍼티 제외)
      camelcase: ["error", { properties: "never", ignoreDestructuring: false }],

      // [Convention] var 사용 금지
      "no-var": "error",

      // [Convention] 재할당 없는 변수는 const 사용
      "prefer-const": ["error", { destructuring: "any" }],

      // [Convention] 함수는 화살표 함수(표현식) 사용
      "func-style": ["error", "expression", { allowArrowFunctions: true }],

      // [Convention] if문 단일 라인이어도 중괄호 필수
      curly: ["error", "all"],

      // [Convention] 불필요한 console 경고
      "no-console": "warn",
    },
  },

  // Prettier와의 충돌 방지 (가장 마지막에 위치)
  eslintConfigPrettier,
];

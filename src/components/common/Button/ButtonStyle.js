import styled from "styled-components";

// ─────────────────────────────────────────────
// 공통 Base CSS
// ─────────────────────────────────────────────
const baseButtonCss = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  transition: background 0.15s, border-color 0.15s, outline 0.15s;
  outline: none;

  &:disabled {
    cursor: not-allowed;
  }
`;

// ─────────────────────────────────────────────
// Variant CSS
// ─────────────────────────────────────────────

// focus outline stroke: large=2px, small=1px
const primaryFocusOutlineWidth = (size) => (size === "small" ? "1px" : "2px");

const primaryVariantCss = ({ $state, $size }) => `
  background: #737373;
  color: var(--white);

  &:hover:not(:disabled)         { background: #828282; }
  &:active:not(:disabled)        { background: #626262; }
  &:focus-visible:not(:disabled) {
    background: #242424;
    outline: ${primaryFocusOutlineWidth($size)} solid #6610f2;
    outline-offset: -2px;
  }
  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
  }

  ${$state === "hover" && "background: #828282;"}
  ${$state === "pressed" && "background: #626262;"}
  ${
    $state === "focus" &&
    `
    background: #242424;
    outline: ${primaryFocusOutlineWidth($size)} solid #6610f2;
    outline-offset: -2px;
  `
  }
  ${
    $state === "disabled" &&
    `
    background: var(--gray-300);
    cursor: not-allowed;
  `
  }
`;

const secondaryVariantCss = ({ $state }) => `
  background: var(--white);
  border: 1px solid #95CCE4;
  color: var(--gray-900);
  font: var(--font-14-bold);

  &:hover:not(:disabled)  { background: #E2F3FA; border-color: #7DCBED; }
  &:active:not(:disabled) { background: #E0F3FB; border-color: #24ADE8; }
  &:focus-visible:not(:disabled) {
    background: var(--white);
    border-color: #2097CA;
    outline: none;
  }
  &:disabled {
    background: var(--gray-300);
    border: none;
    color: var(--white);
    cursor: not-allowed;
  }

  ${$state === "hover" && "background: #E2F3FA; border-color: #7DCBED;"}
  ${$state === "pressed" && "background: #E0F3FB; border-color: #24ADE8;"}
  ${
    $state === "focus" &&
    `
    background: var(--white);
    border-color: #2097CA;
  `
  }
  ${
    $state === "disabled" &&
    `
    background: var(--gray-300);
    border: none;
    color: var(--white);
    cursor: not-allowed;
  `
  }
`;

const outlinedVariantCss = ({ $state }) => `
  background: var(--white);
  border: 1px solid var(--gray-300);
  color: var(--gray-900);
  font: var(--font-16-bold);

  &:hover:not(:disabled)         { background: var(--gray-100); }
  &:active:not(:disabled)        { background: var(--gray-100); }
  &:focus-visible:not(:disabled) {
    background: var(--white);
    border-color: var(--gray-500);
  }
  &:disabled {
    background: var(--gray-300);
    border-color: var(--gray-300);
    color: var(--white);
    cursor: not-allowed;
  }

  ${$state === "hover" && "background: var(--gray-100);"}
  ${$state === "pressed" && "background: var(--gray-100);"}
  ${
    $state === "focus" &&
    `
    background: var(--white);
    border-color: var(--gray-500);
  `
  }
  ${
    $state === "disabled" &&
    `
    background: var(--gray-300);
    border-color: var(--gray-300);
    color: var(--white);
    cursor: not-allowed;
  `
  }
`;

const emojiButtonVariantCss = ({ $state }) => `
  background: var(--white);
  border: 1.5px solid var(--gray-300);
  border-radius: 8px;
  color: var(--gray-900);
  font-weight: 500;

  &:hover:not(:disabled) {
    background: var(--gray-100);
    border-color: var(--gray-500);
    color: var(--gray-700);
  }
  &:active:not(:disabled) {
    background: var(--gray-200);
    border-color: var(--gray-900);
    font-weight: 700;
  }
  &:focus-visible:not(:disabled) {
    border-color: var(--primary);
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
  &:disabled {
    background: var(--gray-100);
    border-color: var(--gray-200);
    color: var(--gray-300);
  }

  ${
    $state === "hover" &&
    `
    background: var(--gray-100);
    border-color: var(--gray-500);
    color: var(--gray-700);
  `
  }
  ${
    $state === "pressed" &&
    `
    background: var(--gray-200);
    border-color: var(--gray-900);
    font-weight: 700;
  `
  }
  ${
    $state === "focus" &&
    `
    border-color: var(--primary);
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  `
  }
  ${
    $state === "disabled" &&
    `
    background: var(--gray-100);
    border-color: var(--gray-200);
    color: var(--gray-300);
    cursor: not-allowed;
  `
  }
`;

const variantCss = {
  primary: primaryVariantCss,
  secondary: secondaryVariantCss,
  outlined: outlinedVariantCss,
  emojiButton: emojiButtonVariantCss,
  deleteIcon: outlinedVariantCss,
};

// ─────────────────────────────────────────────
// Size CSS
// ─────────────────────────────────────────────
const sizeCss = {
  large: `height: 56px; padding: 14px 24px; gap: 10px; border-radius: 12px; font: var(--font-16-bold);`,
  small: `height: 40px; padding: 7px 16px;  gap: 10px; border-radius: 6px;  font: var(--font-14-bold);`,
  56: `height: 56px; padding: 14px 16px; gap: 10px; border-radius: 12px; font: var(--font-16-bold);`,
  40: `height: 40px; padding: 8px 16px;  gap: 10px; border-radius: 6px;  font: var(--font-14-bold);`,
  36: `height: 36px; padding: 6px 16px;  gap: 10px; border-radius: 6px;  font: var(--font-14-bold);`,
  28: `height: 28px; padding: 2px 16px;  gap: 10px; border-radius: 6px;  font: var(--font-14-bold);`,
  "icon-40": `height: 40px; padding: 8px 16px;  gap: 10px; border-radius: 6px;  font: var(--font-14-bold);`,
  "icon-36": `height: 36px; padding: 6px 16px;  gap: 10px; border-radius: 6px;  font: var(--font-14-bold);`,
  "icon-28": `height: 28px; padding: 2px 16px;  gap: 10px; border-radius: 6px;  font: var(--font-14-bold);`,
  "square-40": `width: 40px; height: 40px; padding: 6px; border-radius: 6px;`,
  "square-36": `width: 36px; height: 36px; padding: 6px; border-radius: 6px;`,
  "square-28": `width: 28px; height: 28px; padding: 4px; border-radius: 6px;`,
};

// ─────────────────────────────────────────────
// Styled Components
// ─────────────────────────────────────────────
export const StyledButton = styled.button`
  ${baseButtonCss}
  ${({ $state, $variant, $size }) =>
    (variantCss[$variant] ?? variantCss.primary)({ $state, $size })}
  ${({ $size }) => sizeCss[$size] ?? sizeCss.large}
`;

export const PlusButton = styled.button`
  ${baseButtonCss}
  width: 56px;
  height: 56px;
  border-radius: 100px;
  padding: 0;
  background: var(--gray-500);
  color: var(--white);

  &:hover:not(:disabled) {
    background: var(--gray-600);
  }
  &:active:not(:disabled) {
    background: var(--gray-700);
  }
  &:focus-visible:not(:disabled) {
    background: var(--gray-700);
    outline: 1px solid var(--gray-800);
    outline-offset: -1px;
  }
  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
  }

  ${({ $state }) => $state === "hover" && "background: var(--gray-600);"}
  ${({ $state }) => $state === "pressed" && "background: var(--gray-700);"}
  ${({ $state }) =>
    $state === "focus" &&
    `
    background: var(--gray-700);
    outline: 1px solid var(--gray-800);
    outline-offset: -1px;
  `}
  ${({ $state }) =>
    $state === "disabled" &&
    `
    background: var(--gray-300);
    cursor: not-allowed;
  `}
`;

export const ArrowButton = styled.button`
  ${baseButtonCss}
  width: 40px;
  height: 40px;
  border-radius: 0;
  background: transparent;
  color: var(--gray-900);
  padding: 0;

  &:disabled {
    color: var(--gray-300);
    cursor: not-allowed;
  }

  ${({ $state }) =>
    $state === "disabled" && "color: var(--gray-300); cursor: not-allowed;"}
`;

export const ToggleGroup = styled.div`
  display: inline-flex;
  overflow: hidden;
`;

export const ToggleItem = styled.button`
  ${baseButtonCss}
  height: 40px;
  padding: 0 20px;
  font: ${({ $isActive }) =>
    $isActive ? "var(--font-14-bold)" : "var(--font-14-regular)"};
  background: ${({ $isActive }) =>
    $isActive ? "var(--white)" : "var(--gray-100)"};
  color: ${({ $isActive }) => ($isActive ? "#2097CA" : "var(--gray-900)")};
  border: ${({ $isActive }) => ($isActive ? "1px solid #2097CA" : "none")};
  border-radius: 0;
`;

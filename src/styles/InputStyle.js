import styled from "styled-components";

const MOBLIE_BREAKPOINT = "361px"; // 360px 초과 시 적용

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 320px;

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    width: 100%;
    max-width: 720px;
  }
`;

const Label = styled.label`
  font: var(--font-24-bold);
`;
const InputContents = styled.input`
  padding: 12px 16px;
  height: 50px;
  width: 100%;
  border: ${({ $error }) =>
    $error ? "1px solid var(--error)" : "1px solid var(--gray-300)"};
  border-radius: 8px;
  font: var(--font-16-regular);
  color: var(--gray-500);

  &:hover {
    border: 1px solid var(--gray-500);
  }

  &:active {
    border: 2px solid var(--gray-700);
    color: var(--gray-900);
  }

  &:focus {
    border: 2px solid var(--gray-500);
    color: var(--gray-900);
  }
`;

const ErrorMessage = styled.p`
  margin-top: -8px;
  font: var(--font-12-regular);
  color: var(--error);
`;

export { InputContainer, Label, InputContents, ErrorMessage };

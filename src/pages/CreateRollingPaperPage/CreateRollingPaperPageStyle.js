import styled from "styled-components";

const MOBILE_BREAKPOINT = "768px"; // 768px 이상 시 적용

export const Form = styled.form`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;

  & > div {
    width: 100%;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 720px;
    margin: 0 auto;
  }
`;

export const SelectorDescription = styled.div`
  font: var(--font-16-regular);
  color: var(--gray-500);
  margin-bottom: 24px;
`;

export const SelectorLabel = styled.div`
  font: var(--font-24-bold);
  color: var(--gray-900);
  margin-bottom: 4px;
`;

export const ToggleWrapper = styled.div`
  margin-bottom: 40px;
`;

export const SelectorContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SelectorFragment = styled.div`
  position: relative;
  background-color: ${({ $color }) => $color};
  width: 100%;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ $imageURL }) => $imageURL && `background-image: url(${$imageURL});`}
    background-size: cover;
    background-position: center;
    opacity: ${({ $isActive, $imageURL }) =>
      $isActive && $imageURL ? 0.3 : 1};
  }

  & > img {
    position: relative;
    z-index: 1;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 720px;
  position: fixed;
  bottom: 0;
  padding: 20px;
  z-index: 10;
`;

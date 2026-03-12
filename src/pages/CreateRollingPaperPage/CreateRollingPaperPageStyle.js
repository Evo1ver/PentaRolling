import styled from "styled-components";

const MOBILE_BREAKPOINT = "768px"; // 360px 초과 시 적용

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

export const SelectorContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SelectorFragment = styled.div`
  background-color: ${({ $color }) => $color};
  ${({ $imageURL }) => $imageURL && `background-image: url(${$imageURL})`};
  ${({ $imageURL }) => $imageURL && `background-size: 100% 100%;`};
  width: 100%;
  height: 150px;
  border: rgba(0, 0, 0, 0.08);
  border-radius: 16px;

  ${({ $isActive, $imageURL }) => $isActive && $imageURL && `opacity: 0.3`};

  display: flex;
  align-items: center;
  justify-content: center;
`;

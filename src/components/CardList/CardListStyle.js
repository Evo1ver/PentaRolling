import styled, { css } from "styled-components";

export const CardContainer = styled.article`
  position: relative;
  /* 기본 크기 (PC & 태블릿) */
  width: 275px;
  height: 260px;
  padding: 20px 20px 16px;
  margin-top: 10px;
  margin-bottom: 30px;

  flex-shrink: 0;

  border-radius: 24px;
  box-shadow: 10px 10px 12px rgba(0, 0, 0, 0.36);
  cursor: pointer;
  overflow: hidden;
  border: 1px solid rgb(0, 0, 0);
  transition: transform 0.2s ease;

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "var(--bg-gray)"};

  ${({ $backgroundImageUrl }) =>
    $backgroundImageUrl &&
    css`
      background-image: url(${$backgroundImageUrl});
      background-size: cover;
      background-position: center;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.4) 0%,
          rgba(0, 0, 0, 0.65) 100%
        );
        z-index: 0;
      }
    `}

  &:hover {
    transform: translateY(-10px);
  }

  /* 모바일 (화면 너비 768px 이하) */
  @media (max-width: 768px) {
    width: 208px;
    height: 232px;
    padding: 16px;

    flex-shrink: 0; /* 카드가 줄어들지 않도록 설정 */

  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecipientText = styled.h3`
  margin: 7px 3px 0 3px;
  color: #181818;
  font: var(--font-24-bold);
  ${({ $backgroundImageUrl }) =>
    $backgroundImageUrl &&
    css`
      color: var(--white);
    `}
`;

export const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 0 10px 15px;
  margin-top: -10px;
`;

export const AvatarItem = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ffffff;
  margin-left: -12px;
`;

export const CountBadge = styled.span`
  padding: 6px 8px;
  margin-left: -14px;
  border-radius: 9999px;
  background-color: #ffffff;
  color: #555555;
  font: var(--font-12-regular);
`;

export const Body = styled.div`
  margin-top: 24px;
  margin-bottom: auto;
`;

export const MessageText = styled.p`
  margin: 0;
  color: #3a3a3a;
  font: var(--font-16-regular);

  .count-bold {
    font-weight: 700;
  }

  ${({ $backgroundImageUrl }) =>
    $backgroundImageUrl &&
    css`
      color: #eeeeee;
    `}
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(0, 0, 0);
  margin-top: 14px
    ${({ $backgroundImageUrl }) =>
      $backgroundImageUrl &&
      css`
        background-color: rgba(255, 255, 255, 0.85);
      `};
`;

export const Footer = styled.footer`
  margin: 18px 0 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

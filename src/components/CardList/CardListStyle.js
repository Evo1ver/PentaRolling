import styled, { css } from "styled-components";

export const CardContainer = styled.article`
  position: relative;
  flex-shrink: 0;
  width: 275px;
  height: 260px;
  padding: 20px 20px 16px;
  border-radius: 24px;
  box-shadow: 10px 10px 12px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #000000;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "var(--bg-gray)"};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-20px);
    box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.8);
  }

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

  @media (max-width: 767px) {
    width: 208px;
    height: 232px;
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

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 0 10px 15px;
  margin-top: -10px;
  min-height: 38px;
`;

export const AvatarItem = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 2px #ffffff;
  margin-left: -12px;

  & > * {
    border: none !important;
    box-shadow: none !important;
  }
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
  margin-bottom: 18px;
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

  ${({ $isEmptyState }) =>
    $isEmptyState &&
    css`
      padding-bottom: 30px;

      @media (max-width: 767px) {
        padding-bottom: 9px;
      }
    `}

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(0, 0, 0);
  margin-top: 14px;

  ${({ $backgroundImageUrl }) =>
    $backgroundImageUrl &&
    css`
      background-color: rgba(255, 255, 255, 0.85);
    `}
`;

export const Footer = styled.footer`
  margin: 18px 0 4px 0;
  display: flex;
  align-items: center;
  gap: 5px;

  & > div {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    width: 64px !important;
    height: 40px !important;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 3px;
    min-width: 0;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;

    &:has(> :nth-child(3):last-child) {
      justify-content: center;
    }

    & > div {
      padding: 10px 10px;
      line-height: 1;
      flex-shrink: 0;
      width: 50px !important;
      height: 33px !important;
      font-size: 13px;
    }
  }
`;

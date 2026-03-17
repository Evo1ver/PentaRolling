import styled, { css } from "styled-components";

const TABLET = "768px";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#FFFFFF"};

  ${({ $backgroundImageURL }) =>
    $backgroundImageURL &&
    css`
      background-image: url(${$backgroundImageURL});
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    `}
`;

export const FormContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 24px 20px 240px;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  ${({ $hasBackgroundImage }) =>
    $hasBackgroundImage &&
    css`
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(6px);
      border-radius: 16px;
      margin-top: 16px;
      margin-bottom: 100px;
      padding: 24px 20px;
    `}

  @media (min-width: ${TABLET}) {
    padding: 104px 24px 240px;
    max-width: 860px;

    ${({ $hasBackgroundImage }) =>
      $hasBackgroundImage &&
      css`
        padding: 40px 40px 240px;
        margin-top: 24px;
        margin-bottom: 100px;
        border-radius: 16px;
      `}
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionTitle = styled.h2`
  font: var(--font-24-bold);
  color: ${({ $hasBackgroundImage }) =>
    $hasBackgroundImage ? "var(--white)" : "var(--gray-900)"};
`;

export const ProfileImageRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  & > div:first-child {
    flex-shrink: 0;
  }

  @media (min-width: ${TABLET}) {
    align-items: center;
  }
`;

export const AvatarSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1;

  & > div {
    flex-wrap: wrap;
    gap: 2px;

    button {
      padding: 0;
    }

    @media (min-width: ${TABLET}) {
      flex-wrap: nowrap;
      gap: 5px;
    }
  }
`;

export const SelectorGuide = styled.p`
  font: var(--font-14-regular);
  color: ${({ $hasBackgroundImage }) =>
    $hasBackgroundImage ? "var(--white)" : "var(--gray-500)"};
`;

export const LoadingText = styled.p`
  font: var(--font-14-regular);
  color: ${({ $hasBackgroundImage }) =>
    $hasBackgroundImage ? "var(--white)" : "var(--gray-400)"};
`;

export const SubmitBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px 20px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ?? "var(--white)"};
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  ${({ $backgroundImageURL }) =>
    $backgroundImageURL &&
    css`
      background-image: url(${$backgroundImageURL});
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    `}

  button {
    width: 100%;
    max-width: 720px;
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${TABLET}) {
    padding: 24px;

    button {
      max-width: 860px;
    }
  }
`;

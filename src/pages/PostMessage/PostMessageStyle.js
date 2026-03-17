import styled, { css, keyframes } from "styled-components";

const tablet = "@media (min-width: 768px)";
const pcWide = "@media (min-width: 1248px)";

export const PageWrapper = styled.div`
  background-color: ${({ $bgColor }) => $bgColor || "#fff"};
  min-height: 100vh;

  ${({ $bgImage }) =>
    $bgImage &&
    css`
      background-image: url(${$bgImage});
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    `}

  ${tablet} {
    min-height: calc(100vh - 64px);
  }
`;

// ─────────────────────────────────────────────
// 헤더
// ─────────────────────────────────────────────

export const HeaderBar = styled.header`
  width: 100%;
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
  position: sticky;
  top: 0;
  z-index: 100;

  ${tablet} {
    top: 64px;
  }
`;

export const HeaderInner = styled.div`
  padding: 0 20px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  ${tablet} {
    height: 66px;
    padding: 0 24px;
  }

  ${pcWide} {
    max-width: 1200px;
    margin: 0 auto;
    height: 64px;
    padding: 0 24px;
  }
`;

export const MobileSecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 12px;

  ${tablet} {
    display: none;
  }
`;

export const MoreReactionBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-500);
  padding: 0;
`;

export const TabletOnly = styled.div`
  display: none;

  ${tablet} {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  ${pcWide} {
    display: none;
  }
`;

export const PCOnly = styled.div`
  display: none;

  ${pcWide} {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const HeaderTitle = styled.h1`
  font: var(--font-18-bold);
  color: var(--gray-900);
  white-space: nowrap;
  flex-shrink: 0;
`;

export const AvatarRow = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarOverlap = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid var(--white);
  overflow: hidden;
  margin-left: -8px;

  &:first-child {
    margin-left: 0;
  }
`;

export const ExtraCount = styled.span`
  font: var(--font-12-regular);
  color: var(--gray-500);
  margin-left: 6px;
`;

export const WriterCountText = styled.p`
  font: var(--font-14-regular);
  color: var(--gray-700);
  margin-left: 12px;
  white-space: nowrap;

  strong {
    font-weight: 700;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const ReactionList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  ${MobileSecondRow} & {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 8px;
  }
`;

export const VertDivider = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200);
  flex-shrink: 0;
`;

export const ActionGroup = styled.div`
  display: none;

  ${tablet} {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const MobileActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  button {
    width: 36px;
  }
`;

export const ReactionArea = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const RelativeWrap = styled.div`
  position: relative;
`;

// ─────────────────────────────────────────────
// 이모지
// ─────────────────────────────────────────────
export const EmojiPopoverWrapper = styled.div`
  position: fixed;
  top: 120px;
  right: 16px;
  z-index: 300;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  ${tablet} {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
  }
`;

// ─────────────────────────────────────────────
// 공유
// ─────────────────────────────────────────────
export const ShareDropdownWrapper = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  z-index: 200;
  min-width: 144px;
`;

export const ShareItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  border: none;
  background: transparent;
  cursor: pointer;
  font: var(--font-14-regular);
  color: var(--gray-900);

  &:hover {
    background: var(--gray-100);
  }
`;

// ─────────────────────────────────────────────
// 수정하기 버튼
// ─────────────────────────────────────────────

// 모바일,태블릿
export const MobileEditBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 20px;
  z-index: 100;

  ${pcWide} {
    display: none;
  }
`;

// PC
export const PCEditBar = styled.div`
  display: none;

  ${pcWide} {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
  }
`;

// ─────────────────────────────────────────────
// 메인
// ─────────────────────────────────────────────

export const ContentArea = styled.main`
  padding: 24px 20px 100px;

  ${tablet} {
    padding: 90px 24px 100px;
  }

  ${pcWide} {
    max-width: 1200px;
    margin: 0 auto;
    padding: 90px 24px 80px;
  }
`;

export const CardGrid = styled.div`
  gap: 16px;
  display: grid;
  grid-template-columns: 1fr;

  ${tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  ${pcWide} {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const CardClickOverlay = styled.div`
  position: absolute;
  inset: 0;
  top: 42px;
  cursor: pointer;
  z-index: 1;
`;

export const Sentinel = styled.div`
  height: 1px;
  margin-top: 40px;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  width: 36px;
  height: 36px;
  border: 3px solid var(--gray-200);
  border-top-color: var(--gray-500);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 24px auto 0;
`;

import styled from "styled-components";

// ─────────────────────────────────────────────
// 공통 Base
// ─────────────────────────────────────────────
const BaseCardWrapper = styled.div`
  width: 384px;
  height: 280px;
  border-radius: 16px;
  background: var(--white);
  border: 1px solid var(--black);
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.3);
`;

export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 56px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProfileName = styled.span`
  font: var(--font-18-bold);
  color: var(--black);
`;

export const CardDate = styled.span`
  margin-top: 16px;
  font: var(--font-12-regular);
  color: var(--black);
  line-height: 18px;
`;

// ─────────────────────────────────────────────
// Normal Card (브라우저 스타일)
// ─────────────────────────────────────────────
export const CardWrapper = styled(BaseCardWrapper)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 42px;
  border-bottom: 1px solid var(--black);
  border-radius: 16px 16px 0 0;
  background: #D9D9D9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  flex-shrink: 0;

  button {
    background: #D9D9D9;
    border-color: #D9D9D9;
  }
`;

export const BrowserDots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BrowserDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  flex: 1;

  ${ProfileRow} {
    margin-top: 28px;
  }
`;

export const CardContent = styled.p`
  width: 336px;
  height: 72px;
  margin-top: 16px;
  font: var(--font-18-regular);
  color: var(--gray-600);
  line-height: 28px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

// ─────────────────────────────────────────────
// Mini Card (심플 스타일)
// ─────────────────────────────────────────────
export const MiniCardWrapper = styled(BaseCardWrapper)`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const MiniCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

export const MiniCardContent = styled.p`
  width: 100%;
  height: 72px;
  margin-top: 16px;
  font: var(--font-18-regular);
  color: var(--gray-600);
  line-height: 28px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

// ─────────────────────────────────────────────
// Add Card (+ 버튼)
// ─────────────────────────────────────────────
export const AddCardWrapper = styled(BaseCardWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
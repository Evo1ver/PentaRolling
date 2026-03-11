import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 42px 24px;
`;

export const FirstSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 29px;
  padding: 24px;

  border-radius: 20px;
  background-color: var(--surface);
  overflow: hidden;
`;

export const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PointLabel = styled.span`
  padding: 4px 12px;
  width: 82px;
  height: 28px;
  border-radius: 50px;
  background-color: #95cce4;
  font: var(--font-14-bold);
  font-weight: 600;
  color: var(--white);
`;

export const ScriptContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BoldScript = styled.h2`
  font: var(--font-18-bold);
  color: var(--gray-900);
`;

export const Script = styled.p`
  font: var(--font-15-regular);
  color: var(--gray-500);
`;

export const FirstScriptBr = styled.br`
  display: none;
`;

export const SecondScriptBr = styled.br`
  display: block;
`;

export const MainCardImageWrapper = styled.div`
  margin: 0 -24px;
  display: flex;
  justify-content: center;
`;

export const MainCardImage = styled.img`
  width: 380px;
  height: 100px;
  flex: 0 0 auto;
`;

export const SecondSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 24px 43px;

  border-radius: 20px;
  background-color: var(--surface);
  overflow: hidden;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 51px auto 24px;
  width: 100%;
`;

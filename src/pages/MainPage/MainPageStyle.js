import styled from "styled-components";

const MOBLIE_BREAKPOINT = "361px";
const TABLET_BREAKPOINT = "769px";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 42px 24px;

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    margin: 49px 24px;
  }

  @media (min-width: ${TABLET_BREAKPOINT}) {
    margin: 60px auto;
    max-width: 1200px;
  }
`;

export const FirstSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 29px;
  padding: 24px;
  border-radius: 20px;
  background-color: var(--surface);
  overflow: hidden;

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    gap: 36px;
    padding: 40px;
    border-radius: 16px;
  }

  @media (min-width: ${TABLET_BREAKPOINT}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    padding: 60px 30px 60px 60px;
    border-radius: 16px;
  }
`;

export const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PointLabel = styled.span`
  padding: 6px 12px;
  width: 82px;
  height: 32px;
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

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    gap: 8px;
  }
`;

export const BoldScript = styled.h2`
  font: var(--font-18-bold);
  color: var(--gray-900);

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    font: var(--font-24-bold);
  }
`;

export const Script = styled.p`
  font: var(--font-15-regular);
  color: var(--gray-500);

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    font: var(--font-18-regular);
  }
`;

export const FirstScriptBr = styled.br`
  display: none;

  @media (min-width: ${TABLET_BREAKPOINT}) {
    display: block;
  }
`;

export const SecondScriptBr = styled.br`
  display: block;

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    display: none;
  }

  @media (min-width: ${TABLET_BREAKPOINT}) {
    display: block;
  }
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

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    width: 740px;
    height: 210px;
  }
`;

export const MainEmojiImage = styled.img`
  width: 360px;
  height: 113px;

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    width: 720px;
    height: 210px;
  }
`;

export const SecondSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 24px 43px;
  border-radius: 20px;
  background-color: var(--surface);
  overflow: hidden;

  @media (min-width: ${MOBLIE_BREAKPOINT}) {
    gap: 36px;
    padding: 40px;
    border-redius: 16px;
  }

  @media (min-width: ${TABLET_BREAKPOINT}) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding: 60px 0;
    gap: 0;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 51px auto 24px;
  width: 100%;
`;

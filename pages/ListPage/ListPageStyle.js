import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
`;

export const MainContent = styled.main`
  padding: 40px 0;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Section = styled.section`
  max-width: 1160px;
  margin: 0 auto 50px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-left: 20px;
  color: #181818;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 0 20px;

  /* 스크롤바 숨기기 */
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-size: 18px;
`;

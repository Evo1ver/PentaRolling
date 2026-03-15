import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
`;

export const MainContent = styled.main`
  padding: 40px 0;
  background-color: #ffffff;
  min-height: 100vh;
`;

export const Section = styled.section`
  max-width: 1160px;
  margin: 0 auto 50px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0px;
  color: #181818;
  @media (max-width: 1199px) {
    padding-left: 20px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 0;
    padding-left: 20px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 1160px;
  max-width: 100%;
  overflow-x: hidden;
  flex-wrap: nowrap;
  scroll-behavior: smooth;
  padding: 20px 10px 20px 0px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  -webkit-overflow-scrolling: touch;

  @media (max-width: 1199px) {
    overflow-x: auto;
    padding: 20px 10px 20px 20px;
    width: max-content;
    max-width: 100%;
  }

  @media (max-width: 767px) {
    gap: 12px;
    padding: 20px 10px 20px 20px;
    overflow-x: auto;
    width: max-content;
    max-width: 100%;
  }
`;

export const CardListSpacer = styled.div`
  flex: 0 0 ${({ $width }) => $width}px;
  width: ${({ $width }) => $width}px;
  min-width: ${({ $width }) => $width}px;

  @media (max-width: 1199px) {
    flex: 0 0 0;
    width: 0;
    min-width: 0;
    overflow: hidden;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-size: 18px;
  width: 100%;

  & > button {
    height: 56px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px !important;

    @media (max-width: 1199px) {
      width: 720px !important;
    }

    @media (max-width: 767px) {
      width: 320px !important;
      max-width: calc(100% - 40px);
    }
  }
`;

export const CardSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 0;
  overflow-x: visible;

  @media (max-width: 1199px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ArrowButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  @media (max-width: 1199px) {
    display: none;
  }

  ${(props) =>
    props.$direction === "left" &&
    `
    left: -20px;

  `}

  ${(props) =>
    props.$direction === "right" &&
    `
    right: -20px;

  `}
`;

import MainCardImage from "../../assets/images/main_page_card.png";
import * as S from "./MainPageStyle";

const MainPage = () => {
  return (
    <S.MainContainer>
      <S.FirstSectionContainer>
        <S.PointContainer>
          <S.PointLabel>Point. 01</S.PointLabel>
          <S.ScriptContainer>
            <S.BoldScript>
              누구나 손쉽게, 온라인 <S.ScriptBr />
              롤링 페이퍼를 만들 수 있어요
            </S.BoldScript>
            <S.Script>로그인 없이 자유롭게 만들어요.</S.Script>
          </S.ScriptContainer>
        </S.PointContainer>
        <S.MainCardImageWrapper>
          <S.MainCardImage src={MainCardImage} />
        </S.MainCardImageWrapper>
      </S.FirstSectionContainer>
    </S.MainContainer>
  );
};

export default MainPage;

import MainCardImage from "../../assets/images/main-page-card.png";
import MainEmojiImage from "../../assets/images/main-page-emoji.png";
import { Button } from "../../components/common/Button/Button";
import * as S from "./MainPageStyle";

const MainPage = () => {
  return (
    <>
      <S.MainContainer>
        <S.FirstSectionContainer>
          <S.PointContainer>
            <S.PointLabel>Point. 01</S.PointLabel>
            <S.ScriptContainer>
              <S.BoldScript>
                누구나 손쉽게, 온라인 <S.FirstScriptBr />
                롤링 페이퍼를 만들 수 있어요
              </S.BoldScript>
              <S.Script>로그인 없이 자유롭게 만들어요.</S.Script>
            </S.ScriptContainer>
          </S.PointContainer>
          <S.MainCardImageWrapper>
            <S.MainCardImage src={MainCardImage} />
          </S.MainCardImageWrapper>
        </S.FirstSectionContainer>
        <S.SecondSectionContainer>
          <S.PointContainer>
            <S.PointLabel>Point. 02</S.PointLabel>
            <S.ScriptContainer>
              <S.BoldScript>
                서로에게 이모지로 감정을
                <S.SecondScriptBr />
                표현해보세요
              </S.BoldScript>
              <S.Script>로그인 없이 자유롭게 만들어요.</S.Script>
            </S.ScriptContainer>
          </S.PointContainer>
          <S.MainCardImageWrapper>
            <S.MainCardImage src={MainEmojiImage} />
          </S.MainCardImageWrapper>
        </S.SecondSectionContainer>
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button variant="primary" size="large">
          롤링 페이퍼 만들기
        </Button>
      </S.ButtonWrapper>
    </>
  );
};

export default MainPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "/src/components/CardList/CardList";
import { Button } from "/src/components/common/Button/Button.jsx";
import * as S from "./ListPageStyle";
import { ArrowButton } from "../../src/components/common/Button/ButtonStyle";

const ListPage = () => {
  const navigate = useNavigate();

  return (
    <S.ListContainer>
      {/* 헤더 영역 */}

      <S.MainContent>
        {/* 인기 롤링 페이퍼 섹션 */}
        <S.Section>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>

          <S.CardSection>
            {/* 왼쪽 화살표: 첫 번째 카드 왼쪽에 위치 */}
            <S.ArrowButtonWrapper $direction="left">
              <ArrowButton
                direction="left"
                onClick={() => console.log("왼쪽 클릭!")}
              />
            </S.ArrowButtonWrapper>

            <S.CardWrapper>
              <CardList recipientName="SoWon" backgroundColor="purple" />
              <CardList recipientName="Jisoo" backgroundColor="beige" />
            </S.CardWrapper>

            {/* 오른쪽 화살표: 마지막 카드 오른쪽에 위치 */}
            <S.ArrowButtonWrapper $direction="right">
              <ArrowButton
                direction="right"
                onClick={() => console.log("오른쪽 클릭!")}
              />
            </S.ArrowButtonWrapper>
          </S.CardSection>
        </S.Section>

        {/* 최근에 만든 롤링 페이퍼 섹션 */}
        <S.Section>
          <S.Title>최근에 만든 롤링 페이퍼 ⭐</S.Title>
        </S.Section>

        {/* 나도 만들어보기 버튼 */}
        <S.ButtonContainer>
          <Button
            variant="primary"
            size="large"
            onClick={() => navigate("/post")}
          >
            나도 만들어보기
          </Button>
        </S.ButtonContainer>
      </S.MainContent>
    </S.ListContainer>
  );
};

export default ListPage;

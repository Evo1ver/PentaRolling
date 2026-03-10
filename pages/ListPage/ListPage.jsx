import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "/src/components/CardList/CardList";
import { Button } from "/src/components/common/Button/Button.jsx";
import * as S from "./ListPageStyle";

const ListPage = () => {
  const navigate = useNavigate();

  return (
    <S.ListContainer>
      {/* 헤더 영역 */}

      <S.MainContent>
        {/* 인기 롤링 페이퍼 섹션 */}
        <S.Section>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>

          <S.CardWrapper>
            <CardList recipientName="SoWon" backgroundColor="purple" />
            <CardList recipientName="Jisoo" backgroundColor="beige" />
            {/* <CardList recipientName="Daeun" backgroundColor="lightblue" />
            <CardList recipientName="Sangmin" backgroundColor="lightgreen" />
            <CardList recipientName="Yujin" backgroundColor="lightcoral" /> */}
          </S.CardWrapper>
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

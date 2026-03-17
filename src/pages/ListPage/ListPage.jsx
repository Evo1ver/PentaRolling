import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import { Button, ArrowButton } from "../../components/common/Button/Button.jsx";
import * as S from "./ListPageStyle";
import axios from "axios";

const API_URL = "https://rolling-api.vercel.app/23-2/recipients/";
const PAGE_SIZE = 4;
const CARD_WIDTH = 275;
const CARD_GAP = 20;
const CARD_STRIDE = CARD_WIDTH + CARD_GAP;

const parseName = (name) => name.split("/")[0];

const getTrailingSpacerWidth = (count) => {
  if (count <= PAGE_SIZE) return 0;

  const remainder = count % PAGE_SIZE;
  if (remainder === 0) return 0;

  return (PAGE_SIZE - remainder) * CARD_STRIDE - CARD_GAP;
};

const ListPage = () => {
  const navigate = useNavigate();

  const popularRef = useRef(null);
  const recentRef = useRef(null);

  const [popularCards, setPopularCards] = useState([]);
  const [recentCards, setRecentCards] = useState([]);
  const [isLoadingPopular, setIsLoadingPopular] = useState(true);
  const [isLoadingRecent, setIsLoadingRecent] = useState(true);
  const [popularPage, setPopularPage] = useState(0);
  const [recentPage, setRecentPage] = useState(0);

  const getTotalPages = (cards) => Math.ceil(cards.length / PAGE_SIZE);

  const scrollToPage = (ref, page, cardsLength) => {
    const el = ref.current;
    if (!el) return;

    const totalCards = cardsLength ?? 0;
    const totalPages = Math.max(Math.ceil(totalCards / PAGE_SIZE) - 1, 0);

    const isLastPage = page === totalPages && totalCards > PAGE_SIZE;
    const hasRemainder = totalCards % PAGE_SIZE !== 0;

    const left =
      isLastPage && hasRemainder
        ? (totalCards - PAGE_SIZE) * CARD_STRIDE
        : page * CARD_STRIDE * PAGE_SIZE;

    el.scrollTo({
      left,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        setIsLoadingPopular(true);
        const response = await axios.get(API_URL, {
          params: { limit: 100, offset: 0, sort: "like" },
        });
        const results = response.data.results || [];
        const sorted = [...results].sort(
          (a, b) => (b.messageCount ?? 0) - (a.messageCount ?? 0),
        );
        setPopularCards(sorted);
        setPopularPage(0);
      } catch (error) {
        console.error("인기 데이터 불러오기 실패:", error);
      } finally {
        setIsLoadingPopular(false);
      }
    };

    const fetchRecent = async () => {
      try {
        setIsLoadingRecent(true);
        const response = await axios.get(API_URL, {
          params: { limit: 100, offset: 0 },
        });
        setRecentCards(response.data.results);
        setRecentPage(0);
      } catch (error) {
        console.error("최근 데이터 불러오기 실패:", error);
      } finally {
        setIsLoadingRecent(false);
      }
    };

    fetchPopular();
    fetchRecent();
  }, []);

  const handlePageChange = (ref, currentPage, setPage, cards, direction) => {
    const lastPage = Math.max(getTotalPages(cards) - 1, 0);
    const nextPage =
      direction === "left"
        ? Math.max(currentPage - 1, 0)
        : Math.min(currentPage + 1, lastPage);

    if (nextPage === currentPage) return;

    setPage(nextPage);
    scrollToPage(ref, nextPage, cards.length);
  };

  const renderCardList = (cards) => {
    const spacerWidth = getTrailingSpacerWidth(cards.length);

    return (
      <>
        {cards.map((card) => (
          <CardList
            key={card.id}
            recipientName={parseName(card.name)}
            backgroundColor={card.backgroundColor}
            backgroundImageUrl={card.backgroundImageURL}
            avatarImageUrls={card.recentMessages.map((m) => m.profileImageURL)}
            countBadgeCount={card.messageCount > 3 ? card.messageCount - 3 : 0}
            messageCount={card.messageCount}
            reactions={card.topReactions}
            onClick={() => navigate(`/post/${card.id}`)}
          />
        ))}
        {spacerWidth > 0 && (
          <S.CardListSpacer $width={spacerWidth} aria-hidden="true" />
        )}
      </>
    );
  };

  const renderSkeletonList = () => {
    return (
      <>
        {Array.from({ length: PAGE_SIZE }).map((_, index) => (
          <S.SkeletonCard key={index} />
        ))}
      </>
    );
  };

  const popularLastPage = Math.max(getTotalPages(popularCards) - 1, 0);
  const recentLastPage = Math.max(getTotalPages(recentCards) - 1, 0);

  return (
    <S.ListContainer>
      <Header />
      <S.MainContent>
        <S.Section>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>
          <S.CardSection>
            {!isLoadingPopular && popularPage > 0 && (
              <S.ArrowButtonWrapper $direction="left">
                <ArrowButton
                  direction="left"
                  onClick={() =>
                    handlePageChange(
                      popularRef,
                      popularPage,
                      setPopularPage,
                      popularCards,
                      "left",
                    )
                  }
                />
              </S.ArrowButtonWrapper>
            )}
            <S.CardWrapper ref={popularRef}>
              {isLoadingPopular
                ? renderSkeletonList()
                : renderCardList(popularCards)}
            </S.CardWrapper>
            {!isLoadingPopular && popularPage < popularLastPage && (
              <S.ArrowButtonWrapper $direction="right">
                <ArrowButton
                  direction="right"
                  onClick={() =>
                    handlePageChange(
                      popularRef,
                      popularPage,
                      setPopularPage,
                      popularCards,
                      "right",
                    )
                  }
                />
              </S.ArrowButtonWrapper>
            )}
          </S.CardSection>
        </S.Section>

        <S.Section>
          <S.Title>최근에 만든 롤링 페이퍼 ⭐</S.Title>
          <S.CardSection>
            {!isLoadingRecent && recentPage > 0 && (
              <S.ArrowButtonWrapper $direction="left">
                <ArrowButton
                  direction="left"
                  onClick={() =>
                    handlePageChange(
                      recentRef,
                      recentPage,
                      setRecentPage,
                      recentCards,
                      "left",
                    )
                  }
                />
              </S.ArrowButtonWrapper>
            )}
            <S.CardWrapper ref={recentRef}>
              {isLoadingRecent
                ? renderSkeletonList()
                : renderCardList(recentCards)}
            </S.CardWrapper>
            {!isLoadingRecent && recentPage < recentLastPage && (
              <S.ArrowButtonWrapper $direction="right">
                <ArrowButton
                  direction="right"
                  onClick={() =>
                    handlePageChange(
                      recentRef,
                      recentPage,
                      setRecentPage,
                      recentCards,
                      "right",
                    )
                  }
                />
              </S.ArrowButtonWrapper>
            )}
          </S.CardSection>
        </S.Section>

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

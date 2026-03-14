import { useState, useEffect, useRef, useCallback, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import Avatar from "../../components/common/Avatar/Avatar";
import { AddCard, NormalCard } from "../../components/Card/Card";
import CardModal from "../../components/CardModal/CardModal";
import { Button, EmojiButton } from "../../components/common/Button/Button";
import EmojiBadge from "../../components/common/EmojiBadge/EmojiBadge";
import useToast from "../../hooks/useToast";
import successIcon from "/src/assets/icons/success.svg";
import BACKGROUND_COLORS from "../../constants/backgroundColors";
import { getRollingPaper } from "../../lib/api/rollingPaper";
import { getMessageList } from "../../lib/api/message";
import { getReactions, addReaction } from "../../lib/api/reaction";
import * as S from "./PostMessageStyle";

const PAGE_SIZE = 5;

const BG_COLOR_MAP = Object.fromEntries(
  BACKGROUND_COLORS.map(({ label, color }) => [label, color]),
);

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")}`;
};

const parseContent = (raw) => {
  if (!raw) return "";
  return new DOMParser()
    .parseFromString(raw, "text/html")
    .body.textContent.trim();
};

const getTopReactions = (reactions) =>
  [...reactions].sort((a, b) => b.count - a.count).slice(0, 6);

// 무한 스크롤
const msgReducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return { messages: [], isLoading: false, hasMore: true };
    case "FETCH_START":
      return { ...state, isLoading: true };
    case "FETCH_DONE":
      return {
        messages: action.isReset
          ? action.results
          : [...state.messages, ...action.results],
        isLoading: false,
        hasMore: action.hasMore,
      };
    default:
      return state;
  }
};

const useInfiniteMessages = (id) => {
  const [state, dispatch] = useReducer(msgReducer, {
    messages: [],
    isLoading: false,
    hasMore: true,
  });

  const offsetRef = useRef(0);
  const isLoadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  const loadNext = useCallback(() => {
    if (isLoadingRef.current || !hasMoreRef.current) return;

    isLoadingRef.current = true;
    dispatch({ type: "FETCH_START" });

    const currentOffset = offsetRef.current;

    getMessageList(id, PAGE_SIZE, currentOffset).then((data) => {
      const results = data.results ?? [];
      offsetRef.current = currentOffset + results.length;
      hasMoreRef.current = !!data.next;
      isLoadingRef.current = false;

      dispatch({
        type: "FETCH_DONE",
        results,
        hasMore: !!data.next,
        isReset: currentOffset === 0,
      });
    });
  }, [id]);

  useEffect(() => {
    offsetRef.current = 0;
    hasMoreRef.current = true;
    isLoadingRef.current = false;
    dispatch({ type: "RESET" });
    loadNext();
  }, [loadNext]);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    hasMore: state.hasMore,
    loadNext,
  };
};

// 이모지
const EmojiPickerPopover = ({ recipientId, onClose, onReacted }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  const handleEmojiClick = async ({ emoji }) => {
    await addReaction(recipientId, emoji);
    onReacted();
    onClose();
  };

  return (
    <S.EmojiPopoverWrapper ref={ref}>
      <EmojiPicker
        onEmojiClick={handleEmojiClick}
        height={350}
        width={Math.min(320, window.innerWidth - 32)}
      />
    </S.EmojiPopoverWrapper>
  );
};

// 공유
const ShareDropdown = ({ recipientName, onClose, onUrlCopied }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  const handleKakaoShare = () => {
    if (!window.Kakao?.isInitialized()) {
      alert("카카오 SDK가 초기화되지 않았습니다.");
      onClose();
      return;
    }
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `${recipientName}에게 롤링페이퍼를 작성해주세요!`,
        description: "따뜻한 메시지로 마음을 전해보세요 💌",
        imageUrl: "https://rolling-api.vercel.app/favicon.ico",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "메시지 남기러 가기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
    onClose();
  };

  const handleUrlCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      onUrlCopied();
      onClose();
    });
  };

  return (
    <S.ShareDropdownWrapper ref={ref}>
      <S.ShareItem onClick={handleKakaoShare}>카카오톡 공유</S.ShareItem>
      <S.ShareItem onClick={handleUrlCopy}>URL 복사</S.ShareItem>
    </S.ShareDropdownWrapper>
  );
};

// 헤더
const PostMessageHeader = ({
  recipient,
  reactions,
  recipientId,
  onReacted,
  onUrlCopied,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showReactionAll, setShowReactionAll] = useState(false);

  const avatars = (recipient?.recentMessages ?? [])
    .map((m) => m.profileImageURL)
    .slice(0, 3);
  const extraCount = Math.max(0, (recipient?.messageCount ?? 0) - 3);
  const topReactions = getTopReactions(reactions);
  const visibleReactions = showReactionAll
    ? topReactions
    : topReactions.slice(0, 3);

  const handleEmojiButtonClick = () => {
    setShowShareMenu(false);
    setShowEmojiPicker((prev) => !prev);
  };

  const handleShareButtonClick = () => {
    setShowEmojiPicker(false);
    setShowShareMenu((prev) => !prev);
  };

  const toggleReactionAll = () => setShowReactionAll((prev) => !prev);

  return (
    <S.HeaderBar>
      <S.HeaderInner>
        <S.HeaderLeft>
          <S.HeaderTitle>To. {recipient?.name ?? "..."}</S.HeaderTitle>
          <S.PCOnly>
            {avatars.length > 0 && (
              <S.AvatarRow>
                {avatars.map((url) => (
                  <S.AvatarOverlap key={url}>
                    <Avatar src={url} size="xsmall" />
                  </S.AvatarOverlap>
                ))}
                {extraCount > 0 && <S.ExtraCount>+{extraCount}</S.ExtraCount>}
                <S.WriterCountText>
                  <strong>{recipient?.messageCount ?? 0}</strong>명이
                  작성했어요!
                </S.WriterCountText>
              </S.AvatarRow>
            )}
          </S.PCOnly>
        </S.HeaderLeft>

        <S.HeaderRight>
          <S.PCOnly>
            {topReactions.length > 0 && (
              <>
                <S.ReactionList>
                  {topReactions.map((r) => (
                    <EmojiBadge key={r.id} emoji={r.emoji} number={r.count} />
                  ))}
                </S.ReactionList>
                <S.VertDivider />
              </>
            )}
          </S.PCOnly>

          <S.TabletOnly>
            {topReactions.length > 0 && (
              <>
                <S.ReactionList>
                  {visibleReactions.map((r) => (
                    <EmojiBadge key={r.id} emoji={r.emoji} number={r.count} />
                  ))}
                  {topReactions.length > 3 && (
                    <S.MoreReactionBtn onClick={toggleReactionAll}>
                      {showReactionAll ? "▲" : "▼"}
                    </S.MoreReactionBtn>
                  )}
                </S.ReactionList>
                <S.VertDivider />
              </>
            )}
          </S.TabletOnly>

          <S.ActionGroup>
            <S.RelativeWrap>
              <EmojiButton onClick={handleEmojiButtonClick} />
              {showEmojiPicker && (
                <EmojiPickerPopover
                  recipientId={recipientId}
                  onClose={() => setShowEmojiPicker(false)}
                  onReacted={onReacted}
                />
              )}
            </S.RelativeWrap>

            <S.VertDivider />

            <S.RelativeWrap>
              <Button
                variant="outlined"
                size="small"
                onClick={handleShareButtonClick}
              >
                공유
              </Button>
              {showShareMenu && (
                <ShareDropdown
                  recipientName={recipient?.name ?? ""}
                  onClose={() => setShowShareMenu(false)}
                  onUrlCopied={onUrlCopied}
                />
              )}
            </S.RelativeWrap>
          </S.ActionGroup>
        </S.HeaderRight>
      </S.HeaderInner>

      <S.MobileSecondRow>
        {topReactions.length > 0 && (
          <>
            <S.ReactionList>
              {visibleReactions.map((r) => (
                <EmojiBadge key={r.id} emoji={r.emoji} number={r.count} />
              ))}
            </S.ReactionList>
            {topReactions.length > 3 && (
              <S.MoreReactionBtn onClick={toggleReactionAll}>
                {showReactionAll ? "▲" : "▼"}
              </S.MoreReactionBtn>
            )}
          </>
        )}
      </S.MobileSecondRow>
    </S.HeaderBar>
  );
};

// 메인
const PostMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createToast } = useToast();

  const [recipient, setRecipient] = useState(null);
  const [reactions, setReactions] = useState([]);
  const [selectedMsg, setSelectedMsg] = useState(null);

  const { messages, isLoading, hasMore, loadNext } = useInfiniteMessages(id);

  const sentinelRef = useRef(null);

  // 수신자 & 이모지
  useEffect(() => {
    getRollingPaper(id).then(setRecipient);
    getReactions(id).then((data) => setReactions(data.results ?? []));
  }, [id]);

  // 무한 스크롤
  useEffect(() => {
    if (isLoading || !hasMore) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadNext();
      },
      { threshold: 0.1 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isLoading, hasMore, loadNext]);

  const handleReacted = () => {
    getReactions(id).then((data) => setReactions(data.results ?? []));
    getRollingPaper(id).then(setRecipient);
  };

  const handleUrlCopied = () => {
    createToast({
      message: "URL이 복사되었습니다.",
      icon: successIcon,
      duration: 5,
    });
  };

  const bgColor =
    BG_COLOR_MAP[recipient?.backgroundColor] ?? BACKGROUND_COLORS[0].color;
  const bgImage = recipient?.backgroundImageURL;

  return (
    <S.PageWrapper $bgColor={bgColor} $bgImage={bgImage}>
      <PostMessageHeader
        recipient={recipient}
        reactions={reactions}
        recipientId={id}
        onReacted={handleReacted}
        onUrlCopied={handleUrlCopied}
      />

      <S.MobileEditBar>
        <Button
          variant="primary"
          size="large"
          style={{ width: "100%" }}
          onClick={() => navigate(`/post/${id}/edit`)}
        >
          수정하기
        </Button>
      </S.MobileEditBar>

      <S.ContentArea>
        <S.PCEditBar>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(`/post/${id}/edit`)}
          >
            수정하기
          </Button>
        </S.PCEditBar>
        <S.CardGrid>
          <AddCard onClick={() => navigate(`/post/${id}/message`)} />
          {messages.map((msg) => (
            <S.CardWrapper key={msg.id}>
              <NormalCard
                name={msg.sender}
                relationship={msg.relationship}
                profileImg={msg.profileImageURL}
                content={parseContent(msg.content)}
                date={formatDate(msg.createdAt)}
              />
              <S.CardClickOverlay onClick={() => setSelectedMsg(msg)} />
            </S.CardWrapper>
          ))}
        </S.CardGrid>
        <S.Sentinel ref={sentinelRef} />
        {isLoading && <S.LoadingSpinner />}
      </S.ContentArea>

      {selectedMsg && (
        <CardModal
          name={selectedMsg.sender}
          relationship={selectedMsg.relationship}
          content={parseContent(selectedMsg.content)}
          createdDate={formatDate(selectedMsg.createdAt)}
          profileImg={selectedMsg.profileImageURL}
          fonts={selectedMsg.font}
          onCloseModal={() => setSelectedMsg(null)}
        />
      )}
    </S.PageWrapper>
  );
};

export default PostMessage;

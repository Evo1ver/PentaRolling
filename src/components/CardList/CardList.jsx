import Avatar from "../common/Avatar/Avatar";
import EmojiBadge from "../common/Badge/EmojiBadge";
import * as S from "./CardListStyle";

/**
 * 롤링페이퍼 카드 공통 컴포넌트
 *
 * - 배경색 또는 배경 이미지를 통해 카드 스타일 변경
 * - 상단: 받는 사람 이름 + 아바타 목록
 * - 본문: "n명이 작성했어요!" 문구 (작성자가 0명일 때 "아직 작성된 메시지가 없어요." 문구 출력)
 * - 하단: 이모지 뱃지 카운트
 */

const BACKGROUND_COLORS = {
  beige: "#FFE2AD",
  purple: "#ECD9FF",
  blue: "#B1E4FF",
  green: "#D0F5C3",
};

const CardList = ({
  recipientName,
  backgroundColor,
  backgroundImageUrl,
  avatarImageUrls = [],
  messageCount = 0, // 전체 메시지 수
  reactions = [], // 이모지 배열
  onClick,
}) => {
  const firstAvatars = avatarImageUrls.slice(0, 3);
  const extraCount = messageCount > 3 ? messageCount - 3 : 0;
  const showExtraCount = extraCount > 0;

  const themeColor =
    BACKGROUND_COLORS[backgroundColor] || BACKGROUND_COLORS.beige;

  return (
    <S.CardContainer
      $backgroundColor={themeColor}
      $backgroundImageUrl={backgroundImageUrl}
      onClick={onClick}
    >
      <S.CardContent>
        <S.Header>
          <S.RecipientText $backgroundImageUrl={backgroundImageUrl}>
            To. {recipientName}
          </S.RecipientText>
        </S.Header>

        <S.Body>
          <S.AvatarGroup>
            {firstAvatars.map((url, index) => (
              <S.AvatarItem key={`${url}-${index}`}>
                <Avatar src={url} size="xsmall" />
              </S.AvatarItem>
            ))}
            {showExtraCount && <S.ExtraCount>+{extraCount}</S.ExtraCount>}
          </S.AvatarGroup>

          <S.MessageText $backgroundImageUrl={backgroundImageUrl}>
            {messageCount > 0 ? (
              <>
                <span className="count-bold">{messageCount}</span>명이
                작성했어요!
              </>
            ) : (
              "아직 작성된 메시지가 없어요."
            )}
          </S.MessageText>
        </S.Body>

        <S.Divider $backgroundImageUrl={backgroundImageUrl} />

        <S.Footer>
          {reactions.map((reaction) => (
            <EmojiBadge
              key={reaction.id}
              emoji={reaction.emoji}
              number={reaction.count}
            />
          ))}
        </S.Footer>
      </S.CardContent>
    </S.CardContainer>
  );
};

export default CardList;

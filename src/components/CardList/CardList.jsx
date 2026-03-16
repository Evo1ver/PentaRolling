import Avatar from "../common/Avatar/Avatar";
import EmojiBadge from "../common/EmojiBadge/EmojiBadge";
import { CARD_BACKGROUND_COLORS } from "../../constants/backgroundColors";
import * as S from "./CardListStyle";

const CardList = ({
  recipientName,
  backgroundColor,
  backgroundImageUrl,
  avatarImageUrls = [],
  countBadgeCount,
  messageCount,
  reactions = [],
  onClick,
}) => {
  const showExtraCount =
    typeof countBadgeCount === "number" && countBadgeCount > 0;

  const firstAvatars = avatarImageUrls.slice(0, 3);

  const displayReactions = reactions.length >= 4 ? [] : reactions.slice(0, 3);

  const themeColor =
    CARD_BACKGROUND_COLORS[backgroundColor] || CARD_BACKGROUND_COLORS.beige;

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
            {firstAvatars.map((url) => (
              <S.AvatarItem key={url}>
                <Avatar src={url} size="xsmall" />
              </S.AvatarItem>
            ))}
            {showExtraCount && <S.CountBadge>+{countBadgeCount}</S.CountBadge>}
          </S.AvatarGroup>

          <S.MessageText $backgroundImageUrl={backgroundImageUrl}>
            {typeof messageCount === "number" && messageCount > 0 ? (
              <>
                <span className="count-bold">{messageCount}</span>명이
                작성했어요!
              </>
            ) : (
              "아직 작성된 메시지가 없어요."
            )}
          </S.MessageText>
        </S.Body>

        <S.Divider $backgroundImageUrl={backgroundImageUrl}></S.Divider>

        <S.Footer>
          {displayReactions.map((reaction) => (
            <EmojiBadge
              key={`${reaction.emoji}-${reaction.id ?? reaction.count}`}
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

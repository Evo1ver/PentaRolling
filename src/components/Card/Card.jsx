import * as S from "./CardStyle";
import Avatar from "../common/Avatar/Avatar";
import { DeleteIconButton, PlusButton } from "../Button/Button";
import RelationshipBadge from "../RelationshipBadge";

// 추가 카드 (+ 버튼)
export function AddCard({ onClick }) {
  return (
    <S.AddCardWrapper>
      <PlusButton onClick={onClick} />
    </S.AddCardWrapper>
  );
}

// 미니 카드 (심플 스타일)
export function MiniCard({ name, relationship, content, date, profileImg, showDeleteButton = false, onDelete }) {
  return (
    <S.MiniCardWrapper>
      <S.MiniCardHeader>
        <S.ProfileRow>
          <Avatar src={profileImg} size="56px" />
          <S.ProfileInfo>
            <S.ProfileName>From. {name}</S.ProfileName>
            <RelationshipBadge relationship={relationship} />
          </S.ProfileInfo>
        </S.ProfileRow>
        {showDeleteButton && (
          <DeleteIconButton size={36} onClick={onDelete} />
        )}
      </S.MiniCardHeader>
      <S.MiniCardContent>{content}</S.MiniCardContent>
      <S.CardDate>{date}</S.CardDate>
    </S.MiniCardWrapper>
  );
}

// 브라우저 스타일 일반 카드
export function NormalCard({ name, relationship, content, date, profileImg, showDeleteButton = false, onDelete }) {
  return (
    <S.CardWrapper>
      <S.CardHeader>
        <S.BrowserDots>
          <S.BrowserDot color="#E40000" />
          <S.BrowserDot color="#FDD539" />
          <S.BrowserDot color="#15AC30" />
        </S.BrowserDots>
        {showDeleteButton && (
          <DeleteIconButton size={36} onClick={onDelete} />
        )}
      </S.CardHeader>
      <S.CardBody>
        <S.ProfileRow>
          <Avatar src={profileImg} size="56px" />
          <S.ProfileInfo>
            <S.ProfileName>From. {name}</S.ProfileName>
            <RelationshipBadge relationship={relationship} />
          </S.ProfileInfo>
        </S.ProfileRow>
        <S.CardContent>{content}</S.CardContent>
        <S.CardDate>{date}</S.CardDate>
      </S.CardBody>
    </S.CardWrapper>
  );
}

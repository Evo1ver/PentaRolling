import * as S from "./CardStyle";
import Avatar from "../common/Avatar/Avatar";
import { DeleteIconButton, PlusButton } from "../common/Button/Button";
import RelationshipBadge from "../common/RelationshipBadge/RelationshipBadge";

// 내부 컴포넌트
const ProfileSection = ({ name, relationship, profileImg }) => (
  <S.ProfileRow>
    <Avatar src={profileImg} size="medium" />
    <S.ProfileInfo>
      <S.ProfileName>From. {name}</S.ProfileName>
      <RelationshipBadge relationship={relationship} />
    </S.ProfileInfo>
  </S.ProfileRow>
);

// 추가 카드 (+ 버튼)
export const AddCard = ({ onClick }) => (
  <S.AddCardWrapper>
    <PlusButton onClick={onClick} />
  </S.AddCardWrapper>
);

// 미니 카드 (심플 스타일)
export const MiniCard = ({
  name,
  relationship,
  content,
  date,
  profileImg,
  showDeleteButton = false,
  onDelete,
}) => (
  <S.MiniCardWrapper>
    <S.MiniCardHeader>
      <ProfileSection
        name={name}
        relationship={relationship}
        profileImg={profileImg}
      />
      {showDeleteButton && <DeleteIconButton size={36} onClick={onDelete} />}
    </S.MiniCardHeader>
    <S.CardContent>{content}</S.CardContent>
    <S.CardDate>{date}</S.CardDate>
  </S.MiniCardWrapper>
);

// 브라우저 스타일 일반 카드
export const NormalCard = ({
  name,
  relationship,
  content,
  date,
  profileImg,
  showDeleteButton = false,
  onDelete,
}) => (
  <S.CardWrapper>
    <S.CardHeader>
      <S.BrowserDots>
        <S.BrowserDot color="#E40000" />
        <S.BrowserDot color="#FDD539" />
        <S.BrowserDot color="#15AC30" />
      </S.BrowserDots>
      {showDeleteButton && <DeleteIconButton size={36} onClick={onDelete} />}
    </S.CardHeader>
    <S.CardBody>
      <ProfileSection
        name={name}
        relationship={relationship}
        profileImg={profileImg}
      />
      <S.CardContent>{content}</S.CardContent>
      <S.CardDate>{date}</S.CardDate>
    </S.CardBody>
  </S.CardWrapper>
);

import * as S from "./RelationshipBadgeStyle";

// relationship: 가족, 친구, 지인, 동료 중 하나여야만 함
const RelationshipBadge = ({ relationship }) => {
  return (
    <S.RelationshipBadgeContainer>{relationship}</S.RelationshipBadgeContainer>
  );
};

export default RelationshipBadge;

import * as S from "../styles/Badge/RelatioshipBadgeStyle";

// relationship: 가족, 친구, 지인, 동료 중 하나여야만 함
const RelationshipBadge = ({ relationship }) => {
  return (
    <S.RelationshipBadgeContainer relationship={relationship}>
      {relationship}
    </S.RelationshipBadgeContainer>
  );
};

export default RelationshipBadge;

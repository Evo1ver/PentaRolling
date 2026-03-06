import RelationshipBadgeContainer from "../styles/Badge/RelatioshipBadgeStyle";

// relationship: 가족, 친구, 지인, 동료 중 하나여야만 함
const RelationshipBadge = ({ relationship }) => {
  return (
    <RelationshipBadgeContainer relationship={relationship}>
      {relationship}
    </RelationshipBadgeContainer>
  );
};

export default RelationshipBadge;

import * as S from "../styles/Badge/EmojiBadgeStyle";

const EmojiBadge = ({ emoji, number }) => {
  return (
    <S.EmojiBadgeContainer>
      <span className="emoji">{emoji}</span>
      <span className="number">{number}</span>
    </S.EmojiBadgeContainer>
  );
};

export default EmojiBadge;

import EmojiBadgeContainer from "../styles/Badge/EmojiBadgeStyle";

const EmojiBadge = ({ emoji, number }) => {
  return (
    <EmojiBadgeContainer>
      <span className="emoji">{emoji}</span>
      <span className="number">{number}</span>
    </EmojiBadgeContainer>
  );
};

export default EmojiBadge;

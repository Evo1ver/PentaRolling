import * as S from "./CardImgStyle";

const CardImg = ({ src, size = "56px", style }) => {
  // 크기와 이미지만 변경
  return (
    <S.CardImgContainer $size={size} style={style}>
      <img src={src || "/profile.svg"} alt="카드 이미지" />
    </S.CardImgContainer>
  );
};

export default CardImg;

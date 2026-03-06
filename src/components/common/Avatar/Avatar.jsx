import * as S from "./AvatarStyle";

const Avatar = ({ src, size = "56px", style }) => {
  // 크기와 이미지만 변경
  return (
    <S.AvatarContainer $size={size} style={style}>
      <img src={src || "src/assets/defaultProfile.png"} alt="카드 이미지" />
    </S.AvatarContainer>
  );
};

export default Avatar;

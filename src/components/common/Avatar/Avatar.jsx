import * as S from "./AvatarStyle";

/**
 * Avatar 공용 컴포넌트
 *
 * @param {string}  [src]     - 이미지 URL (없으면 기본 아바타 표시)
 * @param {string}  [alt]     - 이미지 대체 텍스트 (기본값: "프로필 이미지")
 * @param {'xsmall'|'small'|'medium'|'large'|'xlarge'|string} [size]
 *                            - 사이즈 토큰 또는 CSS 값("80px") (기본값: "medium" → 64px)
 * @param {boolean} [selected] - 선택 상태 여부 (기본값: false)
 * @param {string}  [className] - 외부 className (styled-components 확장 지원)
 */
const DEFAULT_IMAGE_URL =
  "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png";

const Avatar = ({
  src,
  alt = "프로필 이미지",
  size = "medium",
  selected = false,
  className,
}) => {
  return (
    <S.AvatarContainer $size={size} $selected={selected} className={className}>
      <img
        src={src || DEFAULT_IMAGE_URL}
        alt={alt}
        onError={(e) => {
          const img = e.currentTarget;
          img.src = DEFAULT_IMAGE_URL;
          img.onerror = null;
        }}
      />
    </S.AvatarContainer>
  );
};

export default Avatar;

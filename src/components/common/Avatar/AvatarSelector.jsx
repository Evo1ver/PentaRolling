import * as S from "./AvatarStyle";
import Avatar from "./Avatar";

/**
 * 아바타 선택 컴포넌트 (profile-images의 imageUrls 사용)
 *
 * @param {string[]} profileImages - 이미지 URL 배열 (API imageUrls)
 * @param {string} [selectedImage] - 현재 선택된 이미지 URL
 * @param {function} onImageChange - 이미지 선택 시 콜백 (url) => void
 */
const AvatarSelector = ({ profileImages, selectedImage, onImageChange }) => {
  const images = profileImages ?? [];

  return (
    <S.AvatarSelectorContainer>
      {images.map((imgUrl, index) => (
        <S.AvatarOption
          key={`${imgUrl}-${index}`}
          type="button"
          onClick={() => onImageChange(imgUrl)}
          aria-pressed={selectedImage === imgUrl}
          aria-label={`프로필 이미지 ${index + 1} 선택`}
        >
          <Avatar
            src={imgUrl}
            size="medium"
            selected={selectedImage === imgUrl}
          />
        </S.AvatarOption>
      ))}
    </S.AvatarSelectorContainer>
  );
};

export default AvatarSelector;

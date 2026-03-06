import Avatar from "./Avatar";
import defaultProfile from "src/assets/defaultProfile.png";
import profile1 from "src/assets/profile1.png";
import profile2 from "src/assets/profile1.png";
import profile3 from "src/assets/profile1.png";

// 이미지 프로필 배열
const PROFILE_OPTION = [defaultProfile, profile1, profile2, profile3];

const AvatarSelector = ({ selectedImage, onImageChange }) => {
  return (
    <div className="profile-selector-container">
      {PROFILE_OPTION.map((imgUrl) => (
        <div
          key={imgUrl}
          onClick={() => onImageChange(imgUrl)}
          style={{ cursor: "pointer", padding: "5px" }}
        >
          <Avatar
            src={imgUrl}
            style={{
              border: selectedImage === imgUrl ? "2px solid #000" : "none",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarSelector;

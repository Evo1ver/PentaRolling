import CardImg from "./CardImg";

// 이미지 프로필 배열
const PROFILE_OPTION = [
  "/profile.svg",
  "/profile1.svg",
  "/profile2.svg",
  "/profile3.svg",
];

const ProfileSelector = ({ selectedImage, onImageChange }) => {
  return (
    <div className="profile-selector-container">
      {PROFILE_OPTION.map((imgUrl) => (
        <div
          key={imgUrl}
          onClick={() => onImageChange(imgUrl)}
          style={{ cursor: "pointer", padding: "5px" }}
        >
          <CardImg
            src={imgUrl}
            style={{
              border: selectedImage === imgUrl ? "2px solid #000" : "none",
            }}
          ></CardImg>
        </div>
      ))}
    </div>
  );
};

export default ProfileSelector;

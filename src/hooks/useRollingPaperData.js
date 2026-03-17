import { useState, useEffect } from "react";
import { getProfileImages } from "../lib/api/image";
import { getRollingPaper } from "../lib/api/rollingPaper";
import BACKGROUND_COLORS from "../constants/backgroundColors";

const BG_COLOR_MAP = Object.fromEntries(
  BACKGROUND_COLORS.map(({ label, color }) => [label, color]),
);

/**
 * 메시지 작성에 필요한 외부 데이터를 fetch하는 훅
 * - 프로필 이미지 목록
 * - 롤링페이퍼 배경색
 */
const useRollingPaperData = (recipientId) => {
  const [profileImages, setProfileImages] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [backgroundImageURL, setBackgroundImageURL] = useState(null);

  useEffect(() => {
    getProfileImages()
      .then(setProfileImages)
      .catch(() => setProfileImages([]))
      .finally(() => setIsLoadingImages(false));
  }, []);

  useEffect(() => {
    getRollingPaper(recipientId)
      .then((data) => {
        setBackgroundColor(BG_COLOR_MAP[data.backgroundColor] ?? "#FFFFFF");
        setBackgroundImageURL(data.backgroundImageURL ?? null);
      })
      .catch(() => {
        setBackgroundColor("#FFFFFF");
        setBackgroundImageURL(null);
      });
  }, [recipientId]);

  return {
    profileImages,
    isLoadingImages,
    backgroundColor,
    backgroundImageURL,
  };
};

export default useRollingPaperData;

import { baseInstance } from "./axios";

/**
 * 배경 이미지 목록을 가져옵니다.
 * @returns {string[]} 배경 이미지 URL 목록
 */
export const getBackgroundImages = async () => {
  const response = await baseInstance.get("background-images/");
  return response.data.imageUrls;
};

/**
 * 프로필 이미지 목록을 가져옵니다.
 * @returns {string[]} 프로필 이미지 URL 목록
 */
export const getProfileImages = async () => {
  const response = await baseInstance.get("profile-images/");
  return response.data.imageUrls;
};

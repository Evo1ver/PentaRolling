import { baseInstance } from "./axios";

/**
 * 배경 이미지 목록을 가져옵니다.
 * @returns {string[]} 배경 이미지 URL 목록
 */
export const getBackgroundImages = async () => {
  const response = await baseInstance.get("background-images/");

  if (response.status !== 200)
    throw new Error(`Fetch error, status code: ${response.status}`);

  if (!response.data.imageUrls) throw new Error("No imageUrls in response");

  return response.data.imageUrls;
};

/**
 * 프로필 이미지 목록을 가져옵니다.
 * @returns {string[]} 프로필 이미지 URL 목록
 */
export const getProfileImages = async () => {
  const response = await baseInstance.get("profile-images/");

  if (response.status !== 200)
    throw new Error(`Fetch error, status code: ${response.status}`);

  if (!response.data.imageUrls) throw new Error("No imageUrls in response");

  return response.data.imageUrls;
};

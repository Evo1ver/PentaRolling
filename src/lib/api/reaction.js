import { isEmoji } from "../emoji";
import { teamInstance } from "./axios";

/**
 * 특정 수신자에 대한 반응 목록을 가져옵니다.
 * @param {number} recipientId - 수신자 id
 * @param {number} limit - 가져올 수신자 수
 * @param {number} offset - 가져올 수신자 시작 위치
 * @returns {object[]} 수신자 목록
 */
export const getReactions = async (recipientId, limit, offset) => {
  const response = await teamInstance.get(
    `recipients/${recipientId}/reactions/`,
    {
      params: {
        limit,
        offset,
      },
    },
  );
  return response.data;
};

/**
 * 특정 수신자에 대한 반응을 추가합니다.
 * @param {number} recipientId - 수신자 id
 * @param {string} emoji - 반응 이모지
 * @returns {object} 수신자 목록
 */
export const addReaction = async (recipientId, emoji) => {
  if (!isEmoji(emoji)) throw new Error("Invalid emoji");
  const response = await teamInstance.post(
    `recipients/${recipientId}/reactions/`,
    {
      emoji,
      type: "increase",
    },
  );
  return response.data;
};

/**
 * 특정 수신자에 대한 반응을 삭제합니다.
 * @param {number} recipientId - 수신자 id
 * @param {string} emoji - 반응 이모지
 * @returns {object} 수신자 목록
 */
export const removeReaction = async (recipientId, emoji) => {
  if (!isEmoji(emoji)) throw new Error("Invalid emoji");
  const response = await teamInstance.post(
    `recipients/${recipientId}/reactions/`,
    {
      emoji,
      type: "decrease",
    },
  );
  return response.data;
};

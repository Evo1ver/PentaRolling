import { teamInstance } from "./axios";

/**
 * 특정 id를 가진 메세지를 가져옵니다.
 * @param {number} messageId - 메세지 id
 * @returns {object} 메세지 데이터
 */
export const getMessage = async (messageId) => {
  const response = await teamInstance.get(`messages/${messageId}/`);
  return response.data;
};

/**
 * 특정 메세지의 내용을 전체 변경합니다.
 * @param {number} messageId - 메세지 id
 * @param {object} messageData - 메세지 데이터
 * @returns {object} 메세지 데이터
 */
export const putMessage = async (messageId, messageData) => {
  // data에 team을 설정하지 않은 경우를 위한 방어선
  if (!messageData.team) {
    messageData = { ...messageData, team: "23-2" };
  }
  const response = await teamInstance.put(`/messages/${messageId}/`, {
    ...messageData,
  });
  return response.data;
};

/**
 * 특정 메세지의 내용을 일부 변경합니다.
 * @param {number} messageId - 메세지 id
 * @param {object} messageData - 메세지 데이터
 * @returns {object} 메세지 데이터
 */
export const patchMessage = async (messageId, messageData) => {
  const response = await teamInstance.patch(`messages/${messageId}/`, {
    ...messageData,
  });

  return response.data;
};

/**
 * 특정 메세지의 내용을 삭제합니다.
 * @param {number} messageId - 메세지 id
 * @returns {object} 메세지 데이터
 */
export const deleteMessage = async (messageId) => {
  const response = await teamInstance.delete(`messages/${messageId}/`);
  return response;
};

/**
 * 특정 RollingPaper 내에 메세지를 생성합니다.
 * @param {number} recipientId - 수신자 id
 * @param {object} messageData - 메세지 데이터
 * @returns {object} 메세지 데이터
 */
export const createMessage = async (recipientId, messageData) => {
  const response = await teamInstance.post(
    `recipients/${recipientId}/messages/`,
    messageData,
  );
  return response.data;
};

/**
 * 특정 RollingPaper에 있는 메세지 목록을 가져옵니다.
 * @param {number} recipientId - 수신자 id
 * @returns {object[]} 메세지 데이터
 */
export const getMessageList = async (recipientId, limit, offset) => {
  const response = await teamInstance.get(
    `recipients/${recipientId}/messages/`,
    {
      params: {
        limit,
        offset,
      },
    },
  );
  return response.data;
};

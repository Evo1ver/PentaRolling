import { teamInstance } from "./axios";

/**
 * RollingPaper를 생성합니다.
 * @param {object} rollingPaperData
 * @returns
 */
export const createRollingPaper = async (rollingPaperData) => {
  const response = await teamInstance.post(`recipients/`, rollingPaperData);

  if (response.status !== 201)
    throw new Error(`Fetch error, status code: ${response.status}`);

  return response.data;
};

/**
 * 전체 RollingPaper List를 반환합니다.
 * @param {number} limit - 반환받기 원하는 객체 수
 * @param {number} offset - 가장 앞부터 건너뛰고 싶은 객체 수
 * @param {string} sort - 정렬 기준
 * @returns
 */
export const getRollingPaperList = async (limit, offset, sort) => {
  const response = await teamInstance.get(`recipients/`, {
    limit,
    offset,
    sort,
  });

  if (response.status !== 200)
    throw new Error(`Fetch error, status code: ${response.status}`);

  return response.data;
};

/**
 * 특정한 RollingPaper를 반환합니다.
 * @param {*} recipientId - 찾고자 하는 rollingpaper id
 * @returns
 */
export const getRollingPaper = async (recipientId) => {
  const response = await teamInstance.get(`recipients/${recipientId}/`);

  if (response.status !== 200)
    throw new Error(`Fetch error, status code: ${response.status}`);

  return response.data;
};

/**
 * RollingPaper를 삭제합니다.
 * @param {*} rollingPaperId - 삭제할 rollingpaper id
 * @returns
 */
export const deleteRollingPaper = async (rollingPaperId) => {
  const response = await teamInstance.delete(`recipients/${rollingPaperId}/`);

  if (response.status !== 204)
    throw new Error(`Fetch error, status code: ${response.status}`);

  return response.data;
};

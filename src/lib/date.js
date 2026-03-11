/**
 * 주어진 날짜를 yyyy-mm-dd 형식으로 변환시켜주는 함수입니다.
 * @param {string} time
 * @returns {string} formattedDate
 */
export const formatDate = (time) => {
  // 서버에 저장되는 시간은 9시간 전이기 때문에 9시간 더해줘야 합니다.
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

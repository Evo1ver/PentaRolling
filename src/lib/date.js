/**
 * 주어진 날짜를 yyyy.mm.dd 형식으로 변환시켜주는 함수입니다.
 * @param {string} time
 * @returns {string} formattedDate
 */
export const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

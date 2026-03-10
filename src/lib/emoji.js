/**
 * 주어진 문자가 emoji인지 검사하는 함수입니다.
 * @param {char} emoji 또는 일반 문자
 * @returns {boolean} emoji면 true, 아니면 false
 */
export const isEmoji = (char) => {
  return /[\p{Emoji_Presentation}]/u.test(char) && char.length === 1;
};

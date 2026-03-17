import styled from "styled-components";

const tablet = "@media (min-width: 768px)";

export const EmojiBadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 36px;
  padding: 0 10px;
  border-radius: 9999px;
  font: var(--font-14-regular);
  background-color: rgba(0, 0, 0, 0.54);

  .emoji {
    margin-right: 2px;
  }

  .number {
    color: var(--white);
  }

  ${tablet} {
    width: 66px;
    padding: 0 12px;
  }
`;

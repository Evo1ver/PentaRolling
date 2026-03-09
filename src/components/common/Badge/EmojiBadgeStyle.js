import styled from "styled-components";

export const EmojiBadgeContainer = styled.div`
  padding: 6px 12px;
  border-radius: 9999px;
  font: var(--font-16-regular);
  background-color: rgba(0, 0, 0, 0.54);
  width: fit-content;

  .emoji {
    margin-right: 2px;
  }

  .number {
    color: var(--white);
  }
`;

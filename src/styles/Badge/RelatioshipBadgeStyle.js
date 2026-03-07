import styled from "styled-components";

const variants = {
  가족: {
    backgroundColor: "#3C3C43",
    color: "#FFFFFF",
  },
  친구: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  지인: {
    backgroundColor: "#F2F2F7",
    color: "#161414",
  },
  동료: {
    backgroundColor: "#4D3F3F",
    color: "#C7CBD9",
  },
};

export const RelationshipBadgeContainer = styled.div`
  padding: 0 8px;
  border-radius: 4px;
  ${(props) => variants[props.relationship]};
  font: var(--font-14-regular);
  width: fit-content;
  height: 20px;
`;

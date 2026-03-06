import styled from "styled-components";

// TODO: 지금은 색상을 값으로 관리하지만 나중에 변수화하기
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

const RelationshipBadgeContainer = styled.div`
  padding: 0 8px;
  border-radius: 4px;
  ${(props) => variants[props.relationship]};
  font: var(--font-14-regular);
  width: fit-content;
  height: 20px;
`;

export default RelationshipBadgeContainer;

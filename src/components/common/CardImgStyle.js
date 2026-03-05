import styled from "styled-components";

export const CardImgContainer = styled.div`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  border-radius: 50%;
  border: 1px solid #000;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

import styled from "styled-components";
import { Button } from "../common/Button/Button";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  font-family: ${({ $fonts }) => $fonts};
  width: 600px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  gap: 20px;
`;

export const Title = styled.div`
  font: var(--font-20-regular);

  div {
    margin-bottom: 6px;
  }
`;

export const Name = styled.span`
  margin-left: 6px;
  font: var(--font-20-bold);
`;

export const Date = styled.div`
  font: var(--font-14-regular);
  color: var(--gray-400);
  align-content: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;
export const WideButton = styled(Button)`
  width: 300px;
`;

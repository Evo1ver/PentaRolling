import styled from "styled-components";
import { Button } from "../common/Button/Button";

const MOBLIE_BREAKPOINT = "361px";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 64px;
  padding: 12px 0;
  background: #cccccc;
  background: linear-gradient(
    180deg,
    rgba(204, 204, 204, 1) 0%,
    rgba(100, 100, 100, 1) 100%
  );
`;

export const HeaderContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 40px;
  padding: 0px 24px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 167px;
  height: 30px;
`;

export const HeaderButton = styled(Button)`
  width: 138px;
  height: 40px;
  font: var(--font-14-bold);

  @media (width >= ${MOBLIE_BREAKPOINT}) {
    width: 152px;
    font: var(--font-16-bold);
  }
`;

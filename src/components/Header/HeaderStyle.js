import styled from "styled-components";

const HeaderContainer = styled.div`
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
const HeaderContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1248px;
  height: 40px;
  padding: 0px 24px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 167px;
  height: 30px;
`;

export { HeaderContainer, HeaderContents, Logo };

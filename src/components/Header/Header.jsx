import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Button } from "../common/Button/Button";
import * as S from "./HeaderStyle";

const Header = () => {
  const handleClick = () => {
    console.log("누름");
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContents>
        <Link to="/">
          <S.Logo src={Logo} />
        </Link>
        <Link to="/post">
          <Button variant="outlined" size="small" onClick={handleClick}>
            롤링 페이퍼 만들기
          </Button>
        </Link>
      </S.HeaderContents>
    </S.HeaderContainer>
  );
};

export default Header;

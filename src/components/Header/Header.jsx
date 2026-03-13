import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import * as S from "./HeaderStyle";

const Header = () => {
  const { pathname } = useLocation();
  const shouldShowButton = pathname === "/" || pathname === "/list";

  return (
    <S.HeaderContainer>
      <S.HeaderContents>
        <Link to="/">
          <S.Logo src={Logo} />
        </Link>
        {shouldShowButton && (
          <Link to="/post">
            <S.HeaderButton variant="outlined" size="small">
              롤링 페이퍼 만들기
            </S.HeaderButton>
          </Link>
        )}
      </S.HeaderContents>
    </S.HeaderContainer>
  );
};

export default Header;

import Logo from "../../components/Logo";
import { HeaderContainer, LogoContainer } from "./Header.style";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;

import { LinkContainer, Link } from "./NavBar.styles";

const NavBar = () => {
  return (
    <LinkContainer>
      <Link to="/">Activity</Link>
      <Link to="/archived">Archived</Link>
    </LinkContainer>
  );
};

export default NavBar;

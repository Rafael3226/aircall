import { useSelector } from "react-redux";
import { LinkContainer, Link } from "./NavBar.styles";
import { selectArchived } from "../../../store/activities";

const NavBar = () => {
  const archived = useSelector(selectArchived);
  const showArchivedLink = archived.length > 0;

  return (
    <LinkContainer>
      <Link to="/">Activity</Link>
      {showArchivedLink && <Link to="/archived">Archived</Link>}
    </LinkContainer>
  );
};

export default NavBar;

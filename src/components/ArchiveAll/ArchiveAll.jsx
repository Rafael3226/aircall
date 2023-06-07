import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { ArchiveAllTitle, ArchiveAllContainer } from "./ArchiveAll.styles";
import { updateAllIsArchived } from "../../store/activities";

const TITLES = {
  archive: "Archive all calls",
  unarchive: "Unarchive all calls",
};

const ArchiveAll = ({ isArchived }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateAllIsArchived({ is_archived: !isArchived }));
  };

  return (
    <ArchiveAllContainer onClick={handleClick}>
      {isArchived ? <BiArchiveOut /> : <BiArchiveIn />}
      <ArchiveAllTitle>
        {isArchived ? TITLES.unarchive : TITLES.archive}
      </ArchiveAllTitle>
    </ArchiveAllContainer>
  );
};

ArchiveAll.propTypes = {
  isArchived: PropTypes.bool,
};

export default ArchiveAll;

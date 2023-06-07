import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { updateIsArchived } from "../../store/activities";

const ArchiveButton = ({ id, isArchived }) => {
  const dispatch = useDispatch();

  const handleArchive = () => {
    dispatch(updateIsArchived(id, !isArchived));
  };
  return isArchived ? (
    <BiArchiveOut onClick={handleArchive} />
  ) : (
    <BiArchiveIn onClick={handleArchive} />
  );
};

ArchiveButton.propTypes = {
  id: PropTypes.string,
  isArchived: PropTypes.bool,
};

export default ArchiveButton;

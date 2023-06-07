import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { updateIsArchived } from "../../store/activities";

const ArchiveButton = ({ id, isArchived }) => {
  const dispatch = useDispatch();
  return isArchived ? (
    <BiArchiveOut
      onClick={() => {
        dispatch(updateIsArchived({ id, is_archived: false }));
      }}
    />
  ) : (
    <BiArchiveIn
      onClick={() => {
        dispatch(updateIsArchived({ id, is_archived: true }));
      }}
    />
  );
};

ArchiveButton.propTypes = {
  id: PropTypes.string,
  isArchived: PropTypes.bool,
};

export default ArchiveButton;

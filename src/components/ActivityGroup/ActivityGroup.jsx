import PropTypes from "prop-types";

import ActivityList from "./ActivityList";
import {
  GroupContainer,
  DivitionContainer,
  DivitionText,
} from "./ActivityGroup.styles";
import { useDispatch } from "react-redux";
import { setGroup } from "../../store/activities";
import { useNavigate } from "react-router-dom";

const ActivityGroup = ({ groups, isDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const groupList = Object.entries(groups);

  const handleClick = ({ date, list }) => {
    const group = { [date]: list };
    if (!isDetail) {
      dispatch(setGroup({ group }));
      navigate("/details");
    }
  };

  return (
    <>
      {groupList.map(([date, activities], i) => (
        <GroupContainer key={i}>
          <DivitionContainer>
            <DivitionText>{date}</DivitionText>
          </DivitionContainer>
          <ActivityList
            activities={activities}
            onClick={(list) => handleClick({ date, list })}
          />
        </GroupContainer>
      ))}
    </>
  );
};

ActivityGroup.propTypes = {
  groups: PropTypes.object,
  isDetail: PropTypes.bool,
};

export default ActivityGroup;

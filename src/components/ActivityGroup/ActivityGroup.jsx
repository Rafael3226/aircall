import PropTypes from "prop-types";

import ActivityList from "../ActivityList";
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

  const handleClick = (group) => {
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
            isDetail={isDetail}
            activities={activities}
            onClick={(group) => handleClick(group)}
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

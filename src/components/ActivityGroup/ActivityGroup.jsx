import PropTypes from "prop-types";

import ActivityList from "./ActivityList";
import {
  GroupContainer,
  DivitionContainer,
  DivitionText,
} from "./ActivityGroup.styles";

const ActivityGroup = ({ groups }) => {
  const groupList = Object.entries(groups);

  return (
    <>
      {groupList.map(([date, activities], i) => (
        <GroupContainer key={i}>
          <DivitionContainer>
            <DivitionText>{date}</DivitionText>
          </DivitionContainer>
          <ActivityList activities={activities} />
        </GroupContainer>
      ))}
    </>
  );
};

ActivityGroup.propTypes = {
  groups: PropTypes.object,
};

export default ActivityGroup;

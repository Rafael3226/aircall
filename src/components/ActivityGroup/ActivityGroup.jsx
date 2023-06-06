import PropTypes from "prop-types";

import ActivityList from "./ActivityList";
import {
  GroupContainer,
  DivitionContainer,
  DivitionText,
} from "./ActivityGroup.styles";

const ActivityGroup = ({ groups }) => {
  return (
    <>
      {groups.map((g, i) => (
        <GroupContainer key={i}>
          <DivitionContainer>
            <DivitionText>123</DivitionText>
          </DivitionContainer>
          <ActivityList activities={[1, 2, 3]} />
        </GroupContainer>
      ))}
    </>
  );
};

ActivityGroup.propTypes = {
  groups: PropTypes.array,
};

export default ActivityGroup;

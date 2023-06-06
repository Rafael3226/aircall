import PropTypes from "prop-types";
import { ListContainer } from "./ActivityList.styles";
import Activity from "../Activity";

function ActivityList({ activities }) {
  return (
    <ListContainer>
      {activities.map((item, i) => (
        <Activity
          key={i}
          icon="inbound"
          number="+1 647 295 7559"
          via="via 1"
          time="4:20"
          meridiem="PM"
        />
      ))}
    </ListContainer>
  );
}

ActivityList.propTypes = {
  activities: PropTypes.array,
};

export default ActivityList;

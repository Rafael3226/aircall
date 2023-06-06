import PropTypes from "prop-types";
import { ListContainer } from "./ActivityList.styles";
import Activity from "./Activity";
import { mapActivity } from "./mapActivity";

function ActivityList({ activities }) {
  return (
    <ListContainer>
      {activities.map((item, i) => {
        const { icon, title, via, time, meridiem, count } = mapActivity(item);
        return (
          <Activity
            key={i}
            icon={icon}
            title={title}
            via={via}
            time={time}
            meridiem={meridiem}
            count={count}
          />
        );
      })}
    </ListContainer>
  );
}

ActivityList.propTypes = {
  activities: PropTypes.array,
};

export default ActivityList;

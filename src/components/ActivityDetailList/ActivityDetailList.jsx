import PropTypes from "prop-types";
import { ListContainer } from "../ActivityList";
import Activity from "../Activity";
import { mapActivity } from "../../util/mapActivity";

function ActivityDetailList({ activities, onClick }) {
  return (
    <ListContainer>
      {activities.map((item, i) => {
        const { icon, time, meridiem, count, summary, duration } =
          mapActivity(item);
        return (
          <Activity
            key={i}
            icon={icon}
            title={summary}
            subTitle={duration}
            time={time}
            meridiem={meridiem}
            count={count}
            onClick={() =>
              item.activities?.length
                ? onClick(item.activities)
                : onClick([item])
            }
          />
        );
      })}
    </ListContainer>
  );
}

ActivityDetailList.propTypes = {
  activities: PropTypes.array,
  onClick: PropTypes.func,
};

export default ActivityDetailList;

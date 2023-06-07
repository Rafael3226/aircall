import PropTypes from "prop-types";
import { ListContainer } from "./ActivityList.styles";
import Activity from "../Activity";
import { mapActivity } from "../../util/mapActivity";

function ActivityList({ activities, onClick, isDetail }) {
  return (
    <ListContainer>
      {activities.map((item, i) => {
        const { icon, title, via, time, meridiem, count, summary, duration } =
          mapActivity(item);
        return (
          <Activity
            key={i}
            id={item.id}
            icon={icon}
            title={isDetail ? summary : title}
            subTitle={isDetail ? duration : via}
            time={time}
            meridiem={meridiem}
            count={count}
            isArchived={item.is_archived}
            isDetail={isDetail}
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

ActivityList.propTypes = {
  activities: PropTypes.array,
  onClick: PropTypes.func,
  isDetail: PropTypes.bool,
};

export default ActivityList;

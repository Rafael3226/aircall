import { formatDate, greatherOrEqual, greatherThan5min } from "./dates";

const sortActivities = (list) => {
  const { archived, unarchived } = divideByArchived(list);

  return {
    archived: groupActivities(archived),
    unarchived: groupActivities(unarchived),
  };
};

const isActivityEqual = (a1, a2) => {
  return (
    a1.from === a2.from &&
    a1.to === a2.to &&
    a1.via === a2.via &&
    a1.direction === a2.direction &&
    a1.is_archived === a2.is_archived &&
    a1.call_type === a2.call_type &&
    !greatherThan5min(a1.created_at, a2.created_at)
  );
};

const divideByArchived = (list) => {
  return list.reduce(
    ({ archived, unarchived }, activity) => {
      activity.is_archived
        ? archived.push(activity)
        : unarchived.push(activity);

      return { archived, unarchived };
    },
    { archived: [], unarchived: [] }
  );
};

const groupByDate = (list) => {
  return list.reduce((groups, current) => {
    const formatedDate = formatDate(current.created_at);
    if (!groups[formatedDate]) {
      groups[formatedDate] = [current];
    } else {
      groups[formatedDate].push(current);
    }
    return groups;
  }, {});
};

const groupByTime = (list) => {
  return list.reduce((acc, current) => {
    const activityIndex = acc.findIndex((x) => isActivityEqual(x, current));
    const activityExist = activityIndex > -1;
    if (activityExist) {
      const activity = acc[activityIndex];

      if (activity.activities === undefined) {
        activity.activities = [{ ...activity }, current];
      } else {
        activity.activities.push(current);
      }

      if (greatherOrEqual(current.created_at, activity.created_at)) {
        activity.created_at = current.created_at;
      }
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
};

const groupActivities = (list) => {
  if (!list.length) return [];

  const groupedList = groupByTime(list);

  return groupByDate(groupedList);
};

export default sortActivities;

import { useSelector } from "react-redux";
import ActivityDetails from "../components/ActivityDetails/ActivityDetails";
import { selectGroup } from "../store/activities";
import groupActivities from "../util/sortActivities";

import { mapActivity } from "../util/mapActivity";
import DefaultPage from "./DefaultPage";

const ActivityDetailsPage = () => {
  const groupList = useSelector(selectGroup);

  if (groupList.length > 0) {
    const group = groupActivities(groupList);
    const { title, via } = mapActivity(groupList[0]);

    return <ActivityDetails group={group} title={title} subtitle={via} />;
  }
  return <DefaultPage />;
};

export default ActivityDetailsPage;

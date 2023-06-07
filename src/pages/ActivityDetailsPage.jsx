import { useSelector } from "react-redux";
import ActivityDetails from "../components/ActivityDetails/ActivityDetails";
import { selectGroup } from "../store/activities";
import { groupByDate } from "../util/sortActivities";

import { mapActivity } from "../util/mapActivity";
import { useNavigate } from "react-router-dom";

const ActivityDetailsPage = () => {
  const groupList = useSelector(selectGroup);
  const group = groupByDate(groupList);
  const navigate = useNavigate();

  if (groupList.length <= 0) navigate("/");
  const { title, via } = mapActivity(groupList[0]);
  return <ActivityDetails group={group} title={title} subtitle={via} />;
};

export default ActivityDetailsPage;

import { useSelector } from "react-redux";
import ActivityDetails from "../components/ActivityDetails/ActivityDetails";
import { selectGroup } from "../store/activities";
import { groupByDate } from "../util/sortActivities";

import { mapActivity } from "../util/mapActivity";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ActivityDetailsPage = () => {
  const groupList = useSelector(selectGroup);
  const navigate = useNavigate();

  useEffect(() => {
    if (groupList.length <= 0) navigate("/");
  }, [navigate, groupList]);

  if (groupList.length <= 0) return;
  const group = groupByDate(groupList);
  const { title, via } = mapActivity(groupList[0]);
  return <ActivityDetails group={group} title={title} subtitle={via} />;
};

export default ActivityDetailsPage;

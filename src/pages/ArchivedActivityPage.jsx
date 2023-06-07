import { useSelector } from "react-redux";
import { selectArchived } from "../store/activities";
import ActivityGroup from "../components/ActivityGroup";
import groupActivities from "../util/sortActivities";

const ArchivedActivitiesPage = () => {
  const archived = useSelector(selectArchived);
  const groups = groupActivities(archived);

  return <ActivityGroup groups={groups} isDetail={false} />;
};

export default ArchivedActivitiesPage;

import { useSelector } from "react-redux";
import { selectArchived } from "../store/activities";
import ActivityGroup from "../components/ActivityGroup";

const ArchivedActivitiesPage = () => {
  const groups = useSelector(selectArchived);

  return <ActivityGroup groups={groups} isDetail={false} />;
};

export default ArchivedActivitiesPage;

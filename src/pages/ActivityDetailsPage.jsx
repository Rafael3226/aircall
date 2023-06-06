import { useSelector } from "react-redux";
import ActivityDetails from "../components/ActivityDetails/ActivityDetails";
import { selectGroup } from "../store/activities";

const ActivityDetailsPage = () => {
  const group = useSelector(selectGroup);
  return <ActivityDetails group={group} />;
};

export default ActivityDetailsPage;

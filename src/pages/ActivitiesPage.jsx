import { useSelector } from "react-redux";
import ActivityGroup from "../components/ActivityGroup";
import { selectUnarchived } from "../store/activities";

const ActivitiesPage = () => {
  const groups = useSelector(selectUnarchived);

  return <ActivityGroup groups={groups} />;
};

export default ActivitiesPage;

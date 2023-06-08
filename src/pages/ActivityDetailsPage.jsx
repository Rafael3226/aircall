import ActivityDetails from "../components/ActivityDetails/ActivityDetails";
import useDetail from "../hooks/useDetail";

const ActivityDetailsPage = () => {
  const { group, title, via } = useDetail();
  return <ActivityDetails group={group} title={title} subtitle={via} />;
};

export default ActivityDetailsPage;

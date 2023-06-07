import { useSelector } from "react-redux";
import ActivityGroup from "../components/ActivityGroup";
import { selectUnarchived } from "../store/activities";
import groupActivities from "../util/sortActivities";
import ArchiveAll from "../components/ArchiveAll";
import DefaultPage from "./DefaultPage";

const ActivityPage = () => {
  const unarchived = useSelector(selectUnarchived);

  if (unarchived.length <= 0) return <DefaultPage title="No Activity" />;

  const groups = groupActivities(unarchived);

  return (
    <>
      <ArchiveAll isArchived={false} />
      <ActivityGroup groups={groups} isDetail={false} />
    </>
  );
};

export default ActivityPage;

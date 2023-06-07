import { useSelector } from "react-redux";
import ActivityGroup from "../components/ActivityGroup";
import { selectUnarchived } from "../store/activities";
import groupActivities from "../util/sortActivities";
import ArchiveAll from "../components/ArchiveAll";

const ActivityPage = () => {
  const unarchived = useSelector(selectUnarchived);
  const groups = groupActivities(unarchived);

  return (
    <>
      <ArchiveAll isArchived={false} />
      <ActivityGroup groups={groups} isDetail={false} />
    </>
  );
};

export default ActivityPage;

import { useSelector } from "react-redux";
import { selectArchived } from "../store/activities";
import ActivityGroup from "../components/ActivityGroup";
import groupActivities from "../util/sortActivities";
import ArchiveAll from "../components/ArchiveAll";

const ArchivedActivitiesPage = () => {
  const archived = useSelector(selectArchived);
  const groups = groupActivities(archived);

  return (
    <>
      <ArchiveAll isArchived={true} />
      <ActivityGroup groups={groups} isDetail={false} />
    </>
  );
};

export default ArchivedActivitiesPage;

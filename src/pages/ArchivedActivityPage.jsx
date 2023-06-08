import ActivityGroup from "../components/ActivityGroup";
import ArchiveAll from "../components/ArchiveAll";
import useArchived from "../hooks/useArchived";

const ArchivedActivitiesPage = () => {
  const { groups } = useArchived();
  return (
    <>
      <ArchiveAll isArchived={true} />
      <ActivityGroup groups={groups} isDetail={false} />
    </>
  );
};

export default ArchivedActivitiesPage;

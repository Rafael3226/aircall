import ActivityGroup from "../components/ActivityGroup";
import ArchiveAll from "../components/ArchiveAll";
import useActivity from "../hooks/useActivity";

const ActivityPage = () => {
  const { groups } = useActivity();
  return (
    <>
      <ArchiveAll isArchived={false} />
      <ActivityGroup groups={groups} isDetail={false} />
    </>
  );
};

export default ActivityPage;

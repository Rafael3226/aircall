import { useDispatch, useSelector } from "react-redux";
import ActivityGroup from "../components/ActivityGroup";
import { fetchActivities, selectUnarchived } from "../store/activities";
import groupActivities from "../util/sortActivities";
import ArchiveAll from "../components/ArchiveAll";
import { useEffect } from "react";

const ActivityPage = () => {
  const unarchived = useSelector(selectUnarchived);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  if (unarchived.length <= 0) return;

  const groups = groupActivities(unarchived);

  return (
    <>
      <ArchiveAll isArchived={false} />
      <ActivityGroup groups={groups} isDetail={false} />
    </>
  );
};

export default ActivityPage;

import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, selectArchived } from "../store/activities";
import ActivityGroup from "../components/ActivityGroup";
import groupActivities from "../util/sortActivities";
import ArchiveAll from "../components/ArchiveAll";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ArchivedActivitiesPage = () => {
  const archived = useSelector(selectArchived);
  const groups = groupActivities(archived);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  if (archived.length <= 0) navigate("/");

  return (
    <>
      <ArchiveAll isArchived={true} />
      <ActivityGroup groups={groups} isDetail={false} />
    </>
  );
};

export default ArchivedActivitiesPage;

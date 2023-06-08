import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, selectUnarchived } from "../store/activities";
import groupActivities from "../util/sortActivities";

const useActivity = () => {
  const unarchived = useSelector(selectUnarchived);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const groups = groupActivities(unarchived);
  return { groups };
};

export default useActivity;

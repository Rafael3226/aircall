import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchActivities, selectArchived } from "../store/activities";
import groupActivities from "../util/sortActivities";

const useArchived = () => {
  const archived = useSelector(selectArchived);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  useEffect(() => {
    if (archived.length <= 0) navigate("/");
  }, [navigate, archived]);

  const groups = groupActivities(archived);
  return { groups };
};

export default useArchived;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectGroup } from "../store/activities";
import { groupByDate } from "../util/sortActivities";
import { mapActivity } from "../util/mapActivity";

const DEFAULT_DETAIL = { group: {}, title: "Unknown", via: "Unknown" };

const useDetail = () => {
  const groupList = useSelector(selectGroup);
  const navigate = useNavigate();

  useEffect(() => {
    if (groupList.length <= 0) navigate("/");
  }, [navigate, groupList]);

  if (groupList.length <= 0) return DEFAULT_DETAIL;
  const group = groupByDate(groupList);
  const { title, via } = mapActivity(groupList[0]);
  return { group, title, via };
};

export default useDetail;

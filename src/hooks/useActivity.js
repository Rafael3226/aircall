import { useState, useEffect } from "react";
import activityApi from "../api/activityApi";

const useActivity = () => {
  const [archived, setArchived] = useState([]);
  const [unarchived, setUnarchived] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    activityApi
      .getActivities()
      .then(({ data }) => {
        saveActivities(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const saveActivities = (activitiesList) => {
    const { archivedList, unarchivedList } =
      separateListByArchiveStatus(activitiesList);

    setArchived(archivedList);
    setUnarchived(unarchivedList);
  };
  const separateListByArchiveStatus = (list) => {
    const archivedList = [];
    const unarchivedList = [];

    list.forEach((item) => {
      if (item.is_archived) {
        archivedList.push(item);
      } else {
        unarchivedList.push(item);
      }
    });
    return {
      archivedList,
      unarchivedList,
    };
  };

  const archiveActivity = () => {};

  return { loading, unarchived, archived, archiveActivity };
};

export default useActivity;

import fetchActivitiesSaga from "./fetchActivities.saga";
import updateAllIsArchivedSaga from "./updateAllIsArchived.saga";
import updateIsArchivedSaga from "./updateIsArchived.saga";

export const sagas = [
  fetchActivitiesSaga,
  updateIsArchivedSaga,
  updateAllIsArchivedSaga,
];

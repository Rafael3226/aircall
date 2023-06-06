import { takeLatest } from "redux-saga/effects";
import { actions as ActivitiesActions } from "../slice";

function* handleFetchActivities() {}

export default takeLatest(
  ActivitiesActions.fetchActivities,
  handleFetchActivities
);

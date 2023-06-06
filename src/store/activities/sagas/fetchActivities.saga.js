import { call, put, takeLatest } from "redux-saga/effects";
import { fetchActivities, setActivities } from "../slice";

import { getActivities } from "../../../api/activityApi";
import sortActivities from "../../../util/sortActivities";

function* handleFetchActivities() {
  try {
    const { data } = yield call(getActivities);

    if (!data.length) return false;

    const activities = sortActivities(data);

    yield put(setActivities(activities));
  } catch (ex) {
    console.error(ex);
  }
}

export default takeLatest(fetchActivities, handleFetchActivities);

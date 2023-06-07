import { call, put, takeLatest } from "redux-saga/effects";
import { fetchActivities, setActivities } from "../slice";

import { getActivities } from "../../../api/activityApi";

function* handleFetchActivities() {
  try {
    const { data: activities } = yield call(getActivities);
    yield put(setActivities({ activities }));
  } catch (ex) {
    console.error(ex);
  }
}

export default takeLatest(fetchActivities, handleFetchActivities);

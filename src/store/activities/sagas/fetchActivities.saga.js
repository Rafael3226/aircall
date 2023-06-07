import { call, put, takeLatest } from "redux-saga/effects";
import { fetchActivities, setActivities } from "../slice";

import { getActivities } from "../../../api/activityApi";
import { setLoading } from "../../loading/slice";

function* handleFetchActivities() {
  try {
    yield put(setLoading({ isLoading: true }));
    const { data: activities } = yield call(getActivities);
    yield put(setActivities({ activities }));
  } catch (ex) {
    console.error(ex);
  } finally {
    yield put(setLoading({ isLoading: false }));
  }
}

export default takeLatest(fetchActivities, handleFetchActivities);

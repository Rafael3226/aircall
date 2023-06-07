import { call, put, takeLatest } from "redux-saga/effects";
import { updateIsArchived, setIsArchived } from "../slice";

import { patchIsArchive } from "../../../api/activityApi";
import { setLoading } from "../../loading/slice";

function* hadleUpdateIsArchived({ payload }) {
  try {
    yield put(setLoading({ isLoading: true }));
    const { id, is_archived } = payload;
    yield call(patchIsArchive, { id, is_archived });

    yield put(setIsArchived({ id, is_archived }));
  } catch (ex) {
    // for alert
    console.error(ex);
  } finally {
    yield put(setLoading({ isLoading: false }));
  }
}

export default takeLatest(updateIsArchived, hadleUpdateIsArchived);

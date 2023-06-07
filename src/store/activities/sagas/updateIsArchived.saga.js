import { call, put, takeLatest } from "redux-saga/effects";
import { updateIsArchived, setIsArchived } from "../slice";

import { patchIsArchive } from "../../../api/activityApi";

function* hadleUpdateIsArchived({ payload }) {
  const { id, is_archived } = payload;
  try {
    yield call(patchIsArchive, { id, is_archived });

    yield put(setIsArchived({ id, is_archived }));
  } catch (ex) {
    console.error(ex);
  }
}

export default takeLatest(updateIsArchived, hadleUpdateIsArchived);

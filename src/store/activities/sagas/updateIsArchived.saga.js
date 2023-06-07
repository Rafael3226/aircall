import { call, put, takeLatest } from "redux-saga/effects";
import { updateIsArchived, setIsArchived } from "../slice";

import { patchIsArchive } from "../../../api/activityApi";

function* hadleUpdateIsArchived(id, is_archived) {
  try {
    const { data } = yield call(patchIsArchive, id, is_archived);

    yield put(setIsArchived(data));
  } catch (ex) {
    console.error(ex);
  }
}

export default takeLatest(updateIsArchived, hadleUpdateIsArchived);

import { call, put, select, takeLatest } from "redux-saga/effects";
import { setAllIsArchived, updateAllIsArchived } from "../slice";

import { patchMultipleIsArchive } from "../../../api/activityApi";
import { selectArchived, selectUnarchived } from "../selectors";
import { setLoading } from "../../loading/slice";

function* hadleUpdateAllIsArchived({ payload }) {
  try {
    yield put(setLoading({ isLoading: true }));
    const { is_archived } = payload;
    const selector = is_archived ? selectUnarchived : selectArchived;
    const activityList = yield select(selector);

    const idList = activityList.map((a) => a.id);

    const updatedList = yield call(patchMultipleIsArchive, {
      idList,
      is_archived,
    });

    yield put(setAllIsArchived({ updatedList }));
  } catch (ex) {
    console.error(ex);
  } finally {
    yield put(setLoading({ isLoading: false }));
  }
}

export default takeLatest(updateAllIsArchived, hadleUpdateAllIsArchived);

import { call, put, select, takeLatest } from "redux-saga/effects";
import { setAllIsArchived, updateAllIsArchived } from "../slice";

import { patchMultipleIsArchive } from "../../../api/activityApi";
import { selectArchived, selectUnarchived } from "../selectors";

function* hadleUpdateAllIsArchived({ payload }) {
  try {
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
  }
}

export default takeLatest(updateAllIsArchived, hadleUpdateAllIsArchived);

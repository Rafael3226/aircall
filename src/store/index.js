import { combineReducers } from "redux";

import createStore from "./createStore";

import * as activities from "./activities";
import * as loading from "./loading";

export default createStore({
  reducer: combineReducers({
    activities: activities.reducer,
    loading: loading.reducer,
  }),
  sagas: [...activities.sagas],
  middleware: [],
});

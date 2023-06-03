import { combineReducers } from "redux";

import createStore from "./createStore";

import * as activities from "./activities";

export default createStore({
  reducer: combineReducers({ activities: activities.reducer }),
  sagas: [...activities.sagas],
  middleware: [],
});

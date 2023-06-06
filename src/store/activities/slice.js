import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  archived: [],
  unarchived: [],
};
const reducers = {
  fetchActivities: (s) => s,
};

const { actions, reducer } = createSlice({
  name: "activities",
  initialState,
  reducers,
});

export { actions, reducer };

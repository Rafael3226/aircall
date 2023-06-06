import { createSlice } from "@reduxjs/toolkit";
import * as reactions from "./reactions";

const initialState = {
  archived: {},
  unarchived: {},
};
const reducers = {
  fetchActivities: (s) => s,
  setActivities: reactions.setActivities,
};

export const { actions, reducer } = createSlice({
  name: "activities",
  initialState,
  reducers,
});

export const { fetchActivities, setActivities } = actions;

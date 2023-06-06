import { createSlice } from "@reduxjs/toolkit";
import * as reactions from "./reactions";

const initialState = {
  archived: {},
  unarchived: {},
  group: {},
};

const reducers = {
  fetchActivities: (s) => s,
  setActivities: reactions.setActivities,
  setGroup: reactions.setGroup,
};

export const { actions, reducer } = createSlice({
  name: "activities",
  initialState,
  reducers,
});

export const { fetchActivities, setActivities, setGroup } = actions;

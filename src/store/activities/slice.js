import { createSlice } from "@reduxjs/toolkit";
import * as reactions from "./reactions";

const initialState = {
  activities: [],
  group: [],
};

const reducers = {
  fetchActivities: reactions.noop,
  setActivities: reactions.setActivities,
  setGroup: reactions.setGroup,
  updateIsArchived: reactions.noop,
  setIsArchived: reactions.setIsArchived,
};

export const { actions, reducer } = createSlice({
  name: "activities",
  initialState,
  reducers,
});

export const {
  fetchActivities,
  setActivities,
  setGroup,
  updateIsArchived,
  setIsArchived,
} = actions;

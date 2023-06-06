import { createSelector } from "@reduxjs/toolkit";

export const selectActivities = createSelector(
  (state) => state.activities,
  ({ activities }) => activities
);

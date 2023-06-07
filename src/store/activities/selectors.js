import { createSelector } from "@reduxjs/toolkit";

export const selectActivities = createSelector(
  (state) => state.activities,
  ({ activities }) => activities
);

export const selectUnarchived = createSelector(
  (state) => state.activities,
  ({ activities }) => activities.filter((a) => !a.is_archived)
);

export const selectArchived = createSelector(
  (state) => state.activities,
  ({ activities }) => activities.filter((a) => a.is_archived)
);

export const selectGroup = createSelector(
  (state) => state.activities,
  ({ group }) => group
);

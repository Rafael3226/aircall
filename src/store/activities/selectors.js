import { createSelector } from "@reduxjs/toolkit";

export const selectArchived = createSelector(
  (state) => state.activities,
  ({ archived }) => archived
);

export const selectUnarchived = createSelector(
  (state) => state.activities,
  ({ unarchived }) => unarchived
);

import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = createSelector(
  (state) => state.loading,
  ({ isLoading }) => isLoading
);

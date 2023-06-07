import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = createSelector(
  (state) => state.loading,
  ({ isLoading }) => isLoading
);

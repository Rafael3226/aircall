import { createSeletor } from "@reduxjs/toolkit";

export const selectActivities = createSeletor(
  (state) => state.activities,
  ({ activities }) => activities
);

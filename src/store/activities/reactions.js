export const setActivities = (state, { payload }) => {
  const { archived, unarchived } = payload;
  return { ...state, archived, unarchived };
};

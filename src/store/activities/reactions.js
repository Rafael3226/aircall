export const setActivities = (state, { payload }) => {
  const { archived, unarchived } = payload;
  return { ...state, archived, unarchived };
};

export const setGroup = (state, { payload }) => {
  const { group } = payload;
  return { ...state, group };
};

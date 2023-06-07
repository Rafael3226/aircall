export const noop = (s) => s;

export const setActivities = (state, { payload }) => {
  const { activities } = payload;
  return { ...state, activities };
};

export const setGroup = (state, { payload }) => {
  const { group } = payload;
  return { ...state, group };
};

export const setIsArchived = (state, { payload }) => {
  const { activities, group } = state;
  const { id, is_archived } = payload;

  const newGroup = group.filter((a) => a.id !== id);
  const newActivities = activities.map((a) =>
    a.id === id ? { ...a, is_archived } : a
  );
  return { ...state, group: newGroup, activities: newActivities };
};

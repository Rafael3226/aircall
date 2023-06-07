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

export const setAllIsArchived = (state, { payload }) => {
  const { activities } = state;
  const { updatedList } = payload;

  // Map activities with updatedList
  const newActivities = activities.map((storeActivity) => {
    // Find index in store
    const activityIndex = updatedList.findIndex(
      (updatedActivity) => storeActivity.id === updatedActivity.id
    );
    // If it does not exists return original
    if (activityIndex < 0) return storeActivity;
    const { is_archived } = updatedList[activityIndex];
    // Return new is_archived
    return {
      ...storeActivity,
      is_archived,
    };
  });
  return { ...state, activities: newActivities };
};

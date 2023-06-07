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
  const { archived, unarchived, group } = state;
  const activity = payload;

  const newState = { archived, unarchived };

  newState.group = group.filter((a) => {
    a.id === activity.id;
  });

  if (activity.is_archived) {
    newState.archived = [...archived];
    newState.archived.push(activity);
    newState.unarchived = unarchived.filter((a) => a.id === activity.id);
  } else {
    newState.archived = archived.filter((a) => a.id === activity.id);
    newState.unarchived = [...unarchived];
    newState.unarchived.push(activity);
  }
  return newState;
};

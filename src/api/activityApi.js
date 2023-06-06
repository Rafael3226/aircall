import axios from "axios";

const API_URL = "https://cerulean-marlin-wig.cyclic.app";

export const getActivities = async () =>
  await axios.get(`${API_URL}/activities`);

export const getActivity = async (id) =>
  await axios.get(`${API_URL}/activities/${id}`);

export const patchIsArchive = async (id, isArchived) => {
  const updateData = { is_archived: isArchived };
  return await axios.patch(`${API_URL}/activities/${id}`, updateData);
};

export const patchReset = async () => await axios.patch(`${API_URL}/reset`);

import axios from "axios";

const API_URL = "https://cerulean-marlin-wig.cyclic.app";

export const getActivities = () => axios.get(`${API_URL}/activities`);

export const getActivity = (id) => axios.get(`${API_URL}/activities/${id}`);

export const patchIsArchive = (id, isArchived) => {
  const updateData = { is_archived: isArchived };
  return axios.patch(`${API_URL}/activities/${id}`, updateData);
};

export const patchReset = () => axios.patch(`${API_URL}/reset`);

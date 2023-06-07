import axios from "axios";

const API_URL = "https://cerulean-marlin-wig.cyclic.app";

export const getActivities = async () =>
  await axios.get(`${API_URL}/activities`);

export const getActivity = async (id) =>
  await axios.get(`${API_URL}/activities/${id}`);

export const patchIsArchive = ({ id, is_archived }) => {
  return axios.patch(`${API_URL}/activities/${id}`, { is_archived });
};

export const patchReset = async () => await axios.patch(`${API_URL}/reset`);

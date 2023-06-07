import axios from "axios";

const API_URL = "https://cerulean-marlin-wig.cyclic.app";

export const getActivities = async () =>
  await axios.get(`${API_URL}/activities`);

export const getActivity = async (id) =>
  await axios.get(`${API_URL}/activities/${id}`);

export const patchIsArchive = async ({ id, is_archived }) => {
  await axios.patch(`${API_URL}/activities/${id}`, { is_archived });
};

export const patchMultipleIsArchive = async ({ idList, is_archived }) => {
  const requests = [];

  idList.forEach((id) => {
    requests.push(
      axios
        .patch(`${API_URL}/activities/${id}`, { is_archived })
        .then(() => ({ id, is_archived }))
        .catch(() => ({ id, is_archived: !is_archived }))
    );
  });

  return await Promise.all(requests);
};

export const patchReset = async () => await axios.patch(`${API_URL}/reset`);

import axios from "axios";

const API_URL = "https://cerulean-marlin-wig.cyclic.app";

const getActivities = () => axios.get(`${API_URL}/activities`);

const activityApi = {
  getActivities,
};

export default activityApi;

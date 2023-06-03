import axios from "axios";

const API_URL = "https://cerulean-marlin-wig.cyclic.app";

export const getActivities = () => axios.get(`${API_URL}/activities`);

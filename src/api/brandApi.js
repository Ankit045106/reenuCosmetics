import axios from "./axiosInstance";

const brandAPI = {
  listing: (params) => axios.get(`brands`, { params }),
  details: (slug) => axios.get(`brands/${slug}`),
};

export default brandAPI;

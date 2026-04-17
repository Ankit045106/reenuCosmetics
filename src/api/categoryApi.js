import axios from "./axiosInstance";

const categoryAPI = {
  listing: (params) => axios.get(`categories`, { params }),
  details: (slug) => axios.get(`categories/${slug}`),
};

export default categoryAPI;

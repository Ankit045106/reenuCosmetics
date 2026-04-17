import axios from "./axiosInstance";

const blogAPI = {
  listing: (params) => axios.get(`blogs`, { params }),
  details: (slug, params) => axios.get(`blogs/${slug}`, {params}),
};

export default blogAPI;

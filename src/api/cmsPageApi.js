import axios from "./axiosInstance";

const cmsPageAPI = {
  details: (slug) => axios.get(`cms/${slug}`),
};

export default cmsPageAPI;

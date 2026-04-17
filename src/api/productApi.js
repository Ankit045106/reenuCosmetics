import axios from "./axiosInstance";

const productAPI = {
  listing: (params) => axios.get(`products`, { params }),
  details: (slug) => axios.get(`products/${slug}`),
};

export default productAPI;

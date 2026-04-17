import axios from "./axiosInstance";

const wishlistAPI = {
  listing: () => axios.post(`wishlists`),
  addProduct: (payload) => axios.post(`wishlists/add`, payload),
};

export default wishlistAPI;

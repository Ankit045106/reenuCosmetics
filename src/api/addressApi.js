import axios from "./axiosInstance";

const addressAPI = {
  addNewAddress: (payload) => axios.post("users/addresses", payload),

  getAllAddress: () => axios.get("users/addresses"),

  fetchAllAddress: (payload) => axios.post("users/addresses/all", payload),

  deleteAddress: (id) => axios.delete(`users/addresses/${id}`),
};

export default addressAPI;

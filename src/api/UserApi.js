import axios from "./axiosInstance";

const userAPI = {
  login: (payload) => axios.post("users/auth/login", payload),

  logOut: (payload) => axios.post("users/auth/logout", payload),

  register: (payload) => axios.post("users/auth/register", payload),

  getDetails: () => axios.get("users/auth"),

  updateDetails: (payload) => axios.put("users/auth", payload),

  updatePassword: (payload) => axios.put("users/auth/reset-password", payload),

  fetchMyOrders: () => axios.post("users/auth/get-my-orders"),
  
  fetchLatestOrder: () => axios.post("users/auth/get-last-order"),

  orderDetails: (id) => axios.post(`users/auth/order-details/${id}`),

  getAddressUsingLatLong: (payload) =>
    axios.post("users/auth/getAddressUsingLatLong", payload),

  refreshToken: (payload) =>
    axios.post("users/auth/refresh-token", payload, {
      withCredentials: true,
    }),
};

export default userAPI;

import axios from "./axiosInstance";

const orderAPI = {
  createSession: (payload) => axios.post("orders/session", payload),
  
  placeOrder: (payload) => axios.post("orders/place-order", payload),
  
  paymentConfirmed: (payload) => axios.post("orders/verify", payload),
  
  paymentCancelled: (payload) => axios.post("orders/payment-failed", payload)
};

export default orderAPI;

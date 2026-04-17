import axios from "./axiosInstance";

const cartAPI = {
  addCart: (payload) => axios.post("carts", payload),

  fetchCart: () => axios.get("carts"),

  removeItem: (id) => axios.delete(`carts/items/${id}`),

  updateQuantity: (id, payload) => axios.patch(`carts/items/${id}`, payload),

  descQuantity: (id) => axios.patch(`carts/items/${id}/decrement`),

  showCoupon: () => axios.get("carts/show-coupon"),

  validateCoupon: (payload) => axios.post("carts/validate-coupon", payload),
  
  applyCoupon: (payload) => axios.post("carts/apply-coupon", payload),

  removeCoupon: () => axios.post("carts/remove-coupon"),
};

export default cartAPI;

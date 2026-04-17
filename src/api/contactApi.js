import axios from "./axiosInstance";

const contactAPI = {
  store: (payload) => axios.post("contact-us", payload),
};

export default contactAPI;

import axios from "./axiosInstance";

const homePageAPI = {
  details: () => axios.get("details"),

  homePage: (payload) => axios.post("homepage", payload),

  fetchDetailsUsingSlug: (payload) =>
    axios.post("fetchDetailsUsingSlug", payload),

  fetchCategories: () => axios.post("homepage/category-for-navbar"),
};

export default homePageAPI;

import axios from "axios";

export default {
  getAll: () => {
    return axios.get(window.location.protocol + "/api/aps/");
  },
  getGallery: () => {
    return axios.get(window.location.protocol + "/api/gallery/");
  },
};

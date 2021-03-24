import axios from "axios";

export default {
  getAll: () => {
    return axios.get("http://127.0.0.1:8000/api/all/");
  },
};

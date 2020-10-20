import axios from "axios";

export default {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};

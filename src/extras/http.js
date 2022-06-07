import axios from "axios";
export default axios.create({
  baseURL: "https://valteam-vue-backend-main-wnt53sxcqa-wm.a.run.app/",
  headers: {
    "Content-type": "application/json",
  },
});

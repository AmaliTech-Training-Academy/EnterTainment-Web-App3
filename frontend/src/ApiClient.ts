import axios from "axios";
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
 
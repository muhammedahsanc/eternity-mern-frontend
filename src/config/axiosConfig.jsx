import axios from "axios";
const API_URL = "http://localhost:7000/";

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
export { API_URL };

import axios from "axios";

const api = axios.create({
  baseURL: process.env.REA
});

export default api;

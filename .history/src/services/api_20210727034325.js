import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_
});

export default api;

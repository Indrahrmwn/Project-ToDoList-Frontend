import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // sesuaikan dengan Laravel kamu
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default instance;

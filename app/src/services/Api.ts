import axios from "axios";

export const api = axios.create({
  baseURL: "https://xbox-live-server-blue.onrender.com/",
});

import axios from 'axios';
import { OpenNotification } from "./Actions/Utilities/Utilities";
const token = localStorage.getItem("token");
export const http = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "access-control-allow-methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      },
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      OpenNotification("error", "Please login with correct credentials");
      const token = localStorage.getItem("token");
      const path = window.location.pathname;
      if (
        typeof token === "undefined" &&
        token === "" &&
        token === null &&
        path !== "/login"
      ) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  }
);
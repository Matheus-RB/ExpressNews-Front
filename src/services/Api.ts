import axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    const token = cookies.get("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default api;

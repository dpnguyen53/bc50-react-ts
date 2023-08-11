import axios from "axios";

type Config = {
  headers: any;
};

const api = axios.create({
  baseURL: "https://shop.cyberlearn.vn/api",
});

api.interceptors.request.use((config: Config) => {
  config.headers = {
    ...config.headers,
  };

  return config;
});

export default api;

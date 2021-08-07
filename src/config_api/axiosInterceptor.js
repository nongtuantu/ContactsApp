import envs from "./env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const headers = {};

const axiosInterceptor = axios.create({
  baseURL: envs.API_URL,
  headers,
});

//tạo request tới API
axiosInterceptor.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptor;

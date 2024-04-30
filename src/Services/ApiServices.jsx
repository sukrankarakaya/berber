import axios from "axios";
import { store } from "../Store/store"; // Redux store'umuza erişim sağlayacağız
const baseURL = "https://localhost:7022/api";

const apiService = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// apiService.interceptors.request.use(
//   (config) => {
//     const token = store.getState().barberLogin.userToken;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

const postData = async ({ url, data = null, config = {} }) => {
  try {
    const response = await apiService.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};

const fetchData = async ({ url, method = "GET", data = null, config = {} }) => {
  try {
    const response = await apiService({
      url,
      method,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const apiServices = {
  fetchData,
  postData,
};

export default apiServices;

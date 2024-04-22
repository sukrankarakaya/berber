import axios from "axios";

const apiService = axios.create({
  baseURL: "https://localhost:7022/api",
  headers: {
    "Content-Type": "application/json",
  },

});

const postData = async ({ url, data = null, config = {} }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiService({
      url,
      method: "POST",
      data,
      ...config,
    });
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
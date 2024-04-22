
import axios from "axios";


const apiService = axios.create({
  baseURL: "https://localhost:7022/api/Barber/",
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
    // Handle error here (e.g., log it or show a notification)
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
    // Handle error here (e.g., log it or show a notification)
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const apiServiceModule = {
  fetchData,
  postData,
};

export default apiServiceModule;
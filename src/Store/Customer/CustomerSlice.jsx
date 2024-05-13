import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://localhost:7022/api";

// Async thunk to fetch customers
export const getCustomers = createAsyncThunk(
  "customer/getCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/Customer/get-customers`);
      return response.data; // Return customer data upon successful fetch
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCustomerId = createAsyncThunk(
  "customer/getCustomers",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/Customer//get-customer/${userId}`);
      return response.data; // Return customer data upon successful fetch
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const customerSlice = createSlice({
  name: "customer",
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
    success: false,
  },

  reducers: {
    getCustomers(state, action) {
        state.userInfo = action.payload;
        state.loading = false;
        state.error = null;

    },
  },
  
});

export default customerSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://localhost:7022/api";

// Async thunk to register a customer
export const registerCustomer = createAsyncThunk(
  "Customer/create-customer",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${baseURL}/Customer/create-customer`, userData, config);
      return { success: true }; // Return success flag upon successful registration
    } catch (error) {
      // Return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

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

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    userInfo: null,
    userToken: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    // Additional reducers can be defined here if needed
  },
  extraReducers: (builder) => {
    builder
      // Reducer for pending action of registerCustomer
      .addCase(registerCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success; // Set success flag based on payload
      })
      .addCase(registerCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Reducer for pending action of getCustomers
      .addCase(getCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload; // Update user info with fetched customers
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;

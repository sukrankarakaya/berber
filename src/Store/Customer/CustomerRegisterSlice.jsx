import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://localhost:7022/api";

// Async thunk to register a customer
export const registerCustomer = createAsyncThunk(
  "customer/registerCustomer",
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

// // Async thunk to fetch barbers
// export const getBarbers = createAsyncThunk(
//   "customer/getBarbers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${baseURL}/Barber/get-barbers`);
//       return response.data; // Return barber data upon successful fetch
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// Define customer slice with initial state and reducers
const customerSlice = createSlice({
  name: "customer",
  initialState: {
    loading: false,
    userInfo: null,
    userToken: null,
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
      })
    
  },
});

export default customerSlice.reducer;

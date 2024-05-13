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


const customerRegisterSlice = createSlice({
  name: "customerRegister",
  initialState: {
    userInfo: null,
    currentUser:null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
 
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
        state.currentUser=action.payload;
        state.success = action.payload.success; // Set success flag based on payload
      })
      .addCase(registerCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  },
});

export default customerRegisterSlice.reducer;

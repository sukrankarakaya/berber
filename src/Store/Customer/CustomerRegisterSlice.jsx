import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "https://localhost:7022/api/Customer";

export const registerCustomer = createAsyncThunk(
  "customer/create-customer", // action type string
  async (userData, { rejectWithValue }) => { // Sadece kullanıcı verilerini alıyoruz
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${baseURL}/create-customer`,
        userData, // userData doğrudan axios.post'a gönderiliyor
        config
      );
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const getCustomers = createAsyncThunk(
  "customer/getCustomer",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/get-customers`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // register user
      .addCase(registerCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true; // registration successful
      })
      .addCase(registerCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});






export default customerSlice.reducer;

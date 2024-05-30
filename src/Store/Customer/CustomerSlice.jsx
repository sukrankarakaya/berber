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

export const getCustomerById = createAsyncThunk(
  "customer/getCustomerById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/Customer/Get-Customer/${userId}`);
      
      return response.data; // Kullanıcı verisini başarılı bir şekilde getir
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCustomerId = createAsyncThunk(
  "customer/getCustomerById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/Customer/get-customer/${userId}`);
      console.log("getCustomer :", response.data);
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
    userDetail:null,

  },

  reducers: {
    getCustomers(state, action) {
        state.userInfo = action.payload;
        state.loading = false;
        state.error = null;

    },
    setCustomerDetail(state,action){
      state.userDetail = action.payload;
      state.loading = false;
      state.error = null;
    }
  }, 
  extraReducers: (builder) => {
    // Handle the fulfilled action of getCustomerId
    builder.addCase(getCustomerId.fulfilled, (state, action) => {
      state.userDetail = action.payload;
      state.loading = false;
      state.error = null;
    });
  },

});

export const { setCustomerDetail} = customerSlice.actions;
export default customerSlice.reducer;

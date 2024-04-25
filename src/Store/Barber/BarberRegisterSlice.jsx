import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "https://localhost:7022/api/Barber";

export const registerBarber = createAsyncThunk(
  "Barber/create-barber", // action type string
  async (userData, { rejectWithValue }) => { // Sadece kullanıcı verilerini alıyoruz
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${baseURL}/create-barber`,
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
export const getBarber = createAsyncThunk(
    "Barber/get-barbers",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${baseURL}/get-barbers`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  const barberSlice = createSlice({
    name: "barber",
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
        .addCase(registerBarber.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(registerBarber.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true; // registration successful
        })
        .addCase(registerBarber.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  export default barberSlice.reducer;
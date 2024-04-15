// barberRegistrationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API'ye bağlanmak için bir Async Thunk oluşturuyoruz
export const registerBarber = createAsyncThunk(
  "barberRegistration/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("https://localhost:7022/api/Barber/create-barber", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const barberRegistrationSlice = createSlice({
  name: "barberRegistration",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [registerBarber.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [registerBarber.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [registerBarber.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default barberRegistrationSlice.reducer;

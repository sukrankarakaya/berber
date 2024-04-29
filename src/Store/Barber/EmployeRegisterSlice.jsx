import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://localhost:7022/api/Employee";

export const registerEmploy = createAsyncThunk(
  "Employee/create-employees",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${baseURL}/create-employees`,
        userData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getEmploy = createAsyncThunk(
  "Employee/get-employees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/get-employees`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const employSlice = createSlice({
  name: "employ",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerEmploy.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerEmploy.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerEmploy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default employSlice.reducer;

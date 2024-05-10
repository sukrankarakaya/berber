import {
  createSlice,
  createAsyncThunk,
  isActionCreator,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userName: null,
  location: "Antalya",
  isAuthenticated: false,
  userId: null,
  token: null, // Token alanı eklendi
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login(state, action) {
    //   state.userName = action.payload.userName;
    //   state.isAuthenticated = true;
    //   state.token = action.payload.token; // Tokeni kaydet
    // },
    logout(state) {
      state.userName = null;
      state.isAuthenticated = false;
      state.token = null; // Tokeni temizle
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginCustomer.pending, (state) => {
        state.isAuthenticated = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(loginCustomer.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.success = action.payload.success; // Set success flag based on payload
        state.userId = action.payload.user;
        state.userName = action.payload.userName;
        state.token = action.payload.token; // Set token based on payload
        state.error = null;
      })
      .addCase(loginCustomer.rejected, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const loginCustomer = createAsyncThunk(
  "auth/loginAsync",
  async ({ userName, password }) => {
    const response = await axios.post(
      `https://localhost:7022/api/Customer/login`,
      { userName, password }
    );
    console.log("Server response: Customer Login", response.data);
    return response.data;
  }
);

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

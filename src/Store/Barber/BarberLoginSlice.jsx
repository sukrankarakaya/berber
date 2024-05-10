import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userName: null,
  isAuthenticated: false,
  token: null, // Token alanı eklendi
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.userName = action.payload.userName;
      state.isAuthenticated = true;
      state.token = action.payload.token; // Tokeni kaydet
    },
    logout(state) {
      state.userName = null;
      state.isAuthenticated = false;
      state.token = null; // Tokeni temizle
    },
  },
});

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ userName, password }) => {
    const response = await axios.post(`https://localhost:7022/api/Auth/register`, { userName, password });
    //console.log("Server response:", response.data);
    return response.data;
  }
);

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

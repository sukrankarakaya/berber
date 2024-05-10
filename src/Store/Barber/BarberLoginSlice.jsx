import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  barberID: null,
  isAuthenticated: false,
  token: null,
  error: null,
  barberdata: null,
};

export const BarberLoginSlice = createSlice({
  name: 'barberLogin',
  initialState,
  reducers: {
    login(state, action) {
      const { token, user } = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      state.barberID = user;
      state.error = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.barberID = null;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setBarberId(state, action) {
      state.barberID = action.payload;
    },
  },
});

export const loginAsync = createAsyncThunk(
  'BarberLoginSlice/loginAsync',
  async ({ userName, password }) => {
    try {
      const response = await axios.post(`https://localhost:7022/api/Barber/login`, { userName, password });
      if (response.status === 200) {
        const { token, user } = response.data;
        return { token, user };
      } else {
        throw new Error("Invalid response received from the server");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data);
      throw new Error("Incorrect username or password");
    }
  }
);

export const getBarberById = createAsyncThunk(
  'BarberLoginSlice/getBarber',
  async (barberId) => {
    try {
      const response = await axios.get(`https://localhost:7022/api/Barber/get-barber/${barberId}`);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Invalid response received from the server");
      }
    } catch (error) {
      console.error("Fetching barber failed:", error.response.data);
      throw new Error("Error fetching barber data");
    }
  }
);

export const { login, logout, setError, setBarberData, setBarberId } = BarberLoginSlice.actions; 
export default BarberLoginSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Username: null,
  location: null,
  isAuthenticated: false,
  userId: null,
  token: null,
  loading: false,
  error: null,
  success: false,
  barber: null,
};

const baseURL = "https://localhost:7022/API/Barber";

const barberLoginSlice = createSlice({
  name: "barberLogin",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.loading = false;
      state.userId = action.payload.user;
      state.Username = action.payload.Username;
      // state.location = action.payload.city + "/" + action.payload.district + "/" +action.payload.street;
      state.location = action.payload.city + "/" + action.payload.district ;

      state.token = action.payload.token;
      state.error = null;
    },
    logout(state) {
      state.Username = null;
      state.isAuthenticated = false;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.success = false;
      state.barber = null;
    },
    setBarber(state, action) {
      state.barber = action.payload;
    },
  },
});

export const { login, logout, setBarber } = barberLoginSlice.actions;

export const loginBarber = createAsyncThunk(
  "auth/loginAsync",
  async ({ Username, Password }, { dispatch }) => {
    const response = await axios.post(
      `${baseURL}/Login`,
      { Username, Password },
      {headers: {
        'Content-Type': 'multipart/form-data',
      }}
    );
    // dispatch(getBarberById(response.data.user));
    return response.data;
  }
);

export const getBarberById = createAsyncThunk(
  "barber/getBarberById",
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      if (userId !== null) {
        const response = await axios.get(`${baseURL}/get-barber/${userId}`);
        dispatch(setBarber(response.data));
        console.log(response.data); // Berber verilerini konsola yazdır
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default barberLoginSlice.reducer;

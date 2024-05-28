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
  employees: [],
  services: [],
};

const baseURL = "https://localhost:7022/API/Barber";

export const loginBarber = createAsyncThunk(
  "auth/loginAsync",
  async ({ Username, Password }, { dispatch }) => {
    const response = await axios.post(
      `${baseURL}/Login`,
      { Username, Password },
      
    );
    return response.data;
  }
);

export const getBarberById = createAsyncThunk(
  "barber/getBarberById",
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      if (userId !== null) {
        const response = await axios.get(`${baseURL}/Get-Barber/${userId}`);
        dispatch(setBarber(response.data));
        // console.log(response.data); // Berber verilerini konsola yazdır
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const putBarberById = createAsyncThunk(
  "barber/putBarberById",
  async ({ userId, formData }, { rejectWithValue, dispatch }) => {
    try {
      if (userId !== null) {
        const response = await axios.put(`/API/Barber/Update-Barber/${userId}`, formData);
        dispatch(setBarber(response.data));
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const getBarberEmployees = createAsyncThunk(
  "barber/getBarberEmployees",
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      if (userId !== null) {
        const response = await axios.get(`${baseURL}/Get-Barber-With-Employees/${userId}`);
        dispatch(setBarberEmployees(response.data.employees));
        return response.data.employees;
      } else {
        console.log("userId null");
        return null;
      }
    } catch (error) {
      console.error("Error fetching barber employees:", error.message);
      return rejectWithValue(error.message);
    }
  }
);


const barberLoginSlice = createSlice({
  name: "barberLogin",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.loading = false;
      state.userId = action.payload.user;
      state.Username = action.payload.userName;
      state.location = action.payload.city + "/" + action.payload.district;
      state.token = action.payload.token;
      state.error = null;
      state.barber = action.payload;
      state.employees = action.payload.employees;
      state.services = action.payload.services;
    },
    logout(state) {
      state.Username = null;
      state.isAuthenticated = false;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.success = false;
      state.barber = null;
      state.employees=null;
      state.services=null;
    },
    setBarber(state, action) {
      state.barber = action.payload;
      
    },
    setBarberEmployees(state, action) {
      state.employees = action.payload;
    },
    setBarberServices(state,action){
      state.services=action.payload;
    }
  },
});

export const { login, logout, setBarber,setBarberEmployees,setBarberServices } = barberLoginSlice.actions;
export default barberLoginSlice.reducer;
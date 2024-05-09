import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://localhost:7022/api/Barber";

// Async thunk for registering a new barber
export const registerBarber = createAsyncThunk(
  "barber/registerBarber",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${baseURL}/create-barber`,
        userData,
        config
      );
      return response.data; // Return data upon successful registration
    } catch (error) {
      // Return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Async thunk for fetching all barbers
export const getBarbers = createAsyncThunk(
  "barber/getBarbers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/get-barbers`);
      return response.data; // Return barber data upon successful fetch
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching a specific barber by ID
export const getBarberById = createAsyncThunk(
  "barber/getBarberById",
  async (barberId, { rejectWithValue }) => {
    try {
      // BarberId null değilse axios.get çağrısını yap
      if (barberId !== null) {
        const response = await axios.get(`${baseURL}/get-barber/${barberId}`);
        return response.data; // Başarılı veri çekme durumunda barber verisini döndür
      } else {
        return null; // BarberId null ise null döndür
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const barberSlice = createSlice({
  name: "barber",
   initialState : {
    loading: false,
    userInfo: null,
    error: null,
    success: false,
    filteredList: [],
     filters : [
      { name: 'selectedStars', value: null },
      { name: 'selectedCity', value: null },
      { name: 'selectedService', value: null },
      { name: 'minPrice', value: '' },
      { name: 'maxPrice', value: '' }
    ],
    
  },
  
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setFilterValue: (state, action) => {
      const { selectedStars, selectedCity, selectedService, minPrice, maxPrice } = action.payload;
      state.filters = {
        selectedStars,
        selectedCity,
        selectedService,
        minPrice,
        maxPrice,
      };
    },
    
    filterBarbers(state) {
      const { selectedStars, selectedCity, selectedService, minPrice, maxPrice } = state.filters;
      state.filteredList = state.list.filter(barber => {
        const matchesStars = !selectedStars || barber.rating === selectedStars;
        const matchesCity = !selectedCity || barber.city === selectedCity;
        const matchesService = !selectedService || barber.service === selectedService;
        const matchesPriceRange =
          (minPrice === '' && maxPrice === '') ||
          (barber.price >= parseFloat(minPrice) && barber.price <= parseFloat(maxPrice));
        return matchesStars && matchesCity && matchesService && matchesPriceRange;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerBarber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerBarber.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload; // Update user info upon successful registration
      })
      .addCase(registerBarber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Update error state upon registration failure
      })
      .addCase(getBarbers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBarbers.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload; // Update barber list upon successful fetch
      })
      .addCase(getBarbers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Update error state upon fetch failure
      })
      .addCase(getBarberById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBarberById.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload; // Update barber info upon successful fetch by ID
      })
      .addCase(getBarberById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Update error state upon fetch failure by ID
      });
  },
});

export const { setBarbers ,setInputValue, setFilterValue, filterBarbers } = barberSlice.actions;

export default barberSlice.reducer;

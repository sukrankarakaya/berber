
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerCustomer = createAsyncThunk(
  'customer/register',
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://localhost:7022/api/Customer/create-customer', customerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    data: null,
    status: 'idle', 
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCustomer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(registerCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default customerSlice.reducer;

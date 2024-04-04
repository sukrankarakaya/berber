
import { configureStore } from '@reduxjs/toolkit';
import appointmentSlice from './appointmentSlice ';

export const store = configureStore({
  reducer: {
    appointments: appointmentSlice,
  },
});

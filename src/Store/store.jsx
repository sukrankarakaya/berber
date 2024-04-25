
import { configureStore } from '@reduxjs/toolkit';
import appointmentSlice from './appointmentSlice ';
import customerSlice from './Customer/CustomerRegisterSlice';


export const store = configureStore({
  reducer: {
    customer:customerSlice,
    appointments: appointmentSlice,
    




  },
});

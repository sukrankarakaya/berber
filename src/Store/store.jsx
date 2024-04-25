
import { configureStore } from '@reduxjs/toolkit';
import appointmentSlice from './appointmentSlice ';
import customerSlice from './Customer/CustomerRegisterSlice';
import barberSlice from './Barber/BarberRegisterSlice';



export const store = configureStore({
  reducer: {
    customer:customerSlice,
    appointments: appointmentSlice,
    barber:barberSlice
    



  },
});

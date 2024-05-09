
import { configureStore } from '@reduxjs/toolkit';
import appointmentSlice from './appointmentSlice ';
import customerSlice from './Customer/CustomerRegisterSlice';
import barberSlice from './Barber/BarberRegisterSlice';
import employSlice from '../Store/Barber/EmployeRegisterSlice';
import barberLoginSlice from './Barber/BarberLoginSlice';
import authSlice from './Customer/authSlice';


export const store = configureStore({
  reducer: {
    customer:customerSlice,
    auth:authSlice,
    appointments: appointmentSlice, 
    barber:barberSlice,
    barberLogin: barberLoginSlice, 
    employ:employSlice,
  },
});

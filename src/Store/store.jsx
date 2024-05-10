
import { configureStore } from '@reduxjs/toolkit';
import appointmentSlice from './appointmentSlice ';
import customerSlice from './Customer/CustomerRegisterSlice';
import barberSlice from './Barber/BarberRegisterSlice';
import employSlice from '../Store/Barber/EmployeRegisterSlice';
import barberLoginSlice from './Barber/BarberLoginSlice';



export const store = configureStore({
  reducer: {
    customer:customerSlice,
    appointments: appointmentSlice,
    barber:barberSlice,
    employ:employSlice,
    barberLogin: barberLoginSlice,


  },
});

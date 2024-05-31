
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appointmentSlice from './appointmentSlice ';
import barberSlice from './Barber/BarberRegisterSlice';
import employSlice from '../Store/Barber/EmployeRegisterSlice';
import barberLoginSlice from './Barber/BarberLoginSlice';
import authSlice from './Customer/authSlice';
import CustomerSlice from './Customer/CustomerSlice';
import CustomerRegisterSlice from './Customer/CustomerRegisterSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
  key: 'root',
  storage,
};

const reducer =  combineReducers({
  customerRegister: CustomerRegisterSlice,
  customer:CustomerSlice,
  auth:authSlice,
  appointments: appointmentSlice, 
  barber:barberSlice,
  barberLogin: barberLoginSlice, 
  employ:employSlice,
})
 

const persistedReducer = persistReducer(persistConfig, reducer);





export const store = configureStore({
  reducer:persistedReducer,

 
});


export const persistor = persistStore(store);
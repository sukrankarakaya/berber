import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  appointments: [
    {
      id: 1,
      barberName: "Barberman",
      service: "Haircut",
      date: "2024-04-03",
      time: "14:00",
      status: "Scheduled",
    },
  ],
};

export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      const newAppointment = {
        id: uuidv4(), // Yeni randevu için UUID oluştur
        ...action.payload,
      };
      state.appointments.push(newAppointment);
    },
    removeAppointment: (state, action) => {
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
    },
  },
});

export const { addAppointment, removeAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;

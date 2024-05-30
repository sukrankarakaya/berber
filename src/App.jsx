// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Layout/WelcomePage";
import HomeBarber from "./Components/Barber/HomeBarber";
import Home from "./Components/Customer/Home";
import LoginModal from "./Components/Login/LoginModal";
import RegisterModal from "./Components/Register/RegisterModal";
import AllBarber from "./Components/Customer/AllBarber";
import BarberDetails from "./Components/Customer/BarberDetails";
import CustomerAppointments from "./Components/Customer/CustomerAppointments";
import ProfileCustomer from "./Components/Customer/ProfileCustomer";
import Dashboard from "./Layout/Dashboard";
import HomePageCard from "./Components/Customer/HomePageCard";
import BerberLoginForm from "./Components/Login/BerberLoginForm";
import BarberProfile from "./Components/Barber/BarberProfile";
import BarberSettings from "./Components/Barber/BarberSettings";
import Appointment from "./Components/Barber/Appointment";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="font-quicksand">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/homeberber" element={<HomeBarber />} />
        <Route path="/Profil" element={<BarberProfile />} />
        <Route path="/ayarlar" element={<BarberSettings />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/home/login" element={<LoginModal />} />
        <Route path="/yorumlar" element={<Appointment />} />
        <Route path="/berberlogin" element={<BerberLoginForm />} />
        <Route path="/register" element={<RegisterModal />} />

        <Route element={<PrivateRoute />}>
          <Route element={<Dashboard />}>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<HomePageCard />} />
            <Route path="/home/all" element={<AllBarber />} />
            <Route path="/home/all/:id" element={<BarberDetails />} />
            <Route path="/home/:id" element={<BarberDetails />} />
            <Route path="/myappointment" element={<CustomerAppointments />} />
            <Route path="/profile" element={<ProfileCustomer />} />
          </Route>
        </Route>

        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;

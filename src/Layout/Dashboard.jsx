import React from "react";
import { Link, Outlet, Route, Router, Routes } from "react-router-dom";
import Search from "../Components/Customer/Search";
import HomePageCard from "../Components/Customer/HomePageCard";
import AllBarber from "../Components/Customer/AllBarber";
import Navbar from "../Components/Barber/Navbar";
import Footer from "../Components/Footer";
import Home from "../Components/Customer/Home";
import NavbarCustomer from "../Components/Customer/NavbarCustomer";

const Dashboard = () => {
  return (
    <div className="flex flex-col ">
      <NavbarCustomer/>
     
      
      <Outlet />
       <Footer/>
    </div>
  );
};

export default Dashboard;

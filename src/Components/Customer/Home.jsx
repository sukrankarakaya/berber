import React from "react"; 
import Footer from "../Footer";
import Dashboard from "../../Layout/Dashboard";
import NavbarCustomer from "./NavbarCustomer";
import { Outlet } from "react-router-dom";
import HomePageCard from "./HomePageCard";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <NavbarCustomer />
      <Dashboard/>
      <Footer />

    </div>
  );
};

export default Home;

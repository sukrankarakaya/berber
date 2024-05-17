import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";
import NavbarCustomer from "../Components/Customer/NavbarCustomer";


const Dashboard = () => {
  
  return (
    <div className="flex flex-col bg-light max-h-screen-xl   overflow-y-hidden ">
      <NavbarCustomer />

      <div className=" px-48 max-sm:px-1  ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

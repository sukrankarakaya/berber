import React from "react";
import NavbarCustomer from "./NavbarCustomer";
import Footer from "../Footer";
import AppointmentCard from "./AppointmentCard";

const CustomerAppointments = () => {
  return (
    <div className="flex flex-col bg-light ">
      <NavbarCustomer />

     <div className="flex flex-col mt-28 justify-center ">
     <label htmlFor="" className="text-2xl font-bold px-24 py-4">Randevularım</label>
      
       <div className=" grid grid-cols-2 gap-2 items-center justify-center px-24  bg-light  ">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div></div>

      <div className=" flex flex-col mt-16"></div>
      <Footer />
    </div>
  );
};

export default CustomerAppointments;

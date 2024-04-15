import React from "react";
import NavbarCustomer from "./NavbarCustomer";
import Footer from "../Footer";
import AppointmentCard from "./AppointmentCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";

const CustomerAppointments = () => {
  const appointments = useSelector((state) => state.appointments.appointments);

console.log(appointments);

  return (
    <div className="flex flex-col bg-light ">
      

      <div className="flex flex-col mt-28 justify-center ">
        <label htmlFor="" className="text-2xl font-bold px-24 py-4">
          Randevularım
        </label>

        <div className=" grid grid-cols-2 gap-2 items-center justify-center px-24  bg-light  ">
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment.index} appointment={appointment} />
          ))}

          
        </div>
        <div className="flex flex-row w-full  p-6  justify-end px-36">
          <Link to="/home/all">
            <button className="flex flex-row  justify-center items-center gap-3  text-xl text-slate-50 w-48 h-16 rounded-xl bg-secondary hover:bg-opacity-95 hover:text-slate-100">
              Berberlere Git<RxExternalLink fontSize={25} />
            </button>
          </Link>
        </div>
      </div>

      <div className=" flex flex-col mt-16"></div>
     
    </div>
  );
};

export default CustomerAppointments;

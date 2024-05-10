import React from "react";
import NavbarCustomer from "./NavbarCustomer";
import Footer from "../Footer";
import AppointmentCard from "./AppointmentCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

const CustomerAppointments = () => {
  const appointments = useSelector((state) => state.appointments.appointments);

console.log(appointments);

  return (
    <div className="flex flex-col bg-light ">
      <div className="flex flex-col mt-28 justify-center  ">
        <label htmlFor="" className="text-2xl font-bold  py-4">
          Randevularım
        </label>

        <div className=" grid grid-cols-2 gap-12 items-center justify-center   bg-light  ">
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment.index} appointment={appointment} />
          ))}
        </div>
        <div className="flex flex-row w-full  p-6  justify-end ">
          <Link to="/home/all">
          <button className="bg-transparent text-xl text-gray-700 hover:text-secondary hover:border-b-[1px] hover:border-secondary flex items-center ">
          Berberlere Git
          <BsArrowRight className=" pl-2 w-7 h-7" />
            </button>
          </Link>
        </div>
      </div>

      <div className=" flex flex-col mt-16"></div>
     
    </div>
  );
};

export default CustomerAppointments;

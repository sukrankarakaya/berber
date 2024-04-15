import React from "react";
import Footer from "../Footer";
import Search from "./Search";
import AllBarberCard from "./AllBarberCard";
import NavbarCustomer from "./NavbarCustomer";

const AllBarber = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-8 py-28 min-h-screen bg-light items-center">
          <Search />
          <div className="">
            <AllBarberCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBarber;

import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Search from "./Search";
import AllBarberCard from "./AllBarberCard";

const AllBarber = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col ">
        <div className="flex flex-col gap-8 py-28 min-h-screen bg-light items-center">
          <Search />
          <div className="">
            <AllBarberCard/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBarber;

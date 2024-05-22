import React from 'react';
import Navbar from "./Navbar";
import Footer from "../Footer";
 import Employe from '../Barber/Employe';

const BarberSettings = () => {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navbar />

      <div className="flex flex-col  pt-24 pb-4">
        <div className=" w-full pt-8 ">
       <Employe /> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BarberSettings;

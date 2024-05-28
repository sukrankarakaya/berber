import React from 'react';
import Navbar from "./Navbar";
import Employe from '../Barber/Employe';
import Footer from "../Footer"
const BarberSettings = () => {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navbar />

      <div className="flex-1 pt-20 ">
        <Employe />
      </div>
      <div className='w-full'>
        <Footer/>
      </div>
    </div>
  );
};

export default BarberSettings;

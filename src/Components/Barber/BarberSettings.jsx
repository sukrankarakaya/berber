import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "../Footer";
import { BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import allBarber from "../../mock/allBarber.json";
import Services from './Services';
import Personelcard from './Personelcard';

const BarberSettings = () => {
  // const [barberData, setBarberData] = useState(null);

  // useEffect(() => {
  //   // Bu kısımda veritabanından berber verilerini getirecek bir fonksiyon yazmanız gerekmektedir.
  //   // Şu anlık varsayılan olarak mock verileri kullanıyorum.
  //   setBarberData(allBarber[0]); 
  // }, []);

  return (
    <div className='bg-light min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow flex justify-center items-center my-8 bg-white'>
        <div className='grid grid-cols-1 mt-12 md:grid-cols-2 gap-14'>
          {/* <Personelcard />
          <Services /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BarberSettings;

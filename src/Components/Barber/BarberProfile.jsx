import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "../Footer";
import { BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import allBarber from "../../mock/allBarber.json";
import Services from './Services';
import Personelcard from './Personelcard';

const BarberProfile = () => {
  const [barberData, setBarberData] = useState(null);

  useEffect(() => {
    // Bu kısımda veritabanından berber verilerini getirecek bir fonksiyon yazmanız gerekmektedir.
    // Şu anlık varsayılan olarak mock verileri kullanıyorum.
    setBarberData(allBarber[0]); 
  }, []);

  return (
    <div className='bg-light min-h-screen w-full flex flex-col'>
      <Navbar />
      <div className='pt-24 pb-8 px-4'>
        {barberData && (
          <div className=' mx-auto'>
            <div className='flex flex-row justify-between '>
              <Personelcard />
              <Services />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BarberProfile;

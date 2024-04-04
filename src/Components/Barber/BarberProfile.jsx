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
    setBarberData(allBarber[0]); // Sadece bir berber verisi getirdiğinizi varsayıyorum.
  }, []);

  return (
    <div className='bg-light min-h-screen'>
      <Navbar />
      <div className='pt-24 pb-8 px-4'>
        {barberData && (
          <div className='max-w-4xl mx-auto border-2 border-black bg-white rounded-lg overflow-hidden shadow-lg'>
            <img src={barberData.photo} alt={barberData.name} className='w-full h-auto' />
            <div className='px-6 py-4 '>
              <h1 className='text-3xl font-bold mb-2'>{barberData.name}</h1>
              <div className='flex items-center mb-4'>
                <BsFillStarFill className='text-yellow-600' />
                <p className='ml-2'>{barberData.rating}</p>
              </div>
              <div className='flex items-center'>
                <FaMapMarkerAlt className='text-red-600' />
                <p className='ml-2'>{barberData.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='max-w-4xl mx-auto justify-around flex flex-wrap pb-10'>
        <div className='flex justify-between gap-8 w-full'>
          <div className='w-1/2'>
            <Personelcard />
          </div>
          <div className='w-1/2'>
            <Services />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BarberProfile;

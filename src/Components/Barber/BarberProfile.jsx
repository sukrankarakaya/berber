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
    <div className='bg-light min-h-screen flex flex-col'>
      <Navbar />
      <div className='pt-24 pb-8 px-4'>
        {barberData && (
          <div className=' mx-auto'>
            {/* berber için */}
            <div className='grid grid-cols-3 gap-8'>
              <div className='bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg'>
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

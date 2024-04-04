import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "../Footer";
import { BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import allBarber from "../../mock/allBarber.json";

const BarberProfile = () => {
  const [barberData, setBarberData] = useState(null);

  useEffect(() => {
    // You should write a function here to fetch barber data from the database
    // For now, I'm using mock data as default
    setBarberData(allBarber[0]); // Assuming you're fetching only one barber's data
  }, []);

  return (
    <div className='bg-light w-screen h-auto flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div className='pt-40 max-w-3xl mx-auto'>
        {barberData && (
          <div className='flex flex-row max-w-3xl border-4 border-black rounded-xl pt'>
            <div className='w-2/4 float-left'>
              <img src={`${barberData.photo}`} alt="" />
              
            </div>
            <div className='w-2/4 float-right text-4xl flex flex-col items-center pt-10'>
              <h1>{barberData.name}</h1>
              <div className='flex flex-row pt-10'>
                <BsFillStarFill className="text-yellow-600 " />
                <p className="">{barberData.rating}</p>
              </div>
              <div className="flex flex-row pt-10">
                <FaMapMarkerAlt className="text-red-600" />
                <p>{barberData.location}</p>
              </div>
            </div>
          </div>
        )}
        {/* orta-alt */}
        <div>
          
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default BarberProfile;

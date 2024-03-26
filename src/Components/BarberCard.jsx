import React from "react";
import berber2 from "/public/Image/barber2.jpg";
import { BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";




const BarberCard = () => {
  return (

    
    <div className="flex flex-row p-2  rounded-xl w-[550px] h-40 border-2 border-secondary hover:bg-[#DAD5CD] ">
      <div className=" ">
        <img src={berber2} alt="" className="w-32 h-full rounded-xl" />
      </div>
      <div className="flex flex-col gap-3 pl-5">
        <h1 className="font-bold text-xl ">
          Alana Barbershop - Haircut massage & Spa
        </h1>
        <div className="flex  flex-row gap-1 items-center">
          <FaMapMarkerAlt />
          <p className=" ">Banguntapan (5 km)</p>
        </div>

        <div className="flex  flex-row gap-1 items-center">
          <BsFillStarFill className="text-yellow-600" />
          <p className=" ">4.5</p>
        </div>
      </div>
    </div>
  );
};

export default BarberCard;

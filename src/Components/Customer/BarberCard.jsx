import React from "react";
import berber2 from "/public/Image/barber2.jpg";
import { BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

import bestBarber from "../../mock/bestbarbers.json";

const BarberCard = () => {
  return (
    <div className=" grid grid-cols-2 gap-4 gap-x-12 ">
      {bestBarber.map((barber) => (
        <div className="flex flex-row p-2  rounded-xl w-[480px] h-36 border border-secondary text-gray-700 hover:bg-[#d8d5d2] hover:border-2 ">
          <div className=" ">
            <img src={berber2} alt="" className="w-32 h-full rounded-xl" />
          </div>
          <div className="flex flex-col gap-2 pl-5">
            <h1 className="font-bold text-xl ">{barber.name}</h1>
            <div className="flex  flex-row gap-1 items-center">
              <FaMapMarkerAlt />
              <p className=" "> {barber.location}</p>
            </div>

            <div className="flex  flex-row gap-1 items-center">
              <BsFillStarFill className="text-yellow-600" />
              <p className=" "> {barber.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarberCard;

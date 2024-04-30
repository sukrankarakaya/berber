import React from "react";
import BarberCard from "./BarberCard";
import BestBarbers from "./BestBarbers";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";
import Search from "./Search";
import { BsArrowRight } from "react-icons/bs";

const HomePageCard = () => {
  return (

    <div className="flex flex-col gap-8 py-28 min-h-screen bg-light items-center">
      <div className=" flex justify-start w-full">
      <Search />
       
      </div>
    <div className="felx justify-center items-center">
      <div className="flex flex-row gap-12">
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="" className="text-2xl">
            En Yakın Berber Dükkanları
          </label>
          <BarberCard />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start w-full py-8 ">
        <label htmlFor="" className="text-2xl">
          En Popüler Berberler
        </label>
        <div className="flex flex-row items-center">
          <BestBarbers />
        </div>
      </div>
      <div className="flex flex-row gap-16">
        <div className="flex flex-col gap-4 w-full left-0">
          <label htmlFor="" className="text-2xl">
            Berberler
          </label>
          <BarberCard />
        </div>
      </div>
      <div className="flex flex-row  p-6 px-12  float-end">
        <Link to="/home/all">
          <button className="bg-transparent text-xl text-gray-700 hover:text-secondary hover:border-b-[1px] hover:border-secondary flex items-center ">
            Hepsini Gör 
          <BsArrowRight className=" pl-2 w-7 h-7" />
          </button>
        </Link>
      </div>
    </div>
  
    </div>
  );
};

export default HomePageCard;

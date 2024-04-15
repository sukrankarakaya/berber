import React from "react";
import BarberCard from "./BarberCard";
import BestBarbers from "./BestBarbers";
import { RxExternalLink } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import Search from "./Search";

const HomePageCard = () => {
  return (

    <div className="flex flex-col gap-8 py-28 min-h-screen bg-light items-center">
      <Search />
       
    <div className="felx justify-center items-center w-[1200px]  ">
      <div className="flex flex-row gap-16">
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="" className="text-2xl">
            En Yakın Berber Dükkanları
          </label>
          <BarberCard />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start ">
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
      <div className="flex flex-row  p-6  float-end">
        <Link to="/home/all">
          <button className="flex flex-row  justify-center items-center gap-3 text-xl text-slate-50 w-48 h-16 rounded-xl bg-secondary hover:bg-opacity-95 hover:text-slate-100">
            Hepsini Gör <RxExternalLink fontSize={25} />
          </button>
        </Link>
      </div>
    </div>
  
    </div>
  );
};

export default HomePageCard;

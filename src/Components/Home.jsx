import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BarberCard from "./BarberCard";

import BestBarbers from "./BestBarbers";
import { RxExternalLink } from "react-icons/rx";
import Search from "./Search";

const Home = () => {


  return (
    <div className="flex flex-col ">
      <Navbar />{" "}
      <div className="flex flex-col gap-8  py-28 min-h-screen bg-light items-center ">
       <Search/>

        <div className="flex flex-row gap-16">
          <div className=" flex flex-col gap-4 w-full ">
            <label htmlFor="" className=" text-2xl">
              En Yakın Berber Dükkanları
            </label>

            <BarberCard />
          </div>
        </div>

        <div className=" flex flex-col gap-4   items-start">
          <label htmlFor="" className=" text-2xl ">
            En Popüler Berberler
          </label>
          <div className="flex flex-row items-center ">
            <BestBarbers />
          </div>
        </div>

        <div className="flex flex-row gap-16">
          <div className=" flex flex-col gap-4 w-full  left-0 ">
            <label htmlFor="" className=" text-2xl">
              Berbeler
            </label>

            <BarberCard />
          </div>
        </div>




        <div className="flex"> <button className=" flex flex-row justify-center items-center gap-3 text-xl text-slate-50 w-48 h-16 rounded-xl bg-secondary hover:bg-opacity-95  hover:text-slate-100">Hepsini Gör <RxExternalLink fontSize={25} /> </button></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

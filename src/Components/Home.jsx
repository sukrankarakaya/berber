import React from "react";
import BarberCard from "./BarberCard";
const Home = () => {
  return (
    <div className="bg-light p-8 min-h-screen">
      <div className="berber-cards flex flex-col justify-end  pl-50">
        <div className=" grid grid-cols-2 gap-4 p-2 justify-center items-center ">
        <BarberCard />
        <BarberCard />
        <BarberCard />
        <BarberCard />
        <BarberCard />
        <BarberCard />
     

        </div>
       
      </div>
    </div>
  );
};

export default Home;

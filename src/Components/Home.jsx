<<<<<<< HEAD
import React from 'react'

const Home = () => {
  return (
    <div>
      
    </div>
  )
}
=======
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
>>>>>>> 2b462fca2554bf76049ca30553bd131725019d1b

export default Home

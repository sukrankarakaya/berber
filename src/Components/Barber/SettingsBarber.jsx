import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import BarberStg from "../Barber/BarberStg";

const SettingsBarber = () => {
    return (
      <div className="bg-light">
        <div>
          <Navbar />
        </div>
        <div className="flex">
            <h1 className="text-black">dsfsdfdsf</h1>
         <BarberStg/>
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    );
  };
  
  export default SettingsBarber;
  
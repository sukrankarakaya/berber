// HomeBarber.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import Berberdashboard from './Barberdashboard';


const HomeBarber = () => {
   
  return (
    <div className="bg-light">
      <div>
        <Navbar />
      </div>
      <div className="flex pt-2 ">
        <div className="flex-grow pb-10">
          <Berberdashboard />
          
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomeBarber;

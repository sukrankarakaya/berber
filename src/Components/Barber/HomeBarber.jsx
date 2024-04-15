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
      <div className="flex">
        <div className="flex-grow">
          <Berberdashboard />
        </div>
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default HomeBarber;

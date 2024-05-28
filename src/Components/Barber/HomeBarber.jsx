import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import Berberdashboard from "./Barberdashboard";

const HomeBarber = () => {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navbar />
      <div className="flex-grow pt-2">
        <Berberdashboard />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default HomeBarber;

import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Berberdashboard from './Barberdashboard';
const HomeBarber = () => {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
  <div>
    {/* <img src={berber} alt="" /> */}
  <Berberdashboard/>
  </div>
  <div>
  <Footer />
  </div>
   
    </div>
  );
};

export default HomeBarber;

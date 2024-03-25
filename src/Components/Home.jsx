import React from "react";
import Navbar from "./Navbar";
import berber from '/public/Image/berber.jpg'
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
   <img src={berber} alt="" className="" />
   <img src={berber} alt="" className="" />
   <img src={berber} alt="" className="" />
   <img src={berber} alt="" className="" />
   <img src={berber} alt="" className="" />
   <img src={berber} alt="" className="" />
   <img src={berber} alt="" className="" />
   <img src={berber} alt="" className="" />
   <Footer />
       {/* <div className="">
        <Navbar />
      </div>
      <div className="">
        <Dashboard />
      </div>
      <div className="">
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "./Navbar";
import berber from '/public/Image/berber.jpg'
import Footer from "./Footer";
import Berberdashboard from './Berberdashboard';
const Home = () => {
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

export default Home;

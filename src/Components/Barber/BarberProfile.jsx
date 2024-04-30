import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import BarberStg from "./BarberStg";
import Comment from "./Comment";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const BarberProfile = () => {
    return (
      <div className="bg-light">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col ">
         <BarberStg/>
         <div className="mx-44 bg-white w-[1050px] rounded-b-lg">
          <div className="flex flex-row">  
          <Comment/>
          <Comment/>
          </div>
          <div>
          <div className="flex flex-row  p-6 mr-4  float-end">
        <Link to="/yorumlar">
          <button className="flex flex-row  justify-center items-center gap-3 text-xl text-slate-50 w-48 h-16 rounded-xl bg-secondary hover:bg-opacity-95 hover:text-slate-100">
            Hepsini Gör <RxExternalLink fontSize={25} />
          </button>
        </Link>
      </div>
          </div>
 
         </div>
         
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    );
  };
  
  export default BarberProfile;
  
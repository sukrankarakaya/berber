import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import BarberStg from "./BarberStg";
import Comment from "./Comment";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const BarberProfile = () => {
  return (
    <div className="bg-light min-h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-around">
        <div className="max-w-screen-xl w-full">
          <BarberStg />
          <div className="flex flex-row px-4 gap-8 pt-4 bg-white pb-4 rounded-b-lg">
            <Comment />
            <Comment />
          </div>
          <div className="p-6 md:mr-4 lg:mr-8 flex justify-end">
            <Link to="/yorumlar">
              <button className="flex justify-center items-center gap-3 text-xl text-slate-50 w-48 h-16 rounded-xl bg-secondary hover:bg-opacity-95 hover:text-slate-100">
                Hepsini Gör <RxExternalLink fontSize={25} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BarberProfile;

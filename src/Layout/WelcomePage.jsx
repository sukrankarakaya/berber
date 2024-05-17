import React, { useState } from "react";
import WelcomeImg from "/public/Image/berber.jpg";
import WelcomeImgSM from "/public/Image/barber3.jpg";

import { Link } from "react-router-dom";
import LoginModal from "../Components/Login/LoginModal";
import RegisterModal from "../Components/Register/RegisterModal";

const WelcomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showREgisterModal, setShowRegisterModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleRegisterCloseModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div className="">
      <div className="relative w-full h-screen  bg-custom-bg bg-cover bg-no-repeat bg-center ">
        <img
          src={WelcomeImg}
          alt="Arka Plan Resmi"
          className="w-full h-screen  max-sm:hidden"
        />
        <img
          src={WelcomeImgSM}
          alt="Arka Plan Resmi Küçük Ekran"
          className="w-full h-screen hidden max-sm:flex"
        />

        <div className="  w-full h-screen  bg-transparent top-0 absolute bg-gradient-to-t from-black to-transparent ">
          <div className="flex flex-col  justify-center items-center ">
            <div className=" absolute  flex flex-col  top-72 items-center ">
              <div className="flex flex-col w-full gap-8 items-center ">
                <h1 className=" text-5xl h-20 max-sm:text-3xl  font-extrabold  leading-normal text-white  font-zen">
                  <Link to="/home">Randevunuzu saniyeler içinde alın.</Link>
                </h1>
                <button
                  onClick={handleLoginClick}
                  className=" w-96 h-16 border bg-black text-white rounded-[50px] hover:bg-black bg-opacity-85 "
                >
                  Giriş Yap
                </button>

                <button
                  onClick={handleRegisterClick}
                  className=" w-96 h-16 border border-white  bg-white text-black rounded-[50px] hover:bg-white bg-opacity-75 "
                >
                  Kayıt Ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      {showREgisterModal && (
        <RegisterModal onClose={handleRegisterCloseModal} />
      )}
    </div>
  );
};

export default WelcomePage;

import React, { useState } from "react";
import WelcomeImg from "/public/Image/berber.jpg";
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
    <div>
      <div className="relative w-full h-screen  bg-custom-bg bg-cover bg-no-repeat bg-center ">
        <img
          src={WelcomeImg}
          alt="Arka Plan Resmi"
          className="w-full h-screen"
        />

        <div className="  w-full h-screen  bg-transparent top-0 absolute bg-gradient-to-t from-black to-transparent ">
          <div className="flex flex-col  justify-center items-center ">
            <div className=" absolute  flex flex-col  top-72 items-center ">
              {/* <img src={Logo} alt="" className="w-24 h-24 " /> */}
              <div className="flex flex-col w-[800px] gap-4 items-center ">
                <h1 className=" text-5xl  leading-normal text-white">
                  Randevunuzu saniyeler içinde ayırtın.
                </h1>
                <button onClick={handleLoginClick} className=" w-96 h-16 border bg-black text-white rounded-[50px] hover:bg-black bg-opacity-85 ">
                  Giriş Yap
                </button>

                <button onClick={handleRegisterClick} className=" w-96 h-16 border border-white  bg-black text-white rounded-[50px] hover:bg-black bg-opacity-75 ">
                  Kayıt Ol
                </button>
               
              </div>
           
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      {showREgisterModal && <RegisterModal onClose={handleRegisterCloseModal} />}



    </div>
  );
};

export default WelcomePage;

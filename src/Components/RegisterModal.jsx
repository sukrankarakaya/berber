import React, { useState } from "react";
import WelcomeImg from "/public/Image/berber.jpg";
import classNames from "classnames";
import BarberRegisterForm from "./BarberRegisterForm";
import CustomerRegisterForm from "./CustomerRegisterForm";

const RegisterModal = () => {
  const [berber, setBerber] = useState(false);

  return (
    <div className="absolute top-0 flex flex-col w-full h-full justify-center items-end bg-black bg-opacity-55 left-0">
      <div className="absolute w-full h-screen  bg-custom-bg bg-cover bg-no-repeat bg-center bg-black bg-opacity-55  ">
        <img
          src={WelcomeImg}
          alt="Arka Plan Resmi"
          className="w-full h-screen"
        />
      </div>

      <div className=" flex flex-col gap-8 z-10 w-[600px] h-[700px] bg-light  rounded-2xl items-center pt-10  right-6 mr-8 ">
        <h1 className=" text-3xl top-0 text-secondary py-5 ">Kayıt Ol</h1>
        <div className="flex flex-col justify-center  items-center   gap-4   w-[400px] h-[300px]  ">
          <div className=" w-80 ">
            <div className=" flex flex-row py-10 gap-5 text-lg text-secondary ">
              <button
                onClick={() => {
                  setBerber(false);
                }}
                className={classNames(
                  "w-40 flex  items-center justify-center hover:opacity-80",
                  {
                    "font-bold border-b-2 border-secondary hover:opacity-100": berber === false,
                  }
                )}
              >
                Müşteri
              </button>
              <button
                onClick={() => {
                  setBerber(true);
                }}
                className={classNames(
                  "w-40 flex items-center justify-center hover:opacity-80",
                  {
                    "font-bold border-b-2 border-secondary hover:opacity-100": berber === true,
                  }
                )}
              >
                Berber
              </button>
            </div>
          </div>
          <div className="py-5">

            
          {berber ? <BarberRegisterForm /> : <CustomerRegisterForm />}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterModal;

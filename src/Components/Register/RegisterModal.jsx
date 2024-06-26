import React, { useState } from "react";
import WelcomeImg from "/public/Image/berber.jpg";
import classNames from "classnames";
import CustomerRegisterForm from "./CustomerRegisterForm";
import BarberRegisterForm from "./BarberRegisterForm";

const RegisterModal = () => {
  const [berber, setBerber] = useState(false);

  return (
    <div className="absolute top-0 flex flex-col w-full h-full justify-center items-center bg-black bg-opacity-55 left-0">
      <div className="absolute w-full h-screen  bg-custom-bg bg-cover bg-no-repeat bg-center bg-black bg-opacity-55 max-sm:bg-light  ">
        <img
          src={WelcomeImg}
          alt="Arka Plan Resmi"
          className="w-full h-screen max-sm:hidden"
        />
      </div>

      <div className=" flex flex-col gap-16 z-10 w-[650px] h-[700px] max-sm:h-full max-sm:w-full bg-light  rounded-2xl items-center pt-8  right-6 mr-8 ">
        <h1 className=" text-3xl top-0 text-secondary pt-7">Kayıt Ol</h1>
        <div className="flex flex-col justify-center  items-center   gap-4   w-[400px] h-[300px]  ">
          <div className=" w-80 ">
            <div className=" flex flex-row  ">
              <button
                onClick={() => {
                  setBerber(false);
                }}
                className={classNames(
                  "w-40 h-10 flex  items-center justify-center text-secondary ",
                  {
                    "font-bold border-b-2 border-secondary": berber === false,
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
                  "w-40 flex items-center justify-center text-secondary ",
                  {
                    "font-bold border-b-2 border-secondary": berber === true,
                  }
                )}
              >
                Berber
              </button>
            </div>
          </div>
          <div className=" flex mt-16 ">
            {berber ?  <BarberRegisterForm />:<CustomerRegisterForm /> }
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;

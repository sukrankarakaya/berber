import React, { useState } from "react";
import WelcomeImg from "/public/Image/berber.jpg";
import classNames from "classnames";
import RegisterForm from "./RegisterForm";

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

      <div className=" flex flex-col gap-8 z-10 w-[500px] h-[600px] bg-light  rounded-2xl items-center pt-16  right-6 mr-8 ">
        <h1 className=" text-3xl top-0 text-secondary pt-10">Kayıt Ol</h1>
        <div className="flex flex-col justify-center  items-center   gap-3   w-[400px] h-[300px]  ">
          <div className=" w-80 ">
            <div className=" flex flex-row  ">
              <button
                onClick={() => {
                  setBerber(false);
                }}
                className={classNames(
                  "w-40 flex  items-center justify-center text-secondary ",
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
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
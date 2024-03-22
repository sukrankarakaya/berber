import React from "react";

import WelcomeImg from "/public/Image/berber.jpg";
const LoginModal = () => {
  return (
    <div className="absolute top-0 flex flex-col w-full h-full justify-center items-end bg-black bg-opacity-55 ">

        
<div className="absolute w-full h-screen  bg-custom-bg bg-cover bg-no-repeat bg-center bg-black bg-opacity-55  ">
        <img
          src={WelcomeImg}
          alt="Arka Plan Resmi"
          className="w-full h-screen"
        />
        </div>


      <div className=" flex flex-col gap-4 z-10 w-[500px] h-[600px] bg-light  rounded-2xl items-center pt-16  ">
        <h1 className=" text-3xl top-0 text-secondary ">Giriş Yap</h1>
        <div className="flex flex-col justify-center  items-center   gap-3   w-[400px] h-[300px]  ">
          <div className=" w-80 ">
            <div className=" flex flex-row  ">
              <label htmlFor="" className="w-40 flex items-center justify-center border-b-4 border-secondary">
                Müşteri
              </label>
              <label htmlFor="" className="w-40 flex items-center justify-center ">
                Berber
              </label>
            </div>
          </div>

          <div className="flex flex-col p-3  ">
            <form
              action="submit"
              className=" flex flex-col gap-4 w-full items-center justify-center   "
            >
              <input
                type="text"
                className=" w-[300px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary  bg-transparent "
                placeholder="Kullanıcı Adı"
              />
              <input
                type="password"
                className=" w-[300px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary  bg-transparent"
                placeholder="Şifre"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="rememberMe" className="h-5 w-5" />
                <label htmlFor="rememberMe" className="text-base">
                  Beni Hatırla
                </label>
              </div>

              <button className=" w-[300px] h-12 rounded-[50px]  bg-secondary text-light ">
                Gİriş Yap
              </button>
            </form>
            
          </div>
          <label htmlFor="" className="hover:border-b  "> Şifremi Unuttum? </label>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

import React, { useState } from "react";
import RegisterModal from "./RegisterModal";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <div className="flex flex-col justify-center  items-center   gap-3   w-[400px] h-[300px]">
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
        <label htmlFor="" className="hover:border-b  flex">
          Şifremi Unuttum?{" "}
          <Link to="/register">
            <button className=" text-secondary pl-3 "> Kayıt Ol</button>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default LoginForm;

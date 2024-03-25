import React from "react";
import { Formik, Form, Field, useFormik } from "formik";

import * as Yup from "yup";
import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";

const CustomerLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Kullanıcı adı gerekli"),
      password: Yup.string().required("Şifre gerekli"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div className="flex flex-col justify-center  items-center   gap-3   w-[400px] h-[300px]">
        <div className="flex flex-col p-3  ">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 w-full items-center justify-center z-20"
          >
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                placeholder="Kullanıcı Adı"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                  <IoMdArrowDropup className=" text-red-500  " />
                  <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                    {formik.errors.username}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-2">
                <input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Şifre"
                />{" "}
                {formik.touched.password && formik.errors.password ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.password}
                    </div>
                  </div>
                ) : null}
              </div>

              <button
            type="submit"
            className="w-[300px] h-12 rounded-[50px] bg-secondary text-light"
          >
            Giriş Yap
          </button>

          </form>
        </div>
        <label htmlFor="" className="hover:border-b  flex">
          Şifremi Unuttum?{" "}
          <Link to="/register">
            <button className="text-secondary pl-3"> Kayıt Ol</button>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default CustomerLoginForm;

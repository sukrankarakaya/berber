import React, { useEffect, useState } from "react";
import { Formik, Form, Field, useFormik } from "formik";

import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import { useDispatch } from "react-redux";
import {loginCustomer } from "../../Store/Customer/authSlice";
import { getCustomers } from "../../Store/Customer/CustomerRegisterSlice";

const CustomerLoginForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const customers = dispatch(getCustomers());
  }, [dispatch]);

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Kullanıcı adı gerekli"),
      password: Yup.string().required("Şifre gerekli"),
    }),
    onSubmit: (values) => {
      try {
        const response = dispatch(loginCustomer(values));
        console.log("Logged in successfully:", response);
        console.log("Token:", response.data.token);
        // navigate("/home");
      } catch (error) {
        console.error("Login failed:", error.message);
        setError("Kullanıcı adı veya şifre hatalı");
      }
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
                name="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                placeholder="Kullanıcı Adı"
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                  <IoMdArrowDropup className=" text-red-500  " />
                  <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                    {formik.errors.userName}
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
              className="w-full h-12 rounded-[50px] bg-secondary text-light"
            >
              Giriş Yap
            </button>
          </form>
        </div>
        <label htmlFor="" className="hover:border-b  flex">
          Şifremi Unuttum?
          <Link to="/register">
            <button className="text-secondary pl-3"> Kayıt Ol</button>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default CustomerLoginForm;

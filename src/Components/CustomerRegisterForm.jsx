import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosArrowUp, IoMdArrowDropup } from "react-icons/io";

const CustomerRegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
        city: '',
        district: '',
        street: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Kullanıcı adı gerekli"),
      phone: Yup.string().required("Telefon numarası gerekli"),
      email: Yup.string()
        .email("Geçersiz email adresi")
        .required("Email gerekli"),
      password: Yup.string().required("Şifre gerekli"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
        .required("Şifrenin tekrarı gerekli"),
      city: Yup.string().required("Şehir gerekli"),
      district: Yup.string().required("İlçe gerekli"),
      street: Yup.string().required("Sokak/Cadde gerekli"),
      buildingNumber: Yup.string().required("Bina numarası gerekli"),
      doorNumber: Yup.string().required("Kat/Kapı numarası gerekli"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex flex-col justify-center  items-center gap-3  w-[400px] h-[300px]">
      <div className="flex flex-col p-3 ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 w-full items-center justify-center z-20"
        >
          <div className="flex flex-row gap-4 py-5">
            <div className="flex flex-col gap-5">
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
                  type="text"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="E-Mail"
                />{" "}
                {formik.touched.email && formik.errors.email ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.email}
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
              <div className="flex flex-col gap-2">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Şifre Tekrar"
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.confirmPassword}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Telefon"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-600 " />
                    <div className="absolute h-6 mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.phone}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Şehir"
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.city}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="district"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.district}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="İlçe"
                />
                {formik.touched.district && formik.errors.district ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.district}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="street"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Sokak/Cad"
                />
                {formik.touched.street && formik.errors.street ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.street}
                    </div>
                  </div>
                ) : null}
              </div>
             
            </div>
          </div>
          <button
            type="submit"
            className="w-[300px] h-12 rounded-[50px] bg-secondary text-light"
          >
            Kayıt Ol
          </button>
        </form>

      </div>

      <label htmlFor="" className="hover:border-b  flex">
        Zaten hesabım var.
        <Link to="/login">
          <button className=" text-secondary pl-3 "> Giriş Yap</button>
        </Link>
      </label>
    </div>
  );
};

export default CustomerRegisterForm;

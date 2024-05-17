import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoMdArrowDropup } from "react-icons/io";
import { useDispatch } from "react-redux";
import { registerCustomer } from "../../Store/Customer/CustomerRegisterSlice";

const CustomerRegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
      userName: "",
      name: "",
      lastName: "",
      age: "",
      city: "",
      district: "",
      street: "",
      phone: "",
      mail: "",
      password: "",
      confirmPassword: "",
      gender: false,
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Kullanıcı adı gerekli"),
      name: Yup.string().required("Adiniz gerekli"),
      lastName: Yup.string().required("Soyadınız gerekli"),
      age: Yup.string().required("Yaşınız gerekli"),
      phone: Yup.string().required("Telefon numarası gerekli"),
      mail: Yup.string().email("Geçersiz mail adresi").required("mail gerekli"),
      password: Yup.string().required("Şifre gerekli"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
        .required("Şifrenin tekrarı gerekli"),
      city: Yup.string().required("Şehir gerekli"),
      district: Yup.string().required("İlçe gerekli"),
      street: Yup.string().required("Sokak/Cadde gerekli"),
    }),
    onSubmit: async (values) => {
      const isFemale = values.gender === "true"; // "true" ise true, değilse false
    
      try {
        console.log(values);
        // Kullanıcıyı kaydetmek için dispatch kullanımı (örneğin, Redux'a gönderme)
        await dispatch(registerCustomer({ ...values, gender: isFemale }));
    
        navigate("/login");
      } catch (error) {
        console.error("Kayıt yapılamadı:", error.message);
      }
    }
  });

  return (
    <div className="flex flex-col justify-center  items-center gap-3  w-[400px] h-[300px] max-sm:w-full ">
      <div className="flex flex-col p-3  max-sm:ml-8">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-2 w-full items-center justify-center z-10"
        >
          <div className="flex flex-row gap-4 py-1">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary-50 border-2 border-secondary bg-transparent"
                  placeholder="İsim"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.name}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary-50 border-2 border-secondary bg-transparent"
                  placeholder="Soyisim"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.lastName}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="userName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary-50 border-2 border-secondary bg-transparent"
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
                  type="text"
                  name="mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mail}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="E-Mail"
                />{" "}
                {formik.touched.mail && formik.errors.mail ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.mail}
                    </div>
                  </div>
                ) : null}
              </div>

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
                  name="age"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.age}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Yaş"
                />
                {formik.touched.age && formik.errors.age ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.age}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-2">
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

              <div>
                <label>Cinsiyet Seçiniz:</label>
                <div className="flex items-center gap-4">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value={true} // 'Kadın' seçeneği için true değeri
                      checked={formik.values.gender === "true"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mr-2"
                    />
                    Kadın
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value={false} // 'Erkek' seçeneği için false değeri
                      checked={formik.values.gender === "false"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mr-2"
                    />
                    Erkek
                  </label>
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                  <div>{formik.errors.gender}</div>
                ) : null}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-[50px] bg-secondary text-light"
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

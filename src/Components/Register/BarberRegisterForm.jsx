import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoMdArrowDropup } from "react-icons/io";
import {  getBarbers, registerBarber } from "../../Store/Barber/BarberRegisterSlice";



 



const BarberRegisterForm = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.barber // veya state.customerSlice, reducer'ınıza bağlı olarak
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const response = dispatch(getBarbers());
    response.then((action) => {
      const users = action.payload; // payload'daki kullanıcı verilerine erişmek
      console.log(users); // Tüm kullanıcı verilerini konsola yazdır
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      username: "",
    city: "",
    district: "",
    street: "",
    phone: "",
    mail: "",
    password: "",
    confirmPassword: "",
    WorkPlaceName: "",
    taxNo: "",
    doorNumber: "",
    buildingNo: "",
    name: "", 
    lastname: "", 
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Kullanıcı adı zorunludur"),
      name: Yup.string().required("isim zorunludur"),
      lastname: Yup.string().required("Soyisim  zorunludur"),
      mail: Yup.string().email("Geçerli bir e-posta adresi girin").required("E-posta zorunludur"),
      taxNo: Yup.string().required("Vergi numarası zorunludur"),
      buildingNo: Yup.string().required("Bina numarası zorunludur"),
      city: Yup.string().required("Şehir zorunludur"),
      district: Yup.string().required("İlçe zorunludur"),
      street: Yup.string().required("Sokak zorunludur"),
      phone: Yup.string().required("Telefon zorunludur"),
      password: Yup.string().required("Şifre zorunludur"),
      confirmPassword: Yup.string().required("Şifre tekrarı zorunludur"),
      WorkPlaceName: Yup.string().required("Dükkan ismi zorunludur"),
      doorNumber: Yup.string().required("Kapı numarası zorunludur"),

    }),

    onSubmit:  (value) => {
      try {
         dispatch(registerBarber(value));
        console.log("Berber başarıyla kaydedildi!");
        navigate("/login");
      } catch (hata) {
        console.error("Berber kaydedilirken bir hata oluştu:", hata);
      }
    },
  });

  return (
    <div className="flex flex-col justify-center  items-center gap-3 mt-8 w-[400px] h-[300px]">
      <div className="flex flex-col p-3 ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 w-full items-center justify-center z-20"
        >
          <div className="flex flex-row gap-4 py-5">
            <div className="flex flex-col gap-2">
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
                  name="WorkPlaceName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.WorkPlaceName}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="İşletme İsmi"
                />
                {formik.touched.WorkPlaceName && formik.errors.WorkPlaceName ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-600 " />
                    <div className="absolute h-6 mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.WorkPlaceName}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className=" flex flex-col gap-2">
              <input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="isim"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-600 " />
                    <div className="absolute h-6 mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.name}
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

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="taxNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.taxNo}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Vergi Numarası"
                />
                {formik.touched.taxNo && formik.errors.taxNo ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.taxNo}
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
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="buildingNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.buildingNo}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Bina No"
                />
                {formik.touched.buildingNo && formik.errors.buildingNo ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.buildingNo}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className=" flex flex-col gap-2">
              <input
                  type="text"
                  name="lastname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Soyisim"
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-600 " />
                    <div className="absolute h-6 mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.lastname}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="doorNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.doorNumber}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Kat/Kapı No"
                />
               
                {formik.touched.doorNumber && formik.errors.doorNumber ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.doorNumber}
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
        <Link to="/berberlogin">
          <button className=" text-secondary pl-3 "> Giriş Yap</button>
        </Link>
      </label>
    </div>
  );
};

export default BarberRegisterForm;

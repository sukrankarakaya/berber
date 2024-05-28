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
      UserName: "",
    City: "",
    District: "",
    Street: "",
    Phone: "",
    Mail: "",
    Password: "",
    confirmPassword: "",
    WorkPlaceName: "",
    TaxNo: "",
    DoorNumber: "",
    BuildingNo: "",
    Name: "", 
    LastName: "",
   
    },
    validationSchema: Yup.object({
      UserName: Yup.string().required("Kullanıcı adı zorunludur"),
      Name: Yup.string().required("isim zorunludur"),
      LastName: Yup.string().required("Soyisim  zorunludur"),
      Mail: Yup.string().email("Geçerli bir e-posta adresi girin").required("E-posta zorunludur"),
      TaxNo: Yup.string().required("Vergi numarası zorunludur"),
      BuildingNo: Yup.string().required("Bina numarası zorunludur"),
      City: Yup.string().required("Şehir zorunludur"),
      District: Yup.string().required("İlçe zorunludur"),
      Street: Yup.string().required("Sokak zorunludur"),
      Phone: Yup.string().required("Telefon zorunludur"),
      Password: Yup.string().required("Şifre zorunludur"),
      confirmPassword: Yup.string().required("Şifre tekrarı zorunludur"),
      WorkPlaceName: Yup.string().required("Dükkan ismi zorunludur"),
      DoorNumber: Yup.string().required("Kapı numarası zorunludur"),
      
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
    <div className="flex flex-col justify-center  items-center gap-2 mt-5 w-[400px] h-[300px] ">
      <div className="flex flex-col   max-sm:pl-10">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col  w-full items-center justify-center z-20"
        >
          <div className="flex flex-row gap-4 py-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="UserName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.UserName}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Kullanıcı Adı"
                />
                {formik.touched.UserName && formik.errors.UserName ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.UserName}
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
                  name="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Name}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="isim"
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-600 " />
                    <div className="absolute h-6 mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.Name}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="Phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Phone}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Telefon"
                />
  
                {formik.touched.Phone && formik.errors.Phone ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-600 " />
                    <div className="absolute h-6 mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.Phone}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="Mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Mail}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="E-Mail"
                />{" "}
                {formik.touched.Mail && formik.errors.Mail ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.Mail}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="password"
                  name="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Password}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Şifre"
                />{" "}
                {formik.touched.Password && formik.errors.Password ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.Password}
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
                  name="TaxNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.TaxNo}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Vergi Numarası"
                />
                {formik.touched.TaxNo && formik.errors.TaxNo ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.TaxNo}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="City"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.City}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Şehir"
                />
                {formik.touched.City && formik.errors.City ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.City}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="District"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.District}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="İlçe"
                />
                {formik.touched.District && formik.errors.District ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.District}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="Street"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Street}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Sokak/Cad"
                />
                {formik.touched.Street && formik.errors.Street ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.Street}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="BuildingNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.BuildingNo}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Bina No"
                />
                {formik.touched.BuildingNo && formik.errors.BuildingNo ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.BuildingNo}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className=" flex flex-col gap-2">
              <input
                  type="text"
                  name="LastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.LastName}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Soyisim"
                />
                {formik.touched.LastName && formik.errors.LastName ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-600 " />
                    <div className="absolute h-6 mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.LastName}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="DoorNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.DoorNumber}
                  className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                  placeholder="Kat/Kapı No"
                />
               
                {formik.touched.DoorNumber && formik.errors.DoorNumber ? (
                  <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
                    <IoMdArrowDropup className=" text-red-500  " />
                    <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
                      {formik.errors.DoorNumber}
                    </div>
                  </div>
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
        <Link to="/berberlogin">
          <button className=" text-secondary pl-3 "> Giriş Yap</button>
        </Link>
      </label>
    </div>
  );
};

export default BarberRegisterForm;

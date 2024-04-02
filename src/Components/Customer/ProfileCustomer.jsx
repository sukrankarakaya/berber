import React, { useState } from "react";
import NavbarCustomer from "./NavbarCustomer";
import Footer from "../Footer";
import { CiEdit } from "react-icons/ci";
import user from "/public/Image/user.jpg";
import { FaStar } from "react-icons/fa6";
import EditProfileModal from "./EditProfileModal";

const ProfileCustomer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "Şükran ",
    surname:"Karakaya",
    email: "sukrankrky184@gmail.com",
    
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updateUserDetails = (newDetails) => {
    setUserDetails(newDetails);
  };

  return (
    <div className="flex flex-col gap-2 bg-light">
      <NavbarCustomer />

      <div className=" flex flex-row mt-16 px-28 py-12 gap-16">
        <div className=" flex flex-col w-.5/3  h-96 items-center p-5  border border-secondary rounded-lg  ">
          <div className="flex ">
            <img src={user} alt="" className=" w-44 h-44 rounded-full" />
            <button
              htmlFor=""
              className="absolute top-[270px] left-[300px] bg-secondary text-white rounded-full p-1"
            >
              <CiEdit size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 p-5">
            <label htmlFor="" className="">
              Şükran Karakaya
            </label>
            <label htmlFor="" className="">
              sukrankrky184@gmail.com
            </label>
            <label htmlFor="" className="">
              +90 (545) 956 23 12
            </label>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-96  gap-5 p-5  border border-secondary rounded-lg ">
          <label
            htmlFor=""
            className=" flex flex-row text-2xl font-bold  justify-start items-start "
          >
            Bilgilerim
          </label>
          <div className=" grid grid-cols-2 gap-7">
            <p className=" text-lg  "> Şükran</p>
            <p className=" text-lg  "> Karakaya</p>
            <p className=" text-lg  "> Telefon </p>
            <p className=" text-lg  "> E-posta</p>
            <p className=" text-lg  "> şifre </p>
            <p className=" text-lg  ">Şehir </p>
            <p className=" text-lg  ">İlçe </p>
            <p className=" text-lg  ">Sokak </p>
          </div>
          <div className="flex flex-row justify-end">
            <button
              onClick={toggleModal}
              htmlFor=""
              className="flex right-0  w-8 h-8 bg-secondary text-white rounded-full p-1"
            >
              <CiEdit size={20} />
            </button>
          </div>
          <EditProfileModal
            isOpen={isModalOpen}
            onClose={toggleModal}
            userDetails={userDetails}
            updateUserDetails={updateUserDetails}
          />
        </div>

        <div className="flex flex-col w-1/3 h-96  gap-5 p-5  border border-secondary rounded-lg ">
          <label
            htmlFor=""
            className=" flex flex-row text-2xl font-bold  justify-start items-start "
          >
            Randevularım
          </label>

          <div className=" flex flex-col  h-20 p-2 gap-2 border  border-secondary rounded-md">
            <p className=" text-md  font-bold ">
              Barberman - Haircut styling & massage
            </p>
            <div className="flex gap-4 items-center ">
              <p className=" text-md  "> Fön</p>
              <p className=" text-md  font-bold "> 150 ₺ </p>
              <div className="flex flex-row gap-1 items-center">
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />

                <label htmlFor="" className="pl-2">
                  4.5
                </label>
              </div>
            </div>
          </div>

          <div className=" flex flex-col  h-20 p-2 gap-2 border  border-secondary rounded-md">
            <p className=" text-md  font-bold ">
              Barberman - Haircut styling & massage
            </p>
            <div className="flex gap-4 items-center ">
              <p className=" text-md  "> Fön</p>
              <p className=" text-md  font-bold "> 150 ₺ </p>
              <div className="flex flex-row gap-1 items-center">
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />

                <label htmlFor="" className="pl-2">
                  4.5
                </label>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  h-20 p-2 gap-2 border  border-secondary rounded-md">
            <p className=" text-md  font-bold ">
              Barberman - Haircut styling & massage
            </p>
            <div className="flex gap-4 items-center ">
              <p className=" text-md  "> Fön</p>
              <p className=" text-md  font-bold "> 150 ₺ </p>
              <div className="flex flex-row gap-1 items-center">
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />
                <FaStar color="#F9BE0A" />

                <label htmlFor="" className="pl-2">
                  4.5
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileCustomer;

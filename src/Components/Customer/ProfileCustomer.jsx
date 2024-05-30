import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import user from "/public/Image/user.jpg";
import { FaStar } from "react-icons/fa6";
import EditProfileModal from "./EditProfileModal";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { getCustomerId, setCustomerDetail } from "../../Store/Customer/CustomerSlice";
import EditProfilePhotoModal from "./EditProfilePhotoModal";

const ProfileCustomer = () => {
  const appointments = useSelector((state) => state.appointments.appointments);

  const customerId = useSelector((state) => state.persistedReducer.userId);
  // const userData = useSelector((state) => state.customer.userDetail);

  const [visibleCards, setVisibleCards] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState("");

  const [showModal, setShowModal] = useState(false);


  
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const updateUserFotoDetails = (details) => {
    setUserDetails(details);
  };

  const dispatch =useDispatch()

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  const updateUserDetails = React.useCallback((newDetails) => {
    setUserData(newDetails);
  }, []);
  console.log("id: ", customerId);
  console.log("customer: ",useSelector((state) => state.persistedReducer.customer));



  const response = dispatch(getCustomerId(customerId))
  console.log("get", response.data);

  getCustomerId(customerId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7022/api/Customer/Get-Customer/${customerId}`
        );
        setUserData(response.data);
        setCustomerDetail(response.data)
        console.log(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [updateUserDetails, customerId]);


  // useEffect(() => {
  //   if (customerId) {
  //     // fetchData fonksiyonunu çağırın
  //     const fetchData = async () => {
  //       try {
  //         const response = await dispatch(getCustomerById(customerId));
  //         console.log("Response payload:", response.payload);
  //       } catch (error) {
  //         console.error("Error fetching customer data:", error);
  //       }
  //     };

  //     fetchData(); // fetchData fonksiyonunu çağır

  //     // Clean-up işlemleri (gerekirse)
  //     return () => {
  //       // Clean-up kodu
  //     };
  //   }
  // }, [dispatch, customerId]); // Bağımlılıkları ekleyin

  const phoneNumber = userData.phone;
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
      return ""; // Telefon numarası boşsa boş string döndür
    }

    // Telefon numarasını belirli formatta göstermek için formatPhoneNumber fonksiyonunu kullan
    return `+9${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)}
    ${phoneNumber.slice(9, 11)} ${phoneNumber.slice(11)}`;
  };

  const fotoUrl = "https://localhost:7022/";
  const customerFoto = userData && userData.customerUrl ? fotoUrl + userData.customerUrl : "";
  console.log(customerFoto)

  return (
    <div className="flex flex-col gap-2 bg-light min-h-svh ">
      <div className=" flex flex-row  max-sm:flex-col mt-36  max-sm:px-10 py-12 gap-8">
        <div className=" flex flex-col w-1/3 max-sm:w-full h-96 items-center p-5 bg-light-300 shadow-lg rounded-lg  ">
          <div className="flex ">
            <img src={customerFoto} alt="" className=" w-44 h-44 rounded-full" />
            <div className=" flex items-end justify-end">
            <button
            onClick={handleShowModal}
            className="absolute mx-5 bg-secondary text-white rounded-full p-1"
          >
            <CiEdit size={20} />
          </button>
        </div>
      </div>
      <EditProfilePhotoModal
        show={showModal}
        onClose={handleCloseModal}
        customerId={customerId}
        updateUserDetails={updateUserFotoDetails}
      />

          <div className="flex flex-col items-center gap-2 p-5">
            <label htmlFor="" className="">
              {userData.name + " " + userData.lastName}
            </label>
            <label htmlFor="" className="">
              {userData.mail}
            </label>
            <label htmlFor="" className="">
              {formatPhoneNumber(userData.phone)}
            </label>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-96  max-sm:w-full gap-5 p-5 bg-light-300 shadow-lg rounded-lg  ">
          <label
            htmlFor=""
            className=" flex flex-row text-2xl font-bold  justify-start items-start "
          >
            Bilgilerim
          </label>
          <div className=" grid grid-cols-2 gap-3 text-lg max-sm:text-sm ">
            <div className="d-flex">
              <label htmlFor="" className="text-sm text-secondary-100">
                İsim
              </label>
              <p className="  "> {userData.name} </p>
            </div>
            <div className="d-flex">
              <label htmlFor="" className="text-sm text-secondary-100">
                Soyisim
              </label>
              <p className=" ">{userData.lastName} </p>
            </div>
            <div className="d-flex">
              <label htmlFor="" className="text-sm text-secondary-100">
                Telefon No
              </label>
              <p className=" text-md max-sm:text-[14px]   " >
                {formatPhoneNumber(userData.phone)}{" "}
              </p>
            </div>
            <div className="d-flex">
              <label htmlFor="" className="text-sm text-secondary-100">
                E-mail
              </label>
              <p className=" text-md  max-sm:text-sm  line-clamp-2  ">
                {" "}
                {userData.mail}
              </p>
            </div>
            <div className="d-flex">
              <label htmlFor="" className="text-sm text-secondary-100">
                Şifre
              </label>
              <p className="   "> ********** </p>
            </div>
            <div className="d-flex">
              <label htmlFor="" className="text-sm text-secondary-100">
                Şehir
              </label>
              <p className="   ">{userData.city} </p>
            </div>
            <div className="d-flex">
              <label htmlFor="" className="text-sm text-secondary-100">
                İlçe
              </label>
              <p className="  ">{userData.district} </p>
            </div>
            <div className="d-flex">
              <label htmlFor="" className="text-sm text-secondary-100">
                Sokak
              </label>
              <p className=" ">{userData.street} </p>
            </div>
            <div className="flex"></div>
            <div className="flex flex-row justify-end  ">
              <button
                onClick={toggleModal}
                htmlFor=""
                className="flex right-0  w-8 h-8 bg-secondary text-white rounded-full p-1"
              >
                <CiEdit size={20} />
              </button>
            </div>{" "}
          </div>

          <EditProfileModal
            isOpen={isModalOpen}
            onClose={toggleModal}
            userData={userData}
            updateUserDetails={updateUserDetails}
          />
        </div>
        <div className="flex flex-col w-1/3 h-96 max-sm:w-full gap-3 p-5  bg-light-300 shadow-lg rounded-lg ">
          <label
            htmlFor=""
            className=" flex flex-row text-2xl font-bold  justify-start items-start "
          >
            Randevularım
          </label>

          {appointments.length === 0 ? (
            <div className="mt-4 w-full">
              <p className="text-xl font-bold">Henüz randevu oluşturmadınız.</p>
            </div>
          ) : (
            appointments.slice(0, visibleCards).map((appointment) => (
              <Link to="/myappointment" key={appointment.id}>
                <div className="flex flex-col h-20 p-2 gap-2 border border-secondary rounded-md hover:bg-light">
                  <p className="text-md font-bold">{appointment.barberName}</p>
                  <div className="flex gap-4 items-center">
                    <p className="text-md">Fön</p>
                    <p className="text-md font-bold">150 ₺</p>
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
              </Link>
            ))
          )}

          <div className="flex justify-end">
            {appointments.length > visibleCards && (
              <Link to="/myappointment">
                <button className="bg-transparent text-gray-700 hover:text-secondary hover:border-b-[1px] hover:border-secondary text-right flex items-center my-4 px-1">
                  Tümünü Gör <BsArrowRight className=" pl-2 w-7 h-7" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCustomer;

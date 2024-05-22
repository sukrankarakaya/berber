import React, { useEffect,useState  } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBarberById, getBarberEmployees,getBarberServices } from '../../Store/Barber/BarberLoginSlice';
import user from "/public/Image/user.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiEdit } from "react-icons/ci";

const Employe = () => {
  const dispatch = useDispatch();
  const barber = useSelector(state => state.barberLogin.barber);
  const userId = useSelector(state => state.barberLogin.userId);
  const employees = useSelector(state => state.barberLogin.employees) || [];
  const services = useSelector(state=>state.barberLogin.services)||[];
  useEffect(() => {
    if (userId !== null) {
      dispatch(getBarberById(userId));
      dispatch(getBarberEmployees(userId));
      dispatch(getBarberServices(userId));

    } else {
      console.log("Kullanıcı ID alınamadı", userId);
    }
  }, [dispatch, userId]);

  const baseURL = "https://localhost:7022";
  const barberPhoto = barber && barber.barberUrl ? baseURL + barber.barberUrl : user;
  const empPhoto = employees && employees.employeesUrl ? baseURL + employees.employeesUrl : user;
  console.log("Berber:", barber);
  console.log("Çalışanlar:", employees);
  console.log("servisler",services);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
    <div className="flex flex-col gap-2 w-screen bg-light min-h-svh">
      <div className="flex flex-row max-sm:flex-col mt-16 max-sm:px-5 py-12 gap-8 justify-center">
        {/* Berber kartı */}
        <div className="flex flex-col w-[300px] max-sm:w-full h-96 items-center p-5 bg-light-300 shadow-lg rounded-lg">
          <div className="flex">
            <img src={barberPhoto} alt="Berber" className="w-44 h-44 rounded-full" />
            <div className="flex items-end justify-end">
              <button className="absolute mx-5 bg-secondary text-white rounded-full p-1">
                <CiEdit size={20} /> 
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-5 text-lg">
            <label>{barber ? barber.workPlaceName : "İş yeri adı"}</label>
            <label>{barber ? barber.mail : "E-posta"}</label>
            <label>{barber ? barber.phone : "Telefon"}</label>
          </div>
        </div>
       
        {/* Bilgilerim kartı */}
        <div className="flex flex-col  w-[300px] h-96 max-sm:w-full gap-5 p-5 bg-light-300 shadow-lg rounded-lg overflow-x-clip">
          <label className="flex flex-row text-2xl font-bold justify-between items-start">Bilgilerim
           <div className="flex flex-row justify-end">
            <button   className="flex right-0 w-8 h-8 bg-secondary text-white rounded-full p-1  ">
               <CiEdit size={20} /> 
               
            </button>
          </div>
          </label>
          
          <div className="grid grid-cols-2 gap-3 text-base max-sm:text-lg">
            <div>
              <label className="text-base text-secondary-100">İsim</label>
              <p>{barber ? barber.name : "İsim"}</p>
            </div>
            <div>
              <label className="text-base text-secondary-100">Soyisim</label>
              <p>{barber ? barber.lastName : "Soyisim"}</p>
            </div>
            <div>
              <label className="text-base text-secondary-100">Telefon No</label>
              <p>{barber ? barber.taxNo : "Vergi Numarası"}</p>
            </div>
            <div>
              <label className="text-base text-secondary-100">E-mail</label>
              <p>{barber ? barber.mail : "E-mail"}</p>
            </div>
            <div>
              <label className="text-base text-secondary-100">Şifre</label>
              <p>**********</p>
            </div>
            <div>
              <label className="text-base text-secondary-100">Şehir</label>
              <p>{barber ? barber.city : "Şehir"}</p>
            </div>
            <div>
              <label className="text-base text-secondary-100">İlçe</label>
              <p>{barber ? barber.district : "İlçe"}</p>
            </div>
            <div>
              <label className="text-base text-secondary-100">Sokak</label>
              <p>{barber ? barber.street : "Sokak"}</p>
            </div>
          </div>
        </div>
        {/* Çalışan kartı */}
        <div className="flex flex-col  w-[300px] h-96 max-sm:w-full gap-5 p-5 bg-light-300 shadow-lg rounded-lg overflow-x-hidden">
  <label className="flex flex-row text-2xl font-bold justify-between items-start">Personeller
  <div className="flex flex-row justify-end">
            <button   className="flex right-0 w-8 h-8 bg-secondary text-white rounded-full p-1  ">
               <CiEdit size={20} />       
            </button>
          </div>
          </label>
          {employees.length > 0 ? (
            <Slider {...settings} className="flex flex-row justify-around">
              {employees.map((employee, index) => (
                <div key={index} className="">
                  <img src={employee.employeesUrl ? baseURL + employee.employeesUrl : user} alt="Çalışan" className="w-44 h-44 rounded-full mx-auto" />
                  <p className="pt-10 text-center text-lg">{employee.name + " " + employee.lastName}</p>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center">Henüz çalışan yok</p>
          )}
</div>

        {/* Servis kartı */}
        <div className="flex flex-col  w-[300px] h-96 max-sm:w-full gap-5 p-5 bg-light-300 shadow-lg rounded-lg">
      <label className="flex flex-row text-2xl font-bold justify-between items-start">
        Servisler
        <div className="flex flex-row justify-end">
          <button className="flex right-0 w-8 h-8 bg-secondary text-white rounded-full p-1">
            <CiEdit size={20} />
          </button>
        </div>
      </label>
      <div className="overflow-x-auto">
        <table className="min-w-full px-2 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {service.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.price}
                    </td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
    </div>
        {/* -----------servis kartı sonu--------------- */}
      </div>
    </div>
  );
}

export default Employe;

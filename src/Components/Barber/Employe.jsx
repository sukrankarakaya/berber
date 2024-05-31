import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBarberById, getBarberEmployees } from '../../Store/Barber/BarberLoginSlice';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiEdit } from "react-icons/ci";
import EditModal from "./EditModal";
import EmployeeEditModal from "../Barber/employeEditModal";


const Employe = () => {
  const dispatch = useDispatch();
  const barber = useSelector(state => state.barberLogin.barber);
  const userId = useSelector(state => state.barberLogin.userId);
  const employees = useSelector(state => state.barberLogin.employees) || [];

  const services = useSelector(state => state.barberLogin.services) || [];
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (userId !== null) {
      dispatch(getBarberById(userId));
      dispatch(getBarberEmployees(userId));
      // dispatch(getBarberServices(userId));
    } else {
      console.log("Kullanıcı ID alınamadı", userId);
    }
  }, []);
  console.log(barber)
  const baseURL = "https://localhost:7022";
  // const barberPhoto = barber && barber.barberUrl ? baseURL + barber.barberUrl : user;
  // const empPhoto = employees && employees.employeesUrl ? baseURL + employees.employeesUrl : user;
  const barberPhoto =   baseURL + barber.barberUrl ;  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleEditClick = (barber) => {
    setSelectedBarber(barber);
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedBarber) => {
    console.log('Güncellenen Berber:', updatedBarber);
    dispatch(getBarberById(userId));
  };

  const openModal = (employee) => {
    setSelectedEmployee(employee || { name: '', lastName: '', id: null }); // Yeni çalışan oluşturma durumu
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  const refreshEmployeeList = () => {
    dispatch(getBarberEmployees(userId)); // Çalışan listesini yenile
  };

  return (
    <div className="gap-2 w-full bg-light h-auto">
      <div className="flex flex-wrap mt-8 pt-16 gap-8 mb-8 justify-center">
        {/* Berber kartı */}
        <div className="flex flex-col w-[300px] max-w-full sm:w-[300px] h-96 items-center p-5 bg-light-300 shadow-lg rounded-lg">
          <div className="relative">
            <img src={`${barberPhoto}`} alt="Berber" className="w-44 h-44 rounded-full" />
            <div className="absolute bottom-0 right-0">
              <button className="bg-secondary text-white rounded-full p-1" onClick={() => handleEditClick(barber)}>
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
        <div className="flex flex-col w-[300px] max-w-full sm:w-[300px] h-96 gap-5 p-5 bg-light-300 shadow-lg rounded-lg overflow-x-clip">
          <label className="flex flex-row text-2xl font-bold justify-between items-start">Bilgilerim
            <div className="flex flex-row justify-end">
              <button className="flex w-8 h-8 bg-secondary text-white rounded-full p-1" onClick={() => handleEditClick(barber)}>
                <CiEdit size={20} />
              </button>
            </div>
          </label>
          <div className="grid grid-cols-2 gap-3 text-base">
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
        <div className="flex flex-col w-[300px] max-w-full sm:w-[300px] h-96 gap-5 p-5 bg-light-300 shadow-lg rounded-lg overflow-x-hidden">
          <label className="flex flex-row text-2xl font-bold justify-between items-start">
            Personeller
            <div className="flex flex-row justify-end">
              <button className="flex w-8 h-8 bg-secondary text-white rounded-full p-1" onClick={() => openModal(null)}>
                <CiEdit size={20} />
              </button>
            </div>
          </label>
          {employees.length > 0 ? (
            <Slider {...settings} className="flex flex-row justify-around">
              {employees.map((employee, index) => (
                
                <div key={index}>
                  <img src={`${baseURL+employee.employeeUrl} `} alt="Çalışan" className="w-44 h-44 rounded-full mx-auto" />
                  <p className="pt-10 text-center text-lg">{employee.name + " " + employee.lastName}</p>
                  <button className="bg-secondary text-white rounded-full p-1 mt-2" onClick={() => openModal(employee)}>
                    <CiEdit size={20} />
                  </button>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center">Henüz çalışan yok</p>
          )}
        </div>
        
        {/* Servis kartı */}
        <div className="flex flex-col w-[300px] max-w-full sm:w-[300px] h-96 gap-5 p-5 bg-light-300 shadow-lg rounded-lg">
          <label className="flex flex-row text-2xl font-bold justify-between items-start">
            Servisler
            <div className="flex flex-row justify-end">
              <button className="flex w-8 h-8 bg-secondary text-white rounded-full p-1">
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
              {services.length > 0 ? (
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
              ) : (
                <p className="text-center">Henüz servis yok</p>
              )}
            </table>
          </div>
        </div>
      </div>
      
      {isEditModalOpen && (
        <EditModal 
          barber={selectedBarber} 
          userId={userId}
          onSave={handleSave} 
          onClose={() => setIsEditModalOpen(false)} 
        />
      )}
     {isModalOpen && (
  <EmployeeEditModal 
    employee={selectedEmployee} 
    onClose={closeModal}
    refreshEmployeeList={refreshEmployeeList} // refreshEmployeeList işlevi doğru şekilde aktarılıyor
  />
)}

    </div>
  );
}

export default Employe;

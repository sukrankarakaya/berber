import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Components/Logo';
import Dropdown from './Dropdown';
import Location from './Location';


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Çıkış yap butonuna basıldığında yapılacak işlemler
    // Örneğin, kullanıcıyı giriş sayfasına yönlendirme
    navigate('/login'); // '/login' sayfasına yönlendir
  };

  return (
    <div className='bg-black opacity-45 w-full fixed top-0 z-10 '>
      <div className='h-1/5 flex flex-row justify-between items-center mx-auto px-32  py-3'>
        {/* Sol taraftaki bileşenler */}
        <div className="flex items-center ">
          <Logo />
        </div>
        {/* Ortadaki boşluk */}
        <Location/>
        {/* Sağ taraftaki bileşenler */}
        <div className="flex items-center ">
          {/* Logo ve dropdown arasındaki kutu */}
          <div className="w-6 h-6 "></div>
          {/* Dropdown */}
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
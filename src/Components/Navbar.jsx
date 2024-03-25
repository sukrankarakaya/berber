import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Components/Logo';
import Dropdown from './Dropdown';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Çıkış yap butonuna basıldığında yapılacak işlemler
    // Örneğin, kullanıcıyı giriş sayfasına yönlendirme
    navigate('/login'); // '/login' sayfasına yönlendir
  };

  return (
    <div className='bg-black opacity-85 w-full fixed top-0 z-10'>
      <div className='h-1/5 flex flex-row justify-between items-center pt-4 pb-2'>
        {/* Sol taraftaki bileşenler */}
        <div className="flex items-center pl-6">
          <Logo />
        </div>
        {/* Sağ taraftaki bileşenler */}
        <div className="flex items-center pr-6">
          {/* İkon ve isim */}
          <Dropdown />
          {/* Çıkış yap butonu */}
       
        </div>
      </div>
    </div>
  );
};

export default Navbar;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/Image/Logo.png';
import Dropdown from '../Dropdown';
import Location from '../Location';


const NavbarCustomer= () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='bg-secondary items-center w-full fixed top-0 z-10 px-11'>
      <div className='h-1/5 flex flex-row justify-between items-center mx-auto px-32  py-3'>
      
        <div className="flex items-center ">
        </div>
        <Location/>
        <div className="flex items-center ">
          <div className="w-6 h-6 "></div>
          
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default NavbarCustomer;
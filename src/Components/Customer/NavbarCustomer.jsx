
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoCustomer from '../Customer/LogoCustomer';
import DropdownCustomer from '../Customer/DropdownCustomer';
import LocationCustomer from '../Customer/LocationCustomer';


const NavbarCustomer= () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='bg-secondary items-center w-full fixed top-0 z-10 px-11'>
      <div className='h-1/5 flex flex-row justify-between items-center mx-auto px-32  py-3'>
        <LogoCustomer/>
        <div className="flex items-center ">
        </div>
        <LocationCustomer/>
        <div className="flex items-center ">
          <div className="w-6 h-6 "></div>
          
          <DropdownCustomer />
        </div>
      </div>
    </div>
  );
};

export default NavbarCustomer;
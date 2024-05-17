
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoCustomer from '../Customer/LogoCustomer';
import LocationCustomer from '../Customer/LocationCustomer';
import DropdownCustomer from "../Customer/DropdownCustomer"

const NavbarCustomer= () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='bg-secondary items-center w-full fixed top-0 z-10 px-10 max-sm:px-3 '>
      <div className='h-1/5 flex  flex-row justify-between items-center mx-auto px-32 max-sm:px-0  py-3'>
        <LogoCustomer/>
        
        <LocationCustomer/>
        <div className="flex items-center ">
          <div className="w-6 h-6 "></div>
          <DropdownCustomer/>
        </div>
      </div>
    </div>
  );
};

export default NavbarCustomer;
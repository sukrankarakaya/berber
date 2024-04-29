// Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import Dropdown from './Dropdown';
import Location from '../Location';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className='bg-secondary items-center w-full fixed top-0 z-10'>
      <div className='h-1/5 flex flex-row justify-between items-center px-24 py-3'>
        <div className="flex items-center px-1">
          <Logo />
        </div>
        <div className="flex items-center flex-grow  justify-end"> 
          <div className=" "> 
            <Location/>
          </div>
        </div>
        <div className="flex items-center flex-grow justify-end">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

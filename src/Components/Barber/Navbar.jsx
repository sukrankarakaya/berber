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
      <div className='w-full  sm:px-6 lg:px-2 max-w-screen-xl mx-auto'>
        <div className='flex flex-row items-center justify-between py-2'>
          <div className="flex items-center">
            <Logo />
          </div>
          <div className=" sm:flex flex-row items-center ">
            <Location/>
          </div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

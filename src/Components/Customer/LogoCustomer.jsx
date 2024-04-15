// Logo.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); 
  };

  return (
    <div className="relative inline-flex items-center justify-center p-0.5 my-2 me-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={handleClick}>
        <h1>Berber Sepeti</h1>
      </span>
    </div>
  );
};

export default Logo;

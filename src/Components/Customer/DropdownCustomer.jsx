import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import person from '../../assets/person.png';
import { useSelector } from 'react-redux';

const Icon = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const userName = useSelector(state => state.auth.userName); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`your-api-endpoint/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const redirectToProfilePage = () => {
    navigate(`/berberprofil/${userId}`);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-sm pe-1 pr-4 font-medium text-white rounded-full hover:text-gray-100 md:me-0  focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <img src={userData?.profileImage || person} alt="Profil Resmi" className="w-8 h-8 me-2 rounded-full" /> */}
        <img src="../../../public/Image/user.jpg " alt=""  className='w-10 h-10 me-2 rounded-full'/>
        <span className=''>{userName || 'Kullanıcı'}</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button> 
      {isOpen && (
        <div ref={dropdownRef} className="absolute z-10 mt-2 w-32  bg-white rounded-md shadow-lg">
         <Link to="/profile"> <p className="block px-4 py-2 text-gray-800 hover:bg-gray">Profilim</p></Link>

         <Link to="/myappointment"> <p className="block px-4 py-2 text-gray-800 hover:bg-gray">Randevularım</p></Link>
         
          <a href="login" className="block px-4 py-2 text-gray-800 hover:bg-gray">Çıkış Yap</a>
        </div>
      )}
    </div>
  );
};

export default Icon;

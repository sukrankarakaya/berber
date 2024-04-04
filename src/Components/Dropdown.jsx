import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import person from '../assets/person.png';

const Icon = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

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
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-sm pe-1 pr-4 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={userData?.profileImage || person} alt="Profil Resmi" className="w-8 h-8 me-2 rounded-full" />
        <span>{userData?.name || 'EMRE'}</span>
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
          <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Profilim</a>
          <a href="/myappointment" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Randevularım</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Ayarlar</a>
          <a href="login" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Çıkış Yap</a>
        </div>
      )}
    </div>
  );
};

export default Icon;

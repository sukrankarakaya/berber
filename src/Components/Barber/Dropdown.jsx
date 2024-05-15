import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import person from '../../assets/person.png';
import { useSelector } from 'react-redux'; // Redux store'dan veri almak için useSelector'ı kullanın

const Icon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  
  const userName = useSelector(state => state.barberLogin.userName);
  const profileImage = useSelector(state => state.barberLogin.profileImage);
  
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

  return (
    <div>
      <div className="relative">
        <button
          className="flex items-center text-sm pe-1  font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={profileImage || person} alt="Profil Resmi" className="w-8 h-8 me-4 rounded-full" />
          <span>{userName || 'EMRE'}</span>
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
            <Link to="/profil"> <p className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Profilim</p></Link>
            {/* <Link to="/myappointment"> <p className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Randevularım</p></Link> */}
            <Link to="/ayarlar"> <p className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Ayarlar</p></Link>
            <Link to="/yorumlar"> <p className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Yorumlar</p></Link>

            <a href="login" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">Çıkış Yap</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Icon;

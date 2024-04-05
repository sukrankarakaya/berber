// Personelcard.js
import React, { useState } from 'react';
import personal from "../../mock/personal.json";
import EditModal from "../Barber/EditModal";
import { CiEdit } from 'react-icons/ci';

const Personelcard = () => {
  const [currentPage, setCurrentPage] = useState(0); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "emre",
    surname: "tetik",
    email: "emre@gmail.com",
  });

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(0, prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(personal.length - 1, prevPage + 1));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updateUserDetails = (newDetails) => {
    setUserDetails(newDetails);
  };

  return (
    <div>
      <div className="w-auto h-auto flex justify-center gap-5 overflow-x-hidden">
        {personal.length > 0 && (
          <div key={currentPage} className="box-wrapper max-w-lg">
            <div className="bg-white border-2 border-black rounded-lg shadow">
              <a href="#">
                <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                  <img className="rounded-t-lg" src={personal[currentPage].image} alt={personal[currentPage].name} style={{ width: '100%', height: 'auto' }} />
                </div>
              </a>
              <div className="text-gray-800 text-2xl pt-8 mb-2 p-5  flex justify-center">
                <h1 className='pr-4'>{personal[currentPage].name}</h1>
                <button onClick={toggleModal} className="flex right-0  w-8 h-8 bg-secondary text-white rounded-full p-2">
                  <CiEdit size={20} />
                </button>
              </div>
              <div className='h-auto py-2 justify-around flex flex-row'>
                <button onClick={goToPreviousPage} className='text-gray-800 border-2 py-2 mb-2 px-4 border-black rounded-lg dark:hover:bg-gray-600'>Önceki Sayfa</button>
                <button onClick={goToNextPage} className='text-gray-800 border-2 py-2 mb-2 px-4 border-black rounded-lg dark:hover:bg-gray-600'>Sonraki Sayfa</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <EditModal isOpen={isModalOpen} onClose={toggleModal} userDetails={userDetails} updateUserDetails={updateUserDetails} />
    </div>
  );
};

export default Personelcard;

import React, { useState, useEffect } from 'react';
import personal from "../../mock/personal.json";

const Personelcard = () => {
  const [currentPage, setCurrentPage] = useState(0); // Sayfa indeksini takip etmek için state

  // Önceki sayfaya geçiş
  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(0, prevPage - 1));
  };

  // Sonraki sayfaya geçiş
  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(personal.length - 1, prevPage + 1));
  };

  return (
    <div>
      <div className="w-auto h-auto  bg-white flex justify-center gap-5 overflow-x-hidden ">
        {personal.length > 0 && (
          <div key={currentPage} className="box-wrapper">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img className="rounded-t-lg" src={personal[currentPage].image} alt={personal[currentPage].name} />
              </a>
              <div className="text-gray-800 text-2xl p-5 flex justify-center">
                <h1>{personal[currentPage].name}</h1>
              </div>
              <div className='h-auto py-2 justify-around flex flex-row '>
        <button onClick={goToPreviousPage} className='text-gray-800 border-2 py-5 px-4 border-black rounded-lg dark:hover:bg-gray-600'>Önceki Sayfa</button>
        <button onClick={goToNextPage} className='text-gray-800 border-2 py-5 px-4 border-black rounded-lg dark:hover:bg-gray-600'>Sonraki Sayfa</button>
      </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Personelcard;

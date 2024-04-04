import React, { useState, useEffect } from 'react';
import servicesData from "../../mock/services.json";

const Services = () => {
    const [servicesList, setServicesList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        setServicesList(servicesData);
    }, []);

    const totalPages = Math.ceil(servicesList.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = servicesList.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='p-6 bg-white border-2 border-black shadow-md rounded-md'>
        <h1 className='text-xl font-semibold text-gray-800 mb-4'>Hizmetler</h1>
        <div className='overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='px-4 py-2 text-left'>Hizmet Adı</th>
                <th className='px-4 py-2 text-right'>Fiyatı</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((hizmet, index) => (
                <tr key={index} className='border-b'>
                  <td className='px-4 py-2 text-left'>{hizmet.name}</td>
                  <td className='px-4 py-2 text-right'>{hizmet.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex justify-center mt-8'>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className='rounded-lg text-black border-black border-2 py-2 px-4 dark:hover:bg-gray-600 mr-2'>Önceki Sayfa</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className='rounded-lg text-black border-black border-2 py-2 px-4 dark:hover:bg-gray-600'>Sonraki Sayfa</button>
          </div>
        </div>
      </div>
      
    );
};

export default Services;

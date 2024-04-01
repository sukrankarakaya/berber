import React, { useState, useEffect } from 'react';
import services from "../../mock/services.json"

const Services = () => {
    const [serviceslist, setServicesList] = useState([]);

    useEffect(() => {
        const takedata = async () => {
            try {
                const response = await fetch('services.json');
                const data = await response.json();
                setServicesList(data);
            } catch (error) {
                console.error('Hizmet verileri alınırken hata oluştu:', error);
            }
        };

        takedata();
    }, []);

    return (
        <div className='w-3/5 flex flex-col'>
            <div className='w-auto dark:bg-gray-900 h-auto rounded-t-lg'>
                <h1 className='text-white py-3 px-3 text-2xl'>Hizmetler</h1>
            </div>
            <div className='w-auto  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 h-auto flex flex-row justify-around py-3'>
                <p>Hizmet Adı</p>
                <p>Fiyatı</p>
            </div>
            {services.map((hizmet, index) => (
                <div key={index} className='h-auto py-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 justify-around flex flex-row text-white'>
                    <p>{hizmet.name}</p>
                    <p>{hizmet.price}</p>
                </div>
            ))}
            <div className='h-auto py-2 dark bg-gray-800 justify-around flex flex-row '>
                <button className='text-white border-2 py-2 px-4 dark:hover:bg-gray-600'>Sil</button>
                <button className='text-white border-2 py-2 px-4 dark:hover:bg-gray-600'>AYRINTILAR ÖNEMLİ</button>
                <button className='text-white border-2 py-2 px-4 dark:hover:bg-gray-600'>Ekle</button>
            </div>
        </div>
    );
};

export default Services;

import React, { useState, useEffect } from 'react';
import personel from "../../mock/personel.json";

const Personelcard = () => {
 
  const [personelVerileri, setPersonelVerileri] = useState([]);

  useEffect(() => {
    
    const takedata = async () => {
      try {
       
        const response = await fetch('personel.json');
        if (!response.ok) {
          throw new Error('Veriler alınamadı.');
        }
        const gelenVeriler = await response.json();

        // Verileri state'e ayarla
        setPersonelVerileri(gelenVeriler);
      } catch (error) {
        console.error('Verileri alma hatası:', error);
      }
    };

    // takedata fonksiyonunu çağır
    takedata();
  }, []);

  return (
    <div>
    <div className="w-auto h-auto py-5 bg-gray-800 flex justify-center gap-5 overflow-x-hidden ">
      {personel.map((personel, index) => (
        <div key={index} className="box-wrapper">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={personel.image} alt={personel.name} />
            </a>
            <div className="text-white text-2xl p-5 flex justify-center">
              <h1>{personel.name}</h1>
            </div>
          </div>
        </div>
      ))}

    </div>
     {/* Sil ve Kaydet butonları buraya gelebilir */}
     <div className='h-auto py-2 dark bg-gray-800 justify-around flex flex-row '>
                <button className='text-white border-2 py-2 px-4 dark:hover:bg-gray-600'>Sil</button>
                <button className='text-white border-2 py-2 px-4 dark:hover:bg-gray-600'>Kaydet</button>
            </div>
    </div>
    
  );
};

export default Personelcard;

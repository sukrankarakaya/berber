import React, { useState, useEffect } from 'react';
import  location  from '../assets/location.png';

const Konum = () => {
  const [userLocation, setUserLocation] = useState('');

  useEffect(() => {
    // Kullanıcının konumunu veritabanından al
    const fetchUserLocation = async () => {
      try {
        // Veritabanından kullanıcının konumunu almak için uygun bir API çağrısı yapılabilir
        // Bu örnekte rastgele bir konum kullanılıyor
        const userLocationFromDatabase = 'Antalya/Kepez/Altınova mahallesi';
        setUserLocation(userLocationFromDatabase);
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <div className="bg-white w-auto p-3 h-10 border border-black rounded-md flex  items-center">
     <img src={location} alt="" />
      <span className="text-black">{userLocation}</span>
    </div>
  );
};

export default Konum;

import React, { useState, useEffect } from 'react';
import  location  from '../../assets/location.png';
import { useSelector } from 'react-redux';

const Konum = () => {

  const locationName = useSelector(state => state.auth.locationFull, ); 
  


  return (
    <div className="bg-white  p-3 h-10 border border-black rounded-md flex  items-center max-sm:hidden">
     <img src={location} alt="" />
      <span className="text-black">{locationName || 'Konumunuz Bulunamadı'}</span>
    </div>
  );
};

export default Konum;

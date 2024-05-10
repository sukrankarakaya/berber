import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { getBarberById } from '../Store/Barber/BarberLoginSlice';

const Konum = () => {
  const [userLocation, setUserLocation] = useState('');
  const barberID = useSelector(state => state.barberLogin.barberID); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (barberID) {
      fetchUserLocation();
    } else {
      console.warn('Barber ID is not defined');
    }
  }, [barberID, dispatch]);


  const fetchUserLocation = async () => {
    try {
      const response = await dispatch(getBarberById(barberID))
      setUserLocation(response.payload.city +"  "+ response.payload.district+"  "+response.payload.street,response.payload.doorNumber);

      console.log(response)
    } catch (error) {
      console.error('Error fetching user location:', error);
    }
  };
  
  
  
  return (
    <div className="flex justify-center">
      <div className="bg-white w-auto p-3 h-10 border border-black rounded-md flex items-center">
        <span className="text-black">{userLocation}</span>
     
      </div>
    </div>
  );
};

export default Konum;

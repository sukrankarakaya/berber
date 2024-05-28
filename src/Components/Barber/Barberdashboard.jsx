import React from 'react';
import Appointmentlist from './Appointmentlist';


const Berberdashboard = () => {
  return (
  <div className=''>
      <div className=' justify-center flex flex-col w-full pt-20 pb-4'>
      <div className='max-w-screen-xl w-screen mx-auto pt-4 px-4 pb-4 bg-white '>
        <Appointmentlist/>
      </div>
    </div>
  </div>
  );
};

export default Berberdashboard;

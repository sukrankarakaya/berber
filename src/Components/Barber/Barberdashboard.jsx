import React from 'react';
import Appointmentlist from './Appointmentlist';
import Timecard from './Timecard';
import Approval from './Approval';

const Berberdashboard = () => {
  return (
  <div className=''>
      <div className=' justify-center flex flex-col w-full pt-20'>
      <div className='max-w-screen-xl w-screen mx-auto pt-4 px-4 pb-4 bg-white '>
        <Appointmentlist/>

      </div>
      <div className='max-w-screen-xl w-screen mx-auto px-4  h-auto  flex flex-row gap-2  bg-white'>
        <div className='w-fit'> <Timecard/></div> 
       <div className='w-1/2 rounded-lg  '><Approval/></div>
      </div>
     
    </div>
  </div>
  );
};

export default Berberdashboard;

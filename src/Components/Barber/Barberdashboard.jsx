import React from 'react';
import Appointmentlist from './Appointmentlist';
import Personelcard from './Personelcard';
import Timecard from './Timecard';
import Services from './Services';
import Approval from './Approval';

const Berberdashboard = () => {
  return (
    <div className=' justify-center flex flex-col'>
      <div className='max-w-screen-xl w-screen mx-auto pt-24'>
        <Appointmentlist/>
      </div>
      <div className='max-w-screen-xl w-screen mx-auto h-auto pt-10 flex flex-row gap-2 justify-between'>
       <div className='w-1/4'> <Timecard/></div>
       <div className='w-2/4'><Approval/></div>
      </div>
     
    </div>
  );
};

export default Berberdashboard;

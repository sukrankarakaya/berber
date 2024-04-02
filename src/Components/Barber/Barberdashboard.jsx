import React from 'react';
import Appointmentlist from './Appointmentlist';
import Personelcard from './Personelcard';
import Timecard from './Timecard';
import Services from './Services';


const Berberdashboard = () => {
  return (
    <div className=' justify-center flex flex-col'>
      <div className='max-w-screen-xl w-screen mx-auto pt-24'>
        <Appointmentlist/>
      </div>
      <div className='max-w-screen-xl w-screen mx-auto pt-10 flex flex-row gap-2 justify-between'>
         <Timecard/>
      <Personelcard/>
         <Services/>
      </div>
     
    </div>
  );
};

export default Berberdashboard;

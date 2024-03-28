import React from 'react';
import Appointmentlist from './Appointmentlist';
import Personelcard from './Personelcard';
import Timecard from './Timecard';

const Berberdashboard = () => {
  return (
    <div className=' justify-center flex flex-col'>
      <div className='max-w-screen-xl w-screen mx-auto pt-24'>
        <Appointmentlist/>
      </div>
      <div className='max-w-screen-xl w-screen mx-auto pt-10'>
         <Timecard/>
      </div>
      <div className='max-w-screen-xl w-screen mx-auto pt-10'>
        <h1 className='text-white bg-slate-900 pl-6 py-3 text-2xl rounded-t-lg'>Personellerimiz</h1>
      <Personelcard/>
      </div>
    </div>
  );
};

export default Berberdashboard;

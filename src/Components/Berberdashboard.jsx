import React from 'react';
import Randevucard from './Randevucard';
import Saatcard from './Saatcard';
import Personelcard from './Personelcard';

const Berberdashboard = () => {
  return (
    <div className=' justify-center flex flex-col'>
      <div className='max-w-screen-xl w-screen mx-auto pt-24'>
        <Randevucard />
      </div>
      <div className=''>
         <Saatcard/>
      </div>
      <div className='max-w-screen-xl w-screen mx-auto pt-10'>
        <h1 className='text-white bg-slate-900 pl-6 py-3 text-2xl rounded-sm'>Personellerimiz</h1>
      <Personelcard/>
      </div>
    </div>
  );
};

export default Berberdashboard;

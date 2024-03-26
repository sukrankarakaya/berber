import React from 'react';
import insan from '../assets/insan.jpg';

const Personelcard = () => {
  return (
    <div className="w-auto h-auto py-5 bg-black flex justify-center gap-5 overflow-x-hidden rounded-sm">
      <div className="box-wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="max-w-sm bg-black border-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={insan} alt="" />
          </a>
          <div className="text-white text-2xl p-5 flex justify-center">
            <h1>Personel ismi</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personelcard;

// import React, { useState, useEffect } from 'react';

// const Personelcard = () => {
//   const [personeller, setPersoneller] = useState([]);

//   useEffect(() => {
//     fetch('/path_to_your_api/personeller.json')
//       .then(response => response.json())
//       .then(data => setPersoneller(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="flex justify-center gap-5">
//       {personeller.map(personel => (
//         <div key={personel.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <img className="rounded-t-lg" src={personel.image} alt="" />
//           </a>
//           <div className="text-white text-2xl p-5 flex justify-center">
//             <h1>{personel.name}</h1>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Personelcard;
// üstteki statik ve düzenlenmiş hali alttaki değil ama fonksiyonu var üstten tasarım için bak
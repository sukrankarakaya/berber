import React, { useState } from "react";
import { CiEdit, CiMail } from 'react-icons/ci';
import { CiPhone } from "react-icons/ci";
import { PiMapPinLineThin } from "react-icons/pi";
import { useSelector } from 'react-redux';

const EditModal = ({ onSave, onClose }) => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [workingHours, setWorkingHours] = useState('');
  
    const handleSave = () => {
      const newData = {
        name,
        phone,
        address,
        workingHours,
        mail
      };
      onSave(newData);
      onClose();
    };
  
    return (
      <div>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-lg mx-auto my-6">
            <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex flex-col p-8 border-b border-solid border-gray-300">
                <h3 className="text-xl font-semibold mb-4">Bilgilerinizi Düzenleyiniz...</h3>
                <h1>Kuaför ismi</h1>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="border rounded-md px-3 py-2 mb-4"
                />
                 <h1>Telefon Numarası</h1>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="border rounded-md px-3 py-2 mb-4"
                />
                 <h1>Mail</h1>
                <input
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="Mail"
                  className="border rounded-md px-3 py-2 mb-4"
                />
                 <h1>Adres</h1>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="border rounded-md px-3 py-2 mb-4"
                />
                <input
                  type="text"
                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                  placeholder="Working Hours"
                  className="border rounded-md px-3 py-2 mb-4"
                />
              </div>
  
              <div className="flex items-center justify-around p-5 border-t border-solid border-gray-300">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 bg-black opacity-25"></div>
      </div>
    );
  };
  
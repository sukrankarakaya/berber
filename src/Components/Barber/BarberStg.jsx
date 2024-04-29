import React, { useState } from "react";
import { CiEdit } from 'react-icons/ci';
import { CiPhone } from "react-icons/ci";
import { PiMapPinLineThin } from "react-icons/pi";
import { Button, Modal, Box } from "@mui/material";
import { CiCircleRemove } from "react-icons/ci";
import { InputSwitch } from 'primereact/inputswitch';
import { DataTable } from 'primereact/datatable';




const BarberDetails = () => {
    const [metaKey, setMetaKey] = useState(false);
    const [selectedCell, setselectedCell] = useState(null);

  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [isBarberPhoneNumberModalOpen, setIsBarberPhoneNumberModalOpen] = useState(false);

  const [barberName, setBarberName] = useState("Barberman - Haircut styling & massage");
  const [barberPhoneNumber, setBarberPhoneNumber] = useState("(0850) 308 30 93");
  const [barberAddress, setBarberAddress] = useState("Suadiye Mah Kazım Özalp sokak Alp Yalman Plaza No:60/1-2 Kadıköy İstanbul");
  const [workingHours, setWorkingHours] = useState([
    { day: "Pazartesi", hours: "08:30 - 20:00" },
    { day: "Salı", hours: "08:30 - 20:00" },
    { day: "Çarşamba", hours: "08:30 - 20:00" },
    { day: "Perşembe", hours: "08:30 - 20:00" },
    { day: "Cuma", hours: "08:30 - 20:00" },
    { day: "Cumartesi", hours: "yokuz" },
    { day: "Pazar", hours: "Kapalı" },
  ]);

  const openNameModal = () => {
    setIsNameModalOpen(true);
  };

  const openAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const openHoursModal = () => {
    setIsHoursModalOpen(true);
  };

  const openBarberPhoneNumberModal = () => {
    setIsBarberPhoneNumberModalOpen(true);
  };

  const closeModals = () => {
    setIsNameModalOpen(false);
    setIsAddressModalOpen(false);
    setIsHoursModalOpen(false);
    setIsBarberPhoneNumberModalOpen(false);
  };

  const handleAddressChange = (newAddress) => {
    setBarberAddress(newAddress);
    closeModals();
  };

  const handleNameChange = (newName) => {
    setBarberName(newName);
    closeModals();
  };

  const handlePhoneNumberChange = (newPhoneNumber) => {
    setBarberPhoneNumber(newPhoneNumber);
    closeModals();
  };

  const handleHoursChange = (index, newHours) => {
    const updatedHours = [...workingHours];
    updatedHours[index].hours = newHours;
    setWorkingHours(updatedHours);
};


  return (
    <div className="bg-light">
      <div className="flex flex-col pt-24 px-44">
        <div className="w-[1050px] bg-white border-2 border-slate-200 rounded-lg p-3">
          <h1 className="text-2xl font-bold">
            {barberName}
            <button onClick={openNameModal}><CiEdit size={20} /></button>
          </h1>

          <div className="flex flex-crow p-3 gap-4">
            <div className="flex flex-col p-3">
              <img
                src="../../../public/Image/barber4.jpg"
                alt=""
                className="w-96 h-[470px] border border-secondary rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col p-3 w-[590px] gap-4">
                <label className="text-xl w-full font-bold border-b border-secondary">
                  Telefon
                  <button onClick={openBarberPhoneNumberModal}><CiEdit size={20} /></button>
                </label>
                <div className="flex flex-row items-center gap-2">
                  <CiPhone fontSize={25} />
                  <p className="text-xl"> {barberPhoneNumber} </p>
                </div>

                <label className="text-xl w-full font-bold border-b border-secondary">
                  Adres
                  <button onClick={openAddressModal}><CiEdit size={20} /></button>
                </label>
                <div className="flex flex-row items-center gap-2">
                  <PiMapPinLineThin fontSize={32} />
                  <p className="text-sm">
                    {barberAddress}
                  </p>
                </div>
                {/* açma */}
                <div>
                    <label className="text-xl w-full font-bold border-b border-secondary flex flex-row">
                                    Çalışma Saatleri
                                    <InputSwitch className="ml-4" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                                </label>
                                <div className="flex flex-row items-center gap-2">
                                    <table className="w-[590px]">
                                        <tbody>
                                            {workingHours.map(({ day, hours }, index) => (
                                                <tr key={index} className=" ">
                                                    <td className="w-44 p-1 border-b border-secondary">
                                                        {day}
                                                    </td>
                                                    <td className="w-44 p-1 border-b border-secondary">
                                                        {metaKey ? (
                                                            <input
                                                                type="text"
                                                                value={hours}
                                                                onChange={(e) => handleHoursChange(index, e.target.value)}
                                                                className="w-full border rounded-md px-3 py-2 mb-4"
                                                            />
                                                        ) : (
                                                            hours
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                    </div>
                    </div>       
                {/* açma-son */}
            </div>
            </div>
          </div>
        </div>
      </div>

      {isNameModalOpen && (
        <NameModal
          initialName={barberName}
          onSave={handleNameChange}
          onClose={closeModals}
        />
      )}
      {isBarberPhoneNumberModalOpen && (
        <NumberModal
          initialNumber={barberPhoneNumber}
          onSave={handlePhoneNumberChange}
          onClose={closeModals}
        />
      )}

      {isAddressModalOpen && (
        <AddressModal
          initialAddress={barberAddress}
          onSave={handleAddressChange}
          onClose={closeModals}
        />
      )}

      {isHoursModalOpen && (
        <HoursModal
          initialHours={workingHours}
          onSave={handleHoursChange}
          onClose={closeModals}
        />
      )}
    </div>
  );
};

const NumberModal = ({ initialNumber, onSave, onClose }) => {
  const [number, setNumber] = useState(initialNumber);

  const handleSave = () => {
    onSave(number);
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-lg mx-auto my-6">
          <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none">
            <div className="flex justify-between items-center p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl font-semibold">Numaranızı Düzenleyin</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose} // Use onClose to close the modal
              >
                <CiCircleRemove className="decoration-black"/>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <input
                type="text"
                value={Number} // Bind input value to address state
                onChange={(e) => setNumber(e.target.value)} // Update address state on input change
                placeholder="Numaranızı Giriniz"
                className="w-full border rounded-md px-3 py-2 mb-4"
              />
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave} // Call handleSave function to save address
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-25"></div>
    </div>
  );
};

const NameModal = ({ initialName, onSave, onClose }) => {
  const [name, setName] = useState(initialName);

  const handleSave = () => {
    onSave(name);
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-lg mx-auto my-6">
          <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none">
            <div className="flex justify-between items-center p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl font-semibold">İsminizi Düzenleyiniz</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose} // Use onClose to close the modal
              >
                <CiCircleRemove className="decoration-black"/>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <input
                type="text"
                value={name} // Bind input value to address state
                onChange={(e) => setName(e.target.value)} // Update address state on input change
                placeholder="İsminizi Giriniz"
                className="w-full border rounded-md px-3 py-2 mb-4"
              />
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave} // Call handleSave function to save address
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-25"></div>
    </div>
  );
};

const AddressModal = ({ initialAddress, onSave, onClose }) => {
  const [address, setAddress] = useState(initialAddress);

  const handleSave = () => {
    onSave(address);
    // You may want to clear the input field after saving
    setAddress("");
    onClose(); // Close the modal after saving
  };
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-lg mx-auto my-6">
          <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none">
            <div className="flex justify-between items-center p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl font-semibold">Edit Address</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose} // Use onClose to close the modal
              >
                <CiCircleRemove className="decoration-black"/>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <input
                type="text"
                value={address} // Bind input value to address state
                onChange={(e) => setAddress(e.target.value)} // Update address state on input change
                placeholder="Enter your address"
                className="w-full border rounded-md px-3 py-2 mb-4"
              />
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave} // Call handleSave function to save address
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-25"></div>
    </div>
  );
};

const HoursModal = ({ initialHours, onSave, onClose }) => {
  const [hours, setHours] = useState(initialHours);

  const handleSave = () => {
    onSave(hours);
  };

  return (
    <div>
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-lg mx-auto my-6">
        <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex justify-between items-center p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold">Edit Address</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose} // Use onClose to close the modal
            >
              <CiCircleRemove className="decoration-black"/>
            </button>
          </div>

          <div className="relative p-6 flex-auto">
            <input
              type="text"
              value={hours} 
              onChange={(e) => setHours(e.target.value)} 
              placeholder="Enter your address"
              className="w-full border rounded-md px-3 py-2 mb-4"
            />
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSave} 
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed inset-0 bg-black opacity-25"></div>
  </div>
  );
};


export default BarberDetails;

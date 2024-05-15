import React, { useState } from 'react';

const Approval = () => {
  const [fullName, setFullName] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleBarberChange = (event) => {
    setSelectedBarber(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("İsim Soyisim:", fullName);
    console.log("Seçilen Berber:", selectedBarber);
    console.log("Seçilen İşlem:", selectedService);
    console.log("Seçilen Zaman:", selectedTime);
  };

  const barbers = [
    {
      "id": 1,
      "name": "Barber 1",
      "location": "Location 1",
      "rating": 4.5,
      "photo": "../../public/Image/barber1.jpg"
    },
    // Diğer berber verileri...
  ];

  const services = [
    {
      "name": "Saç Kesimi",
      "price": "150"
    },
    {
      "name": "Sakal Kesimi",
      "price": "50"
    },
    // Diğer işlem verileri...
  ];

  // Sabit saatler
  const times = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  return (
    <div className=''>
      <div className='border-2 rounded-lg p-4 shadow-md  w-full'>
        <form onSubmit={handleSubmit}>
          <div className="mb-7">
            <label className="block text-gray-700 text-sm font-bold mb-2 pt-4" htmlFor="fullName">
              İsim Soyisim:
            </label>
            <input
              type="text"
              id="fullName"
              className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="İsim Soyisim"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Berber Seçin:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedBarber}
              onChange={handleBarberChange}
            >
              <option value="">Berber Seçiniz</option>
              {barbers.map(barber => (
                <option key={barber.id} value={barber.name}>{barber.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              İşlem Seçin:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedService}
              onChange={handleServiceChange}
            >
              <option value="">İşlem Seçiniz</option>
              {services.map(service => (
                <option key={service.name} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Zaman Seçin:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedTime}
              onChange={handleTimeChange}
            >
              <option value="">Zaman Seçiniz</option>
              {times.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Approval;

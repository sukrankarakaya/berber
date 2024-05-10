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
    // Burada seçilen bilgileri kullanabilirsiniz.
    console.log("İsim Soyisim:", fullName);
    console.log("Seçilen Berber:", selectedBarber);
    console.log("Seçilen İşlem:", selectedService);
    console.log("Seçilen Zaman:", selectedTime);
  };

  // Dummy JSON verileri
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

  return (
    <div className=''>
      <div className='border-2 rounded-lg p-4 bg-white w-full'>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 pt-4"  htmlFor="fullName">
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
            <input
              type="time"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedTime}
              onChange={handleTimeChange}
            />
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

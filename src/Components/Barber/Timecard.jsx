import React, { useState } from 'react';

const fakeDatabase = {
  '08.30': true,
  '09.00': false,
  '09.30': true,
  '10.00': false,
  '10.30': true,
  '11.00': false,
  '11.30': false,
  '12.00': false,
  '13.30': true,
  '14.00': false,
  '14.30': true,
  '15.00': false,
  '15.30': true,
  '16.00': false,
  '16.30': true,
  '17.00': false,
  '17.30': true,
  '18.00': false,
  '18.30': true,
  '19.00': false,
};

const Timecard = () => {
  const hours = [
    '08.30', '09.00', '09.30', '10.00', '10.30',
    '11.00', '11.30', '12.00', '13.30', '14.00',
    '14.30', '15.00', '15.30', '16.00', '16.30',
    '17.00', '17.30', '18.00', '18.30', '19.00',
  ];

  const dividedHours = [];
  for (let i = 0; i < hours.length; i += 4) {
    dividedHours.push(hours.slice(i, i + 4));
  }

  const [availability, setAvailability] = useState({});

  const checkAvailability = () => {
    const newAvailability = {};
    hours.forEach(hour => {
      newAvailability[hour] = fakeDatabase[hour];
    });
    setAvailability(newAvailability);
  };

  useState(() => {
    checkAvailability();
  }, []);

  return (
  
    <div className="max-w-max flex flex-col border-2 border-black rounded-lg bg-white">
      <h5 className="w-full rounded-t-lg text-base font-semibold bg-white md:text-xl text-gray-800 p-6">
        Saatler
      </h5>
      <div className="grid grid-cols-4 py-5 px-2  gap-2 text-sm ">
        {dividedHours.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((hour, columnIndex) => (
              <div
                key={columnIndex}
                className={`px-4 py-4 mx-auto text-black border-2 border-black rounded-lg ${
                  !availability[hour] ? 'bg-transparent' : 'bg-primary text-white'
                }`}
              >
                {hour}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timecard;

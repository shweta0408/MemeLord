import React from 'react';

const PresaleRecord = () => {
  return (
    <div className="flex flex-col items-center justify-evenly overflow-hidden max-w-6xl w-full p-6 mb-4">
      <div
        className="flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mb-1"
        id="record"
      >
        <a href="#" className="text-black font-bold">
          PRESALE RECORD
        </a>
      </div>
      <div className="flex flex-row justify-around items-center w-full">
        <p className="mx-4 text-white font-bold">MemeLord Amount</p>
        <p className="mx-4 text-white font-bold">Time</p>
        <p className="mx-4 text-white font-bold">USD Amount</p>
      </div>
    </div>
  );
};

export default PresaleRecord;

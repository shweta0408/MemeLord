import React, { useState } from 'react';
import { Buy } from './buy';
import { BuyForUsers } from './buyForUser';
import { BuyWithPair } from './buyWithPair';
import { BuyForUserWithPair } from './buyForUserWithPair';

const BuyingOptions = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  // Function to handle the click on the Buy button
  const handleBuyButtonClick = (title) => {
    setSelectedTitle(title);
    setShowModal(true); // Set showModal to true to open the modal

    // Additional logic or actions related to the buy button click can be added here
  };

  const buttonConfig = [
    { title: 'Buy MemeLord', label: 'Buy' },
    { title: 'Buy MemeLord With Pair', label: 'Buy With Pair' },
    { title: 'Buy For Users', label: 'Buy For Users' },
    {
      title: 'Buy MemeLord With Pair For User',
      label: 'Buy MemeLord With Pair For User',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-amber-400 to-amber-800 rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mb-16">
      <div className="flex flex-col w-full bg-white rounded-2xl p-4 mb-6">
        <p className="text-amber-600 text-center font-bold text-xl mb-2">
          MemeLord Buying Options
        </p>
        <div className="flex flex-wrap justify-center">
          {buttonConfig.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleBuyButtonClick(btn.title)}
              className="m-2 min-w-48 py-2 px-4 rounded-3xl bg-gradient-to-b from-amber-400 to-amber-800 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-amber-400 to-amber-800 p-8 rounded-xl shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-5 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              X
            </button>

            {selectedTitle === buttonConfig[0].title && (
              <Buy selectedTitle={selectedTitle} />
            )}
            {selectedTitle === buttonConfig[1].title && (
              <BuyWithPair selectedTitle={selectedTitle} />
            )}
            {selectedTitle === buttonConfig[2].title && (
              <BuyForUsers selectedTitle={selectedTitle} />
            )}
            {selectedTitle === buttonConfig[3].title && (
              <BuyForUserWithPair selectedTitle={selectedTitle} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyingOptions;

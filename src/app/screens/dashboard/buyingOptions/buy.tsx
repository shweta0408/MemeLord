import React, { useState } from 'react';

export const Buy = ({ selectedTitle }) => {
  const [amount, setAmount] = useState('');

  // Function to handle click on amount buttons
  const handleAmountClick = (num) => {
    setAmount(num.toString()); // Update the input field with the clicked amount
  };

  return (
    <div
      className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mx-auto mt-6"
      style={{ maxHeight: '80vh', overflowY: 'auto', maxWidth: '95vw' }}
    >
      <p className="text-2xl font-bold text-amber-900 mt-6 text-center">
        {selectedTitle}
      </p>
      <p className="text-sm font-bold text-amber-900 mt-2 mb-6 text-center">
        USD Amount
      </p>
      <div className="flex flex-wrap justify-center mb-4">
        {[10, 50, 100, 500, 1000, 2000].map((num, index) => (
          <button
            key={index}
            className="w-28 sm:w-40 m-1 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-amber-900 hover:text-white shadow-sm hover:bg-amber-700 focus:outline-none transition-colors duration-300"
            onClick={() => handleAmountClick(num)}
          >
            {num} USD
          </button>
        ))}
      </div>
      <input
        className="border-2 p-3 m-2 rounded-md w-full"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label className="text-amber-700 font-bold mb-4">
        Selected Token:
        <select className="m-1 border-2 py-1 px-3 bg-gray-200 rounded-md min-w-full">
          <option>USDT</option>
          <option>TBNB</option>
          <option>LORDFOUNDER</option>
          <option>BNB</option>
          <option>MATIC</option>
          <option>ETH</option>
          <option>BTCB</option>
          <option>USDC</option>
          <option>SOL</option>
          <option>AVAX</option>
          <option>TRX</option>
          <option>XRP</option>
        </select>
      </label>
      <button className="w-full m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Approve
      </button>
      <button className="w-full m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Buy
      </button>
    </div>
  );
};

export default Buy;

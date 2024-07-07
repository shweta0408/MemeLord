import React, { useState } from 'react';

export const BuyForUsers = ({ selectedTitle }) => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [selectedToken, setSelectedToken] = useState('USDT');

  const handleAmountClick = (num) => {
    setAmount(num.toString()); // Update the input field with the clicked amount
  };

  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
  };

  return (
    <div
      className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mx-auto mt-6"
      style={{ maxHeight: '80vh', overflowY: 'auto', maxWidth: '95vw' }}
    >
      <p className="text-2xl font-bold text-amber-900 mt-6 mb-4 text-center">
        {selectedTitle}
      </p>

      <p className="text-sm font-bold text-amber-900 mt-2 mb-4 text-center">
        USD Amount
      </p>
      <div className="flex flex-wrap justify-center mb-4">
        {[10, 50, 100, 500, 1000, 2000].map((num, index) => (
          <button
            key={index}
            className="w-28 sm:w-40 m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-amber-900 hover:text-white shadow-sm hover:bg-amber-700 focus:outline-none transition-colors duration-300"
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

      <p className="text-sm font-bold text-amber-900 mt-4 mb-2 text-center">
        Address
      </p>
      <input
        className="border-2 p-3 m-2 rounded-md w-full"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <label className="text-amber-700 font-bold block mt-4">
        Selected Token:
        <select
          className="m-1 border-2 py-1 px-3 bg-gray-200 rounded-md w-full"
          onChange={handleTokenChange}
          value={selectedToken}
        >
          <option value="USDT">USDT</option>
          <option value="TBNB">TBNB</option>
          <option value="LORDFOUNDER">LORDFOUNDER</option>
          <option value="BNB">BNB</option>
          <option value="MATIC">MATIC</option>
          <option value="ETH">ETH</option>
          <option value="BTCB">BTCB</option>
          <option value="USDC">USDC</option>
          <option value="SOL">SOL</option>
          <option value="AVAX">AVAX</option>
          <option value="TRX">TRX</option>
          <option value="XRP">XRP</option>
        </select>
      </label>

      <div className="flex justify-center mt-6">
        <button className="w-28 sm:w-40 m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none transition-colors duration-300">
          Approve
        </button>
        <button className="w-28 sm:w-40 m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none transition-colors duration-300">
          Buy
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

export const BuyWithPair = ({ selectedTitle }) => {
  const [usdtPercentage, setUsdtPercentage] = useState(0);
  const [selectedToken, setSelectedToken] = useState('USDT');
  const [amount, setAmount] = useState('');

  const handlePercentageChange = (event) => {
    setUsdtPercentage(event.target.value);
  };

  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
  };

  const handleAmountClick = (num) => {
    setAmount(num.toString()); // Update the input field with the clicked amount
  };

  const approveButtonText = `Approve ${selectedToken}`;

  return (
    <div
      className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mx-auto mt-6"
      style={{ maxHeight: '80vh', overflowY: 'auto', maxWidth: '95vw' }}
    >
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        {selectedTitle}
      </h2>
      <p className="text-sm font-bold text-amber-900 mb-4">USD Amount</p>
      <div className="flex flex-wrap justify-center mb-4">
        {[10, 50, 100, 500, 1000, 2000].map((num, index) => (
          <button
            key={index}
            className="w-28 sm:w-32 md:w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-amber-900 hover:text-white shadow-sm hover:bg-amber-700 focus:outline-none transition-colors duration-300"
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

      <label className="text-amber-700 font-bold mb-2 md:mb-0">
        Selected Token:
        <select
          className="m-1 border-2 py-1 px-3 bg-gray-200 rounded-md min-w-[200px]"
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

      <p className="text-sm font-bold text-amber-900 mr-2">
        Percentage Breakdown
      </p>
      <div className="flex flex-col mt-2 md:mt-4">
        <input
          type="range"
          min="0"
          max="100"
          value={usdtPercentage}
          onChange={handlePercentageChange}
          className="md:m-0 w-full md:w-auto"
        />

        <p className="text-amber-900 mt-2 mb-2">{usdtPercentage}%</p>
        <p className="text-amber-900 mb-4">
          {selectedToken} PERCENT CHANGE: {(usdtPercentage * amount) / 100}
        </p>
      </div>
      <div className="flex justify-center">
        <button className="w-28 sm:w-32 md:w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none transition-colors duration-300">
          Approve
        </button>
        <button className="w-28 sm:w-32 md:w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none transition-colors duration-300">
          {approveButtonText}
        </button>
        <button className="w-28 sm:w-32 md:w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none transition-colors duration-300">
          Buy
        </button>
      </div>
    </div>
  );
};

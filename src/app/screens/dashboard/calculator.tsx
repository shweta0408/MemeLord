import React, { useState } from 'react';

const Calculator = () => {
  const [showModal, setShowModal] = useState(false);
  const [usdtAmount, setUsdtAmount] = useState(0);
  const [tokenPrice, setTokenPrice] = useState('');
  const [numDays, setNumDays] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const price = parseFloat(tokenPrice);
    const days = parseInt(numDays);

    if (isNaN(price) || isNaN(days) || isNaN(usdtAmount) || usdtAmount <= 0) {
      alert('Please enter valid inputs');
      return;
    }

    const finalPrice = price * Math.pow(1.01, days);

    let bonusPercentage = 0;
    if (usdtAmount >= 2000) {
      bonusPercentage = 100;
    } else if (usdtAmount >= 1000) {
      bonusPercentage = 80;
    } else if (usdtAmount >= 500) {
      bonusPercentage = 50;
    } else if (usdtAmount >= 100) {
      bonusPercentage = 30;
    } else if (usdtAmount >= 50) {
      bonusPercentage = 10;
    }

    const tokenQuantity = usdtAmount / price;
    const bonusTokens = tokenQuantity * (bonusPercentage / 100);
    const totalTokens = tokenQuantity + bonusTokens;
    const totalValue = totalTokens * finalPrice;

    setResult({
      finalPrice: finalPrice.toFixed(10),
      totalTokens: totalTokens.toFixed(10),
      bonusTokens: bonusTokens.toFixed(10),
      bonusPercentage,
      totalValue: totalValue.toFixed(10),
    });
  };

  const handleClear = () => {
    setTokenPrice('');
    setNumDays('');
    setUsdtAmount(0);
    setResult(null);
  };

  return (
    <div className="flex flex-row items-center justify-evenly bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mb-16">
      <button
        onClick={() => setShowModal(true)}
        className="w-full rounded-3xl bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Calculate
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
            <div className="bg-gray-100 px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-2xl leading-6 font-medium text-gray-900">
                    CALCULATOR
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="tokenPrice"
                        className="block text-sm font-medium text-gray-700"
                      >
                        $MemeLord Price (in USDT):
                      </label>
                      <input
                        type="number"
                        id="tokenPrice"
                        value={tokenPrice}
                        onChange={(e) => setTokenPrice(e.target.value)}
                        className="mt-1 px-3 py-2 border rounded-md w-full shadow-sm sm:text-sm border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="numDays"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Number of Days:
                      </label>
                      <input
                        type="number"
                        id="numDays"
                        value={numDays}
                        onChange={(e) => setNumDays(e.target.value)}
                        className="mt-1 px-3 py-2 border rounded-md w-full shadow-sm sm:text-sm border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="usdtAmountInput1"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Select USDT Amount:
                      </label>
                      <div className="flex flex-wrap">
                        {[10, 50, 100, 500, 1000, 2000].map((num, index) => (
                          <button
                            key={index}
                            onClick={() => setUsdtAmount(num)}
                            className="w-14 m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-amber-900 hover:text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300"
                          >
                            {num} USD
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex ">
              <button
                onClick={handleCalculate}
                className="w-1/3 m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
              <button
                onClick={handleClear}
                className="w-1/3 m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Clear
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-1/3 m-2 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Close
              </button>
            </div>
            {result && (
              <div className="px-4 py-3 sm:px-6">
                <p
                  id="finalPrice"
                  className="text-sm text-gray-700"
                >{`Final $MemeLord Price after ${numDays} days: $${result.finalPrice}`}</p>
                <p
                  id="totalTokens"
                  className="text-sm text-gray-700"
                >{`Total $MemeLords you can buy: ${result.totalTokens} (including ${result.bonusTokens} bonus tokens - ${result.bonusPercentage}% bonus)`}</p>
                <p
                  id="totalValue"
                  className="text-sm text-gray-700"
                >{`Total value in USDT after ${numDays} days: $${result.totalValue}`}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;

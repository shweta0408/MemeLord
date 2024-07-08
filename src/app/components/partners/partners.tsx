import React from 'react';

function Partners() {
  return (
    <div
      className="flex flex-col items-center justify-evenly mt-10 mb-20 p-6"
      id="Partner"
    >
      <div className="flex flex-col items-center justify-evenly app-bg  rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 ">
        {/* Left Section for Content */}
        <h2 className="text-4xl font-bold mb-10 text-white text-center">
          Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center mb-10">
          <button className="flex items-center bg-transparent hover:bg-amber-600 transform hover:scale-110 transition duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            <img
              src="pancakeswap.png"
              alt="Pancakeswap"
              className="w-48 h-auto"
            />
          </button>
          <button className="flex items-center bg-transparent hover:bg-amber-600 transform hover:scale-110 transition duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            <img src="bscscan.png" alt="bscscan" className="w-48 h-auto" />
          </button>
          <button className="flex items-center bg-transparent hover:bg-amber-600 transform hover:scale-110 transition duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            <img src="gecko.png" alt="gecko" className="w-48 h-auto" />
          </button>
          <button className="flex items-center bg-transparent hover:bg-amber-600 transform hover:scale-110 transition duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            <img src="./cmc.svg" alt="CoinMarketCap" className="w-48 h-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partners;

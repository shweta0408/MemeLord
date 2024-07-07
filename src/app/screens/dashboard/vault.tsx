import React from 'react';

const Vault = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-evenly bg-gradient-to-b from-amber-400 to-amber-800 rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mb-16">
      {/* Storage Vault */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-3 sm:m-5 flex flex-col justify-center min-w-48">
        <p className="text-center">Storage Vault</p>
        <p className="text-center">$ 207.78</p>
      </div>
      {/* Market Cap */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-3 sm:m-5 min-w-48">
        <p className="text-center">Market Cap</p>
        <p className="text-center">$ 207.78</p>
      </div>
      {/* MemeLord Price */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-3 sm:m-5 min-w-48">
        <p className="text-center">MemeLord Price</p>
        <p className="text-center">$ 207.78</p>
      </div>
    </div>
  );
};

export default Vault;

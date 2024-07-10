import React, { useState } from 'react';
import { Header } from '../../components/header/header';
import ParticlesComponent from '../../components/particles/particles';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
];

function Wallet() {
  const [balance, setBalance] = useState(0);

  const handleDeposit = () => {
    setBalance(balance + 100); // Simulate a deposit of 100 units
  };

  return (
    <div>
      <ParticlesComponent />
      <div className="flex flex-col items-center justify-evenly app-bg min-h-screen p-6">
        <Header navigation={navigation} />
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 w-60">
          <h2 className="text-2xl font-semibold mb-4">Wallet Balance</h2>
          <p className="text-xl mb-4">${balance}</p>
          <button
            onClick={handleDeposit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
          >
            Deposit 100
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;

import React from 'react';

const Rewards = () => {
  return (
    <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-amber-400 to-amber-800 rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mb-16">
      <div className="flex flex-row w-full bg-white mb-5 justify-center rounded-2xl p-3">
        <p className="text-amber-600 text-center font-bold text-2xl mb-4">
          Rewards
        </p>
      </div>
      <div className="flex flex-col w-full bg-white rounded-2xl p-3">
        <button className="w-full my-4 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm  hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          CLAIM REWARDS
        </button>

        <button className="w-full my-4 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm   hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          CLAIM VESTED TOKENS
        </button>
      </div>
    </div>
  );
};

export default Rewards;

import React from 'react';

const UserDashboard = () => {
  return (
    <div
      className="flex flex-col items-center justify-evenly app-bg  rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mb-16"
      id="dashboard"
    >
      <div className="flex flex-row w-full bg-white mb-5 justify-center rounded-2xl p-3">
        <p className="text-amber-600 text-center font-bold text-2xl mb-4">
          User Dashboard
        </p>
      </div>
      <div className="flex flex-row flex-wrap w-full justify-evenly rounded-2xl p-3">
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Active Rank
        </div>
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Total Buy
        </div>
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Rank Bonus
        </div>
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Total Users
        </div>
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Reward Claimed
        </div>
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Other Leg
        </div>
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Strong Leg
        </div>
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Direct Users
        </div>
        <div className="flex items-center justify-center m-3 w-80 h-24 rounded-md bg-white p-6 text- font-semibold text-amber-700 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Direct Bonus
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

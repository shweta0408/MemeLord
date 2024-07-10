import React from 'react';
import { Header } from '../../components/header/header';
import ParticlesComponent from '../../components/particles/particles';

const navigation = [
  { name: 'Founder Dashboard', href: '/Team' },
  { name: 'Home', href: '/' },
  { name: 'Connect', href: '/' },
  { name: 'Team', href: '/team' },
  // { name: 'Team', href: '/Team' },
];

export const FoundersPage = () => {
  return (
    <>
      <ParticlesComponent />
      <div className="flex flex-col items-center justify-evenly app-bg min-h-screen p-6">
        <Header navigation={navigation} />

        <div className="flex flex-col sm:flex-row items-center justify-evenly  max-w-6xl w-full p-6 mt-28 mb-14">
          <div className="app-bg flex-1 p-4 rounded-lg shadow-md flex flex-col justify-center">
            <div className="bg-white flex-1 p-4 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-center">LordFounder Balance</p>
              <p className="text-center">-</p>
            </div>
          </div>

          {/* Image to be displayed here  */}
          <div className="flex-1 flex justify-center align-top">
            <img
              className="w-40 mt-2 " // Added margin to separate from sides
              src="/dash_logo.png"
              alt="memelord"
            />
          </div>

          {/* Rank Achieved */}
          <div className="app-bg flex-1 p-4 rounded-lg shadow-md flex flex-col justify-center">
            <div className="bg-white flex-1 p-4 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-center">Team Buys</p>
              <p className="text-center">-</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-evenly app-bg rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mt-3 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {/* Total Buys */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-center">Total Buys</p>
              <p className="text-center">-</p>
            </div>
            {/* Rank Achieved */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-center">Rank Achieved</p>
              <p className="text-center">-</p>
            </div>
            {/* Reward */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-center">Reward</p>
              <p className="text-center">-</p>
            </div>
            {/* Direct Buys */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-center">Direct Buys</p>
              <p className="text-center">-</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-center">Extra </p>
              <p className="text-center">-</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-center">Extra</p>
              <p className="text-center">-</p>
            </div>
          </div>
        </div>

        {/*Team Details*/}
        <div
          className="flex flex-col sm:flex-row items-center justify-evenly app-bg  rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mb-10"
          id="teamsection"
        >
          <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mt-16 mb-16 ">
            <a href="#" className="text-2xl  font-bold">
              TEAM DETAILS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

import React from 'react';
import { Header } from '../../components/header/header';
import ParticlesComponent from '../../components/particles/particles';

const navigation = [
  { name: 'Founder', href: '/founder' },
  { name: 'Buy', href: '#' },
  { name: 'History', href: '#' },
  { name: 'Income', href: '#' },
  { name: 'Referral', href: '/dashboard#referal' },
  { name: 'Contract', href: '/dashboard#contract' },
  { name: 'Records', href: '/dashboard#record' },
  { name: 'Home', href: '/' },
  { name: 'Admin', href: '/admin' },
];

function Team() {
  return (
    <>
      <ParticlesComponent />
      <div className="flex flex-col items-center justify-evenly app-bg min-h-screen p-6">
        <Header navigation={navigation} />
        <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mb-16 mt-24">
          <h2 className="text-2xl font-bold mb-6">Welcome To $MemeLord</h2>

          <div className="flex  items-center justify-evenly app-bg rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6 mt-3 mb-16">
            <div className="gap-4 w-full">
              {/* Total Buys */}
              <div className="font-bold bg-white p-4 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 1</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              {/* Rank Achieved */}
              <div className="font-bold bg-white p-4  mt-5 mb-8 b-10 pt-3 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 2</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              {/* Reward */}
              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 3</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              {/* Direct Buys */}
              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 4</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 5 </p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 6</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 7</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 8</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 9</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 10</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 11</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 12</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 13</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 14</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 15</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 16</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 17</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 18</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 19</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 20</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 21</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 22</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 23</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 24</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>

              <div className="font-bold bg-white p-4 mb-10 rounded-lg shadow-md flex flex-col justify-center">
                <p className="text-center">Level 25</p>
              </div>

              <div className="flex flex-row justify-evenly mt-1 mb-2 font-bold text-white">
                <p>Referal Address</p>
                <p>Token Buys </p>
                <p>Reward</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;

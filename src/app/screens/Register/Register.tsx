import React from 'react';
import ParticlesComponent from '../../components/particles/particles';
import { Header } from '../../components/header/header';

const navigation = [{ name: 'Home', href: '/' }];
function Register() {
  return (
    <>
      <ParticlesComponent />
      <div className="flex flex-col items-center justify-evenly app-bg min-h-screen p-6">
        <Header navigation={navigation} />
        <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg overflow-hidden max-w-xl w-full p-6 mb-16">
          <h2 className="text-2xl font-bold mb-6">Welcome To $MemeLord</h2>
          <div className="w-full max-w-md space-y-4">
            <label
              htmlFor="referer"
              className="block text-sm font-medium text-gray-700"
            >
              Check Referrer
            </label>
            <input
              type="text"
              id="referer"
              name="referer"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <div className="w-full max-w-md space-y-4 mt-4">
              <button className="w-full rounded-3xl app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 hover:text-amber-100 transition-colors duration-300">
                Login
              </button>
              <button className="w-full rounded-3xl app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 hover:text-amber-100 transition-colors duration-300">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

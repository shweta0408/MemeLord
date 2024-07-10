import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import ParticlesComponent from '../../components/particles/particles';

const navigation = [{ name: 'Home', href: '/' }];

function RegisterScreen() {
  return (
    <>
      <ParticlesComponent />
      <div className="flex flex-col items-center justify-evenly app-bg min-h-screen p-6">
        <Header navigation={navigation} />
        <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg overflow-hidden max-w-xl w-full p-6 mb-16">
          <h2 className="text-2xl font-bold mb-6">Enter the details </h2>
          <div className="w-full max-w-md space-y-4">
            <label
              htmlFor="referer"
              className="block text-xl font-medium text-gray-700"
            >
              Enter Name
            </label>
            <input
              type="text"
              id="name"
              name="Enter Name"
              placeholder="Enter Your Name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <label
              htmlFor="referer"
              className="block text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="Enter Name"
              placeholder="Enter Your Email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <label
              htmlFor="referer"
              className="block text-xl font-medium text-gray-700"
            >
              Contact
            </label>
            <input
              type="text"
              id="cotact"
              name="Enter Name"
              placeholder="Enter Your Contact"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="w-full max-w-md space-y-4 mt-4">
            <button className="w-full rounded-3xl app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 hover:text-amber-100 transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterScreen;

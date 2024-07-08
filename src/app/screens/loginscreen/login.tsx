import React from 'react';
import { Header } from '../../components/header/header';
import ParticlesComponent from '../../components/particles/particles';

const Login = () => {
  const navigation = [{ name: 'Home', href: '/' }];

  return (
    <>
      <ParticlesComponent />
      <div className="flex flex-col items-center justify-evenly app-bg min-h-screen p-6">
        <Header navigation={navigation} />
        <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg overflow-hidden max-w-xl w-full p-6 mb-16">
          <h2 className="text-2xl font-bold mb-6">Welcome To $MemeLord</h2>
          <div className="w-full max-w-md space-y-4">
            <button className="w-full rounded-3xl app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 hover:text-amber-100 transition-colors duration-300">
              Login
            </button>
            <button className="w-full rounded-3xl app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 hover:text-amber-100 transition-colors duration-300">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

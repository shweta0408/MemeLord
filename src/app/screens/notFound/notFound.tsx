// ./screens/notFound/NotFound.js
import React from 'react';
import './NotFound.css';
import ParticlesComponent from '../../components/particles/particles';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-700 relative overflow-hidden">
      <ParticlesComponent />
      <div className="text-center bg-white p-20 shadow-lg rounded-full relative z-20">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl text-red-400 mb-8">Page Not Found</p>
        <a
          href="/"
          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-800"
        >
          Go to Home
        </a>
      </div>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className={`bubble bubble-${index + 1}`}>
          <h1 className="text-2xl font-bold text-red-500 text-center">
            {index > 1 ? 'Not Found' : '404'}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default NotFound;

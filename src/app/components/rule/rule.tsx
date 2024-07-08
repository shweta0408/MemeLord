import React from 'react';

function Rule() {
  return (
    <div
      className="flex flex-col items-center justify-center mt-10 p-6"
      id="rule"
    >
      <div className="flex flex-col md:flex-row items-center justify-center app-bg  rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6">
        {/* Left Section for Content */}
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <p className="text-green-500 font-mono">$MemeLord</p>
          <h2 className="text-4xl font-bold mb-2">
            Rule the Meme Coin World with Meme Lord
          </h2>
          <p className="text-gray-900 mt-4 md:mt-6 mb-4 md:mb-7">
            Brace yourselves! Meme Lord, the undisputed king of meme coins, has
            roared onto the scene, ready to dominate the meme coin universe.
            This isn't just another coin—this is the Meme Lord, destined to be
            bigger and better than anything the crypto world has ever seen.
          </p>
          <a href="#" className="text-black font-bold mt-2 md:mt-5">
            Follow us on X
          </a>
        </div>

        {/* Right Section for Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/memelord.png"
            alt="memelord"
            className="w-full md:max-w-md"
            style={{ maxWidth: '300px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Rule;

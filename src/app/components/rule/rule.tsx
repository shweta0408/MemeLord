import React from 'react';

function Rule() {
  return (
    <div className="flex flex-col items-center justify-evenly mt-10" id="rule">
      <div className="flex flex-row items-center justify-evenly bg-gradient-to-b from-yellow-400 to-amber-600 rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6">
        {/* Left Section for Content */}
        <div className="p-4 " style={{ flex: '0.5' }}>
          <p className="text-green-500 font-mono">$MemeLord</p>
          <h2 className="text-4xl font-bold mb-2">
            Rule the Meme Coin World with Meme Lord
          </h2>
          <p className="text-gray-900 mt-10 mb-7">
            Brace yourselves! Meme Lord, the undisputed king of meme coins, has
            roared onto the scene, ready to dominate the meme coin universe.
            This isn't just another coin—this is the Meme Lord, destined to be
            bigger and better than anything the crypto world has ever seen.
          </p>
          <a href="#" className="text-black font-bold mt-5">
            Follow us on X
          </a>
        </div>

        {/* Right Section for Image */}
        <div
          style={{
            flex: '0.5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/memelord.png"
            alt="memelord"
            style={{ width: '300px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Rule;

import React from 'react';

function HowToBuy() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 " id="buy">
      <h1 className="text-4xl font-bold mb-8">How To Buy</h1>
      <div className="flex flex-wrap justify-center max-w-6xl w-full p-6">
        {/* Box 1 */}
        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80">
          <div className="flex flex-col justify-center align-middle items-center mb-4">
            <img src="/htb-trustwallet-01.svg" width={'80px'} />
            <p className="text-lg">
              Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80 ">
          <div className="flex flex-col justify-center align-middle items-center mb-4">
            <img src="/htb-bnb-01.svg" width={'80px'} />
            <p className="text-lg">
              Step 2: Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80">
          <div className="flex flex-col justify-center align-middle items-center mb-4">
            <img src="/presaleNew1.png" width={'80px'} />
            <p className="text-lg">
              Step 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
          </div>
        </div>
        {/* Box 4 */}
        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80">
          <div className="flex flex-col justify-center align-middle items-center mb-4">
            <img src="/4.png" width={'80px'} />
            <p className="text-lg">
              Step 4: Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;

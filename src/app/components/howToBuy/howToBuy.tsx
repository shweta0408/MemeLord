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
            <p className="text-2xl font-bold mb-4 mt-3 text-black">
              Download Trust Wallet
            </p>
            <p className="text-lg align-">
              Download & setup Trust Wallet (an app for your phone)
            </p>
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80 ">
          <div className="flex flex-col justify-center align-middle items-center mb-4">
            <img src="/htb-bnb-01.svg" width={'80px'} />
            <p className="text-2xl font-bold mb-4 mt-3 text-black">
              Buy and send BNB to Trust Wallet
            </p>
            <p className="text-lg align-">
              Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.).
              Transfer the BNB to your BSC wallet address. BSC addresses start
              with a "0x"
            </p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80">
          <div className="flex flex-col justify-center align-middle items-center mb-4">
            <img src="/presaleNew1.png" width={'80px'} />
            <p className="text-2xl font-bold mb-4 mt-3 text-black">
              Head on Buy now!
            </p>
            <p className="text-lg align-">
              Click Buy now Register (require referral) / Login (Metamask/Trust)
              Buy in with minimum 10 usd From Buy Section of Dashboard in
              accepted tokens and coins.
            </p>
          </div>
        </div>
        {/* Box 4 */}
        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80">
          <div className="flex flex-col justify-center align-middle items-center mb-4">
            <img src="/4.png" width={'80px'} />
            <p className="text-2xl font-bold mb-4 mt-3 text-black">
              View $MemeLord and HOLD!
            </p>
            <p className="text-lg">
              Now you need to add MemeLord to your Trust Wallet to view your
              $MemeLord. Lastly HOLD!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;

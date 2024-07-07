import React from 'react';
import { Header } from '../../components/header/header';
import Footer from '../footer/footer';

const WhitePaper = () => {
  const navigation = [{ name: 'Wallet', href: '' }];

  return (
    <div>
      <Header navigation={navigation} />
      <div className="flex flex-col items-center justify-evenly bg-white min-h-screen p-6 mt-16">
        <h1 className="text-3xl font-bold">The Reign Begins</h1>
        <div className="w-full max-w-2xl space-y-4 bg-gradient-to-b from-amber-600 to-amber-800 rounded-2xl p-5">
          <p>
            Meme Lord brings a groundbreaking approach to presale buying and
            trading, ensuring that our community thrives. Here’s why Meme Lord
            is set to rule:
          </p>

          <p>- Exclusive Presale:</p>
          <p>
            Only the chosen ones—investors and community leaders—can initially
            buy Meme Lord tokens, with massive bonuses up to 100%!
          </p>

          <p>- Daily Price Pump:</p>
          <p>
            Our unique mechanism guarantees the token price rises by 1% daily,
            compounding your gains like never before.
          </p>

          <p>- Smart Contract Security:</p>
          <p>
            With transactions governed by robust smart contracts on the Polygon
            chain, your investment is secure and transparent.
          </p>
        </div>
      </div>{' '}
      <Footer />
    </div>
  );
};

export default WhitePaper;

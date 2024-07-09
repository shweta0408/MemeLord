import React from 'react';

import ParticlesComponent from '../../components/particles/particles';
import BuyingOptions from '../dashboard/buyingOptions';
import { Header } from '../../components/header/header';

const navigation = [{ name: 'Home', href: '/' }];

function BuyNow() {
  return (
    <>
      <ParticlesComponent />
      <div
        className="flex flex-col items-center justify-evenly app-bg min-h-screen p-6"
        id="buyingOption"
      >
        <Header navigation={navigation} />

        <BuyingOptions />
      </div>
    </>
  );
}

export default BuyNow;

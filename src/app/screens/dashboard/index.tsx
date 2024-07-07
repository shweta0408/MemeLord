import React, { useCallback } from 'react';

import BuyingOptions from './buyingOptions';
import UserDashboard from './userDashboard';
import Rewards from './rewards';
import SmartContract from './smartContract';
import Referral from './referral';
import Vault from './vault';
import PresaleRecord from './presaleRecord';
import Calculator from './calculator';
import { Header } from '../../components/header/header';

import ParticlesComponent from '../../components/particles/particles';
const navigation = [
  { name: 'Tokens', href: '#' },
  { name: 'Buy', href: '#' },
  { name: 'History', href: '#' },
  { name: 'Income', href: '#' },
  { name: 'Referral', href: '/dashboard#referal' },
  { name: 'Contract', href: '/dashboard#contract' },
  { name: 'Teams', href: '#' },
  { name: 'Records', href: '/dashboard#record' },
  { name: 'Home', href: '/' },
];

export const Dashboard: React.FC = () => {
  return (
    <>
      <ParticlesComponent />
      <Header navigation={navigation} />
      <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-amber-600 to-amber-800 min-h-screen p-6">
        <img
          className="mt-20"
          src="/revolving.png"
          alt="memelord"
          style={{ width: '200px', height: 'auto' }}
        />
        <Vault />
        <Referral />
        <Calculator />
        <BuyingOptions />
        <UserDashboard />
        <Rewards />
        <SmartContract />
        <PresaleRecord />
      </div>
    </>
  );
};

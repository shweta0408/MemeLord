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
  { name: 'Founder', href: '/founder' },
  { name: 'Buy', href: '#' },
  { name: 'History', href: '#' },
  { name: 'Income', href: '#' },
  { name: 'Referral', href: '/dashboard#referal' },
  { name: 'Contract', href: '/dashboard#contract' },
  { name: 'Records', href: '/dashboard#record' },
  { name: 'Home', href: '/' },
  { name: 'Admin', href: '/admin' },
];

export const Dashboard: React.FC = () => {
  return (
    <>
      <ParticlesComponent />
      <Header navigation={navigation} />
      <div className="flex flex-col items-center justify-evenly min-h-screen p-6 app-bg ">
        <img
          className="mt-20"
          src="/dash_logo.png"
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

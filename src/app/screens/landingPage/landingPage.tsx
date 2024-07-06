'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Header } from '../../components/header/header';
import { HeroBanner } from '../../components/hero/hero';

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Header />
      <HeroBanner />
    </div>
  );
}

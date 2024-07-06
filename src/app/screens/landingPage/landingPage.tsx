'use client';

import { Header } from '../../components/header/header';
import { HeroBanner } from '../../components/hero/hero';
import Rule from '../../components/rule/rule';
import Roadmap from '../../components/roadmap/roadmap';
import HowToBuy from '../../components/howToBuy/howToBuy';
import Partners from '../../components/partners/partners';
import Footer from '../../components/footer/footer';

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Header />
      <HeroBanner />
      <Rule />
      <Roadmap />
      <HowToBuy />
      <Partners />
      <Footer />
    </div>
  );
}

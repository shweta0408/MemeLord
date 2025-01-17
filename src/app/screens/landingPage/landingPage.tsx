// 'use client';

// import { Header } from '../../components/header/header';
// import { HeroBanner } from '../../components/hero/hero';
// import Rule from '../../components/rule/rule';
// import Roadmap from '../../components/roadmap/roadmap';
// import HowToBuy from '../../components/howToBuy/howToBuy';
// import Partners from '../../components/partners/partners';
// import Footer from '../../components/footer/footer';

// const navigation = [
//   { name: 'Chart', href: '#' },
//   { name: 'Roadmap', href: '#roadmap' },
//   { name: 'Buy', href: '/buy' },
//   { name: 'Contact us', href: '#contact' },
//   { name: 'Whitepaper', href: '/paper' },
//   { name: 'Dapp', href: '/login' },
//   { name: 'Founder', href: '/founder' },
// ];
// export default function LandingPage() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Header navigation={navigation} />
//       <HeroBanner />
//       <Rule />
//       <Roadmap />
//       <HowToBuy />
//       <Partners />
//       <Footer />
//     </div>
//   );
// }

'use client';

import { Header } from '../../components/header/header';
import { HeroBanner } from '../../components/hero/hero';
import Rule from '../../components/rule/rule';
import Roadmap from '../../components/roadmap/roadmap';
import HowToBuy from '../../components/howToBuy/howToBuy';
import Partners from '../../components/partners/partners';
import Footer from '../../components/footer/footer';

const navigation = [
  { name: 'Chart', href: '#' },
  { name: 'Roadmap', href: 'roadmap', scrollTo: 'roadmap' },
  { name: 'Buy', href: '/buy', scrollTo: 'rule' },
  { name: 'Contact us', href: 'contact', scrollTo: 'contact' },
  { name: 'Whitepaper', href: '/paper' },
  { name: 'Dapp', href: '/dashboard' },
  { name: 'Login', href: '/login' },
];

export default function LandingPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header navigation={navigation} />
      <HeroBanner />
      <Rule />

      <Roadmap />

      <HowToBuy />
      <Partners />

      <Footer />
    </div>
  );
}

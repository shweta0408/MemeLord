import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LandingPage from './screens/landingPage/landingPage';
import NotFound from './screens/notFound/notFound';

import Login from './screens/loginscreen/login';
import WhitePaper from './components/Whitepaper/whitepaper';
import AdminPanel from './screens/Adminpanel/adminPanel';

import { Dashboard } from './screens/dashboard';
import Test from './screens/Founder/Founder';
import { FoundersPage } from './screens/Founder/Founder';
import Team from './screens/Team/Team';
import Wallet from './screens/Wallet/Wallet';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/paper" element={<WhitePaper />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/founder" element={<FoundersPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LandingPage from './screens/landingPage/landingPage';
import NotFound from './screens/notFound/notFound';
import { Dashboard } from './screens/dashboard';
import Login from './screens/loginscreen/login';
import WhitePaper from './components/Whitepaper/whitepaper';

// import Dashboard from './screens/dashboard/Dashboard'; // Adjust the import paths as necessary
// import Login from './screens/login/Login';
// import NotFound from './screens/notFound/NotFound';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/paper" element={<WhitePaper />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

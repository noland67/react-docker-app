import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundGradient from './components/BackgroundGradient';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Prospects from './pages/Prospects';
import Tecs from './pages/Tecs';
import TecBooks from './pages/TecBooks';
import Practice from './pages/Practice';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <Router>
      <BackgroundGradient />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prospects" element={<Prospects />} />
        <Route path="/tecs" element={<Tecs />} />
        <Route path="/tecbooks" element={<TecBooks />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;

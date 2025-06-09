import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BackgroundGradient from './components/BackgroundGradient';
import Breadcrumbs from './components/Breadcrumbs';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Prospects from './pages/Prospects';
import Tecs from './pages/Tecs';
import TecBooks from './pages/TecBooks';
import Practice from './pages/Practice';
import PixelMaker from './pages/PixelMaker';

const AppContent: React.FC = () => {
  const location = useLocation();

  // 非表示にしたいパスを配列で管理
  const hiddenRoutes = ['/pixelmaker'];
  const shouldHideBackground = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideBackground && <BackgroundGradient />}
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prospects" element={<Prospects />} />
        <Route path="/tecs" element={<Tecs />} />
        <Route path="/tecbooks" element={<TecBooks />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/pixelmaker" element={<PixelMaker />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

import React from 'react';
// import DebugBox from '../components/DebugBox';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const buttons = [
    { label: 'Profile', path: '/profile' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Prospects', path: '/prospects' },
    { label: 'Tecs', path: '/tecs' },
    { label: 'TecBooks', path: '/tecbooks' }
    // { label: 'Other', path: '/other' } // 任意に差し替えてOK
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-4xl font-bold">
      Welcome to the Jungle
      <div className="grid grid-cols-3 gap-10 mt-10">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => navigate(btn.path)}
            className="bg-white text-black text-2xl w-32 h-32 rounded-2xl shadow-md hover:bg-gray-100 transition duration-200"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;

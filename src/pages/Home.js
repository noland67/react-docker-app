import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Profile', path: '/profile', icon: '/icons/profile-96.svg' },
    { label: 'Portfolio', path: '/portfolio', icon: '/icons/portfolio-96.svg' },
    { label: 'Prospects', path: '/prospects', icon: '/icons/prospects-96.svg' },
    { label: 'Tecs', path: '/tecs', icon: '/icons/tecs-96.svg' },
    { label: 'TecBooks', path: '/tecbooks', icon: '/icons/tecbooks-96.svg' }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-4xl font-bold">
      Welcome to the Jungle
      <div className="grid grid-cols-3 gap-10 mt-10">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => navigate(btn.path)}
            className="bg-[#011626] text-white text-2xl w-32 h-32 rounded-2xl shadow-md hover:bg-gray-100 hover:text-black transition duration-200 flex flex-col items-center justify-center"
          >
            <span className="mb-2">{btn.label}</span>
            <img src={btn.icon} alt={btn.label} className="w-16 h-16" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;

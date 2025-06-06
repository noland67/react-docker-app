import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageIcons from '../data/HomePageIcons'; // 外部定義

// アイコン情報の型定義（推論ではなく明示）
type IconButton = {
  label: string;
  path: string;
  icon: string;
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-4xl font-bold">
      <img src="/FaZe_Clan_2025.svg" alt="FaZe Clan Logo" className="w-24 h-24 mb-4 invert" />
      Welcome to the Jungle
      <div className="grid grid-cols-3 gap-10 mt-10">
        {(HomePageIcons as IconButton[]).map((btn, i) => (
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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageIcons from '../data/HomePageIcons'; // 外部定義

type IconButton = {
  label: string;
  path: string;
  icon: string;
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-2xl font-bold px-4">
      <div className="max-w-screen-sm w-full flex flex-col items-center">
        <img src="/FaZe_Clan_2025.svg" alt="FaZe Clan Logo" className="w-20 h-20 mb-4 invert" />
        Welcome to the Jungle
        <div className="justify-items-center grid grid-cols-3 mt-10 w-[25rem]">
          {(HomePageIcons as IconButton[]).map((btn, i) => (
            <button
              key={i}
              onClick={() => navigate(btn.path)}
              className="bg-[#011626] m-2 text-white w-[7rem] h-[7rem] rounded-2xl shadow-md hover:bg-gray-100 hover:text-black transition duration-200 flex flex-col items-center justify-center"
            >
              <span className="mb-2 text-sm sm:text-base md:text-lg">{btn.label}</span>
              <img src={btn.icon} alt={btn.label} className="w-16 h-16" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

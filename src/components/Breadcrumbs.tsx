import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// アイコンとラベルのマップ型
type PageKey = 'home' | 'profile' | 'portfolio' | 'prospects' | 'tecs' | 'tecbooks' | 'practice';

const iconMap: Record<PageKey, string> = {
  home: '/icons/home-96.svg',
  profile: '/icons/profile-96.svg',
  portfolio: '/icons/portfolio-96.svg',
  prospects: '/icons/prospects-96.svg',
  tecs: '/icons/tecs-96.svg',
  tecbooks: '/icons/tecbooks-96.svg',
  practice: '/icons/practice-96.svg'
};

const labelMap: Record<PageKey, string> = {
  home: 'Home',
  profile: 'Profile',
  portfolio: 'Portfolio',
  prospects: 'Prospects',
  tecs: 'Tecs',
  tecbooks: 'TecBooks',
  practice: 'Practice'
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname === '/' ? [] : location.pathname.slice(1).split('/');

  return (
    <nav className="flex items-center px-6 py-4 text-white text-sm z-[99] relative space-x-1">
      {/* Home link is always first */}
      {location.pathname === '/' ? (
        <span className="flex items-center space-x-1 text-white">
          <img src={iconMap.home} alt="Home" className="w-5 h-5" />
          <span>{labelMap.home}</span>
        </span>
      ) : (
        <Link to="/" className="flex items-center space-x-1 hover:underline">
          <img src={iconMap.home} alt="Home" className="w-5 h-5" />
          <span>{labelMap.home}</span>
        </Link>
      )}

      {pathnames.map((key, index) => {
        const lowerKey = key.toLowerCase() as PageKey;
        const href = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;
        const label = labelMap[lowerKey] ?? key;
        const iconSrc = iconMap[lowerKey];

        return (
          <span key={href} className="flex items-center space-x-1">
            <span className="text-white px-1">{'>'}</span>
            {isLast ? (
              <span className="flex items-center space-x-1">
                {iconSrc && <img src={iconSrc} alt={label} className="w-5 h-5" />}
                <span>{label}</span>
              </span>
            ) : (
              <Link to={href} className="flex items-center space-x-1 hover:underline">
                {iconSrc && <img src={iconSrc} alt={label} className="w-5 h-5" />}
                <span>{label}</span>
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

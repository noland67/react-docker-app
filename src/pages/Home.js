import React, { useEffect, useRef, useState, useCallback } from 'react';

const Home = () => {
  const gradient1Ref = useRef(null);
  const gradient2Ref = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  const getRandomColor = useCallback(() => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  }, []);

  const createGradient = useCallback(() => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  }, [getRandomColor]);

  const updateGradient = useCallback(() => {
    const g1 = gradient1Ref.current;
    const g2 = gradient2Ref.current;
    if (!g1 || !g2) return;

    g2.style.background = createGradient();
    setFadeIn(true);

    setTimeout(() => {
      g1.style.background = g2.style.background;
      setFadeIn(false);
    }, 3000);
  }, [createGradient]);

  useEffect(() => {
    const g1 = gradient1Ref.current;
    const g2 = gradient2Ref.current;
    if (g1 && g2) {
      g1.style.background = createGradient();
      g2.style.background = createGradient();
    }

    const interval = setInterval(updateGradient, 5000);
    return () => clearInterval(interval);
  }, [createGradient, updateGradient]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div
        ref={gradient1Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          transition: 'background 1s',
        }}
      />
      <div
        ref={gradient2Ref}
        className={fadeIn ? 'fade-in' : ''}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 3s ease-in-out',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Welcome to The Jungle
      </div>
    </div>
  );
};

export default Home;

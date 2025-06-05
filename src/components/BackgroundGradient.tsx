import React, { useEffect, useRef, useState, useCallback } from 'react';

const BackgroundGradient = () => {
  const gradient1Ref = useRef(null);
  const gradient2Ref = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [hue, setHue] = useState(200);

  const createGradient = useCallback((baseHue: number) => {
    const h1 = baseHue % 360;
    const h2 = (baseHue + 40) % 360;
    const color1 = `hsl(${h1}, 65%, 20%)`;
    const color2 = `hsl(${h2}, 55%, 25%)`;
    return `linear-gradient(120deg, ${color1}, ${color2})`;
  }, []);

  const updateGradient = useCallback(() => {
    const g1 = document.getElementById('gradient1') as HTMLElement | null;
    const g2 = document.getElementById('gradient2') as HTMLElement | null;

    if (!g1 || !g2) return;

    const nextHue = (hue + 30) % 360;
    g2.style.background = createGradient(nextHue);
    setFadeIn(true);

    setTimeout(() => {
      g1.style.background = g2.style.background;
      setFadeIn(false);
      setHue(nextHue);
    }, 1500);
  }, [hue, createGradient]);

  useEffect(() => {
    const g1 = document.getElementById('gradient1') as HTMLElement | null;
    const g2 = document.getElementById('gradient2') as HTMLElement | null;

    if (g1 && g2) {
      const initial = createGradient(hue);
      g1.style.background = initial;
      g2.style.background = initial;
    }

    const interval = setInterval(updateGradient, 3000);
    return () => clearInterval(interval);
  }, [createGradient, updateGradient, hue]);

  return (
    <>
      <div
        id="gradient1"
        ref={gradient1Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          transition: 'background 3s ease-in-out'
        }}
      />
      <div
        id="gradient2"
        ref={gradient2Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out, background 3s ease-in-out'
        }}
      />
    </>
  );
};

export default BackgroundGradient;

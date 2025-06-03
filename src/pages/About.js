// src/pages/About.js

import React, { useEffect, useState } from 'react';

const About = () => {
  const [gradient, setGradient] = useState('');

  useEffect(() => {
    // グラデーションを構成するランダムな色を生成
    const randomColor = () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;

    // ランダムな角度と色でグラデーションを生成
    const generateGradient = () => {
      const angle = Math.floor(Math.random() * 360);
      const color1 = randomColor();
      const color2 = randomColor();
      return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    };

    setGradient(generateGradient());
  }, []); // 初回マウント時のみ

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: gradient,
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
      }}
    >
      Welcome to About!
    </div>
  );
};

export default About;

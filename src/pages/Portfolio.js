import React from 'react';
import BackToHome from '../components/BackToHome';

const Protfolio = () => {
  return (
    <div>
      <BackToHome />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          zIndex: 4,
          position: 'relative'
        }}
      >
        Welcome to Protfolio.
      </div>
    </div>
  );
};

export default Protfolio;

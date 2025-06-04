import React from 'react';
import BackToHome from '../components/BackToHome';

const Profile = () => {
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
        Welcome to Profile.
      </div>
    </div>
  );
};

export default Profile;

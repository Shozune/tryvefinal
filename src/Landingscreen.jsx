import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landingscreen.css';

const Landingscreen = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src="/Logo.png" alt="Tryve Logo" className="logo" />
      <div className="buttons-container">
        <button className="button" onClick={() => navigate('/signup')}>
          Sign up
        </button>
        <button className="button" onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Landingscreen;
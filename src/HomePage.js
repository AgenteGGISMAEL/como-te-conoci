import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 onClick={() => navigate('/temas')}>CÓMO ME ENAMORE DE TI 🌷❤️</h1>
    </div>
  );
}

export default HomePage;


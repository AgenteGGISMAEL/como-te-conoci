import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function TemasPage() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
      navigate(path);
    };
  
    return (
      <div className="temas-page">
        <h2>TEMAS</h2>
        <h1>cada pagina tiene musica ponte audifonos si quieres escuchar la musica</h1>
        <div className="container-box">
          <ul>
            <li onClick={() => handleNavigation('/agradecimientos')}>Agradecimiento</li>
            <li onClick={() => handleNavigation('/como-te-conoci')}>¿Cómo te conocí?</li>
            <li onClick={() => handleNavigation('/por-que-me-gustaste')}>¿Por qué me gustaste?</li>
            <li onClick={() => handleNavigation('/por-que-tu')}>¿Por qué tú?</li>
            <li onClick={() => handleNavigation('/lo-siento')}>Lo Siento</li>

          </ul>
        </div>
      </div>
    );
}

export default TemasPage;


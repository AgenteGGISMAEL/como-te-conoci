import React, { useEffect, useRef } from 'react';
import './App.css';

function Agradecimientos() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Ajusta el volumen al 50%
    }
  }, []);

  return (
    <div className="content-page">
      {/* Título */}
      <h2>AGRADECIMIENTO</h2>

      {/* Música de fondo */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/assets/Conan Gray - Heather (Español).mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      {/* Contenedor del mensaje */}
      <div className="container-box">
        <p>
        Quiero tomar un momento para agradecerte, desde lo más profundo de mi corazón. Gracias por todo lo que haces por mí, por la paciencia infinita que tienes con mis errores y por siempre estar ahí, incluso en los momentos en los que siento que no lo merezco.

Eres la persona que ilumina mis días, quien le da color a mi vida y quien me enseña, con cada gesto, que el amor verdadero existe. Gracias por creer en mí incluso cuando yo mismo no lo hago, por ser mi refugio cuando todo parece derrumbarse, y por darme razones para sonreír cuando siento que no las tengo.

No hay palabras suficientes para expresar lo afortunado que soy de tenerte en mi vida. Tu amor y tu apoyo son lo que me impulsan a seguir adelante. Eres mi mayor inspiración, mi fortaleza y mi mayor alegría.

Gracias por ser tú, por ser tan única, tan especial, tan tú. Gracias por amarme a pesar de mis imperfecciones y por enseñarme que, aunque no sea perfecto, soy suficiente para alguien tan increíble como tú.

Te agradezco por todo, por cada risa, por cada momento compartido, por cada vez que me has hecho sentir amado. Mi vida es mejor contigo en ella, y no importa lo que pase, siempre estaré agradecido por haberte encontrado.
        </p>
      </div>
    </div>
  );
}

export default Agradecimientos;





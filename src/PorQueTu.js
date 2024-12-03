import React, { useEffect, useRef } from 'react';
import './App.css';

function PorQueTu() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Ajusta el volumen al 50%
    }
  }, []);
    return (
        <div className="content-page">
          <h2>¿POR QUE TU?</h2>
           {/* Música de fondo */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/assets/'Till Kingdom Come - Coldplay __ Subtitulado Español.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
          <div className="container-box">
            <p>
            Podría pasarme horas tratando de explicarlo, pero creo que nunca encontraría las palabras exactas para describir por qué eres tú. Simplemente lo eres. Eres la respuesta a todas las preguntas que nunca supe cómo formular.

Eres tú porque nadie más tiene esa forma tan especial de hacerme sentir en casa con solo una mirada. Porque tu risa tiene el poder de iluminar incluso mis días más oscuros, y tu voz es la melodía que calma todas mis tormentas internas.

Eres tú porque en un mundo lleno de ruido, tú eres mi paz. Porque en tus abrazos encuentro todo lo que necesito, y en tu mirada veo un futuro que no podría imaginar con nadie más.

Eres tú porque no solo amas las partes bonitas de mí, sino que también abrazas mis defectos, mis inseguridades y mis miedos, sin juzgarme, con una ternura que no merezco pero que agradezco cada día.

Eres tú porque nadie más tiene esa mezcla perfecta de fuerza y dulzura, de determinación y ternura. Porque cada palabra que dices y cada gesto que haces me recuerdan que amar no es solo un sentimiento, es una elección, y tú eliges amarme a pesar de todo.

Eres tú porque cuando estoy contigo, soy la mejor versión de mí mismo. Porque haces que la vida tenga sentido, que las luchas valgan la pena y que el amor sea algo tangible, algo real.

No sé qué hice para merecerte, pero sé que eres tú. Siempre serás tú.
            </p>
          </div>
        </div>
      );
    }

export default PorQueTu;
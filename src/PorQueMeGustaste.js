import React, { useEffect, useRef } from 'react';
import './App.css';

function PorQueMeGustaste() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Ajusta el volumen al 50%
    }
  }, []);
    return (
        <div className="content-page">
          <h2>¿POR QUE ME GUSTASTE?</h2>
           {/* Música de fondo */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/assets/Arctic Monkeys - Baby I'm Yours (Sub. Español).mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
          <div className="container-box">
            <p>
            Me gustaste desde el primer momento, aunque al principio no lo entendía del todo. No fue solo tu belleza, aunque es innegable lo hermosa que eres. Fue algo más, algo que iba mucho más allá de lo que podía ver.

Me gustaste por tu sonrisa, porque tiene esa magia que ilumina cualquier lugar. Por la forma en que hablas, porque cada palabra tuya parecía llevar consigo un pedacito de luz, de alegría, de calidez.

Me gustaste porque hay algo en ti que no se puede explicar pero que se siente como un imán, algo que me atraía sin esfuerzo, algo que me hacía querer conocerte más, entenderte, estar cerca de ti.

Me gustaste porque no finges ser alguien más. Porque eres auténtica, fuerte y a la vez increíblemente dulce. Porque tienes esa mezcla perfecta de inteligencia, pasión y ternura que hace que todo lo demás quede en segundo plano cuando estás cerca.

Me gustaste porque, sin siquiera intentarlo, hiciste que mi mundo se sintiera más vivo, más completo. Porque con solo mirarte, sentí que había encontrado algo que ni siquiera sabía que estaba buscando.

Y con el tiempo, me di cuenta de que lo que más me gustó de ti no fue algo que pudiera describir en palabras. Fue la forma en que me hiciste sentir. Como si, por primera vez, alguien realmente me viera, me entendiera, y me aceptara tal como soy.

Me gustaste, y me sigues gustando, porque contigo todo tiene sentido.
            </p>
          </div>
        </div>
      );
    }

export default PorQueMeGustaste;
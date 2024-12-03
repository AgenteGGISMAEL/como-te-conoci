import React, { useEffect, useRef } from 'react';
import './App.css';

function ComoTeConoci() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Ajusta el volumen al 50%
    }
  }, []);
    return (
        <div className="content-page">
          <h2>¿COMO TE CONOCI?</h2>
        {/* Música de fondo */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/assets/Patrick Watson - Je te laisserai des mots (sub. español + francés).mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
          
          <div className="container-box">
            <p>
            No sé si el destino realmente existe, pero si algo me hace creer en él, fue el momento en que te conocí. Porque conocerte no fue solo un encuentro; fue el principio de algo que cambiaría mi vida para siempre.

Recuerdo la primera vez que te vi. Todo a mi alrededor parecía moverse como siempre, pero tú eras diferente. No fue solo que llamaras mi atención; fue como si el mundo decidiera detenerse por un instante para que yo pudiera fijarme en ti. Tus ojos, tu risa, esa forma única de estar presente… Fue como si todo lo que había vivido antes hubiera sido para prepararme para ese momento.

Pero no fue solo la imagen de ti lo que se quedó grabado en mí. Fue cómo me hiciste sentir, incluso sin conocernos del todo. Era como si algo en mi interior supiera que tú ibas a ser importante, aunque mi mente todavía no lo entendiera.

Conocerte fue un recordatorio de que las conexiones humanas más profundas no necesitan explicación. Fue como si cada pedazo roto dentro de mí encontrara en ti un refugio, como si, por primera vez, pudiera dejar de lado mis miedos y ser simplemente yo.

Cada conversación, cada mirada compartida, cada pequeño detalle me hacía descubrir algo nuevo sobre ti, y con cada descubrimiento me daba cuenta de que había encontrado a alguien única, alguien que iba a marcar mi vida de una manera que no podía prever.

Conocerte fue como si alguien encendiera una luz en una habitación oscura en la que llevaba demasiado tiempo. Fue la sensación de hogar, de pertenecer, de estar en el lugar correcto.

Y aunque no sé si podré explicarlo del todo, sé que el día que te conocí fue el día en que mi vida encontró un nuevo propósito. Porque desde entonces, incluso en los momentos difíciles, tú has sido la razón por la que quiero ser mejor, la razón por la que creo en el amor y en todo lo bueno que puede traer.

Ese día no fue solo el inicio de algo especial; fue el inicio de nosotros.
            </p>
          </div>
        </div>
      );
    }

export default ComoTeConoci;
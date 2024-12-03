import React, { useEffect, useRef } from 'react';
import './App.css';

function LoSiento() {
    const audioRef = useRef(null);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5; // Ajusta el volumen al 50%
      }
    }, []);
  return (
    <div className="content-page">
      <h2>Lo Siento</h2>
       {/* Música de fondo */}
       <audio ref={audioRef} autoPlay loop>
        <source src="/assets/Lord Huron - The Night We Met __ Español + English.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <div className="container-box">
        <p>
        Esta página es mi forma de abrir mi corazón y disculparme contigo, desde lo más profundo de mi ser. Sé que te lastimé y que herí tus sentimientos, todo por mis inseguridades y mi tendencia a sobrepensar las cosas. Mis miedos y pensamientos me han llevado a dañar lo que más amo, a la persona que significa todo para mí.

Sé que con mis acciones te hice sentir que no te respeto o que no te valoro, y eso me duele más de lo que puedo explicar. Me odio a mí mismo por eso, por permitir que mi mente me traicione y lastime a alguien tan increíble como tú.

El tiempo que estuve lejos de ti me hizo darme cuenta de que no puedo vivir ni ser feliz sin ti. Sin embargo, mis errores, mi forma de ser y mis inseguridades me hacen sentir que no soy el novio que mereces. Me odio por ser como soy, por temer constantemente lo que más me aterra: perderte.

Cuando me preguntaste por qué siento que no merezco ser amado, entendí que parte de esa razón es porque a veces lastimo a quienes más quiero, incluso sin querer. Y tú, que has sido mi mayor apoyo, mi única constante, no merecías ser herida por mí.

No soy perfecto, no soy el más guapo, ni el más alto, ni el más inteligente. Solo soy un tipo lleno de fallos, triste y solitario, alguien que muchas veces siente que no es la primera opción. Pero cuando te miro, todo eso desaparece. Para mí, tú eres la mujer perfecta, la mujer de mis sueños, la única que puede iluminar mi oscuridad y salvarme de mis pesadillas.

Lo siento. Lo siento desde lo más profundo de mi alma por haberte hecho daño, por no haber sabido cuidar lo más valioso que tengo: tú. Sé que las palabras no pueden borrar el dolor, pero quiero que sepas que te amo más de lo que jamás podría expresar.
        </p>
      </div>
    </div>
  );
}

export default LoSiento;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Correcciones.css';

const BasicCorrection = ({ opcionesSeleccionadas, preguntasBasicas, reiniciarExamen }) => {
  let puntaje = 0;
  const navigate = useNavigate();

  // Comparar las respuestas seleccionadas con las respuestas correctas
  preguntasBasicas.forEach((pregunta, index) => {
    if (opcionesSeleccionadas[index] === pregunta.respuestaCorrecta) {
      puntaje += 0.5;
    }
  });

  // Determinar el mensaje personalizado según el puntaje
  let mensaje = '';
  let classNamePuntaje = ''; // Nueva variable para la clase CSS

  if (puntaje >= 9 && puntaje <= 12) {
    mensaje = `Excelente, has aprobado con ${puntaje}. ¡Eres genial!`;
    classNamePuntaje = 'puntaje-alto'; // Clase para puntajes altos
  } else if (puntaje >= 6 && puntaje < 9) {
    mensaje = `Muy bien, has aprobado con ${puntaje}, pero deberías reforzar algunos conceptos.`;
    classNamePuntaje = 'puntaje-medio'; // Clase para puntajes medios
  } else {
    mensaje = `Lo siento, no has aprobado. Tu nota fue ${puntaje}. Debes mejorar más e intentarlo nuevamente.`;
    classNamePuntaje = 'puntaje-bajo'; // Clase para puntajes bajos
  }

  const irAInicio = () => {
    reiniciarExamen();
    navigate('/');
  };

  return (
    <div className="examen-container">
      <h1>Resultado del Examen Básico</h1>
      <p className={classNamePuntaje}>{mensaje}</p>
      <button onClick={irAInicio}>Intentarlo nuevamente</button>
    </div>
  );
};

export default BasicCorrection;

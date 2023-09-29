// IntermediateCorrection.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './Correcciones.css';

const IntermediateCorrection = ({ opcionesSeleccionadas, preguntasIntermedias, reiniciarExamen }) => {
  let puntaje = 0;
  const navigate = useNavigate(); // Inicializar el hook

  // Comparar las respuestas seleccionadas con las respuestas correctas
  preguntasIntermedias.forEach((pregunta, index) => {
    if (opcionesSeleccionadas[index] === pregunta.respuestaCorrecta) {
      puntaje += 0.5; // Sumamos 0.5 por cada respuesta correcta
    }
  });

  // Determinar el mensaje personalizado según el puntaje
  let mensaje = '';

  if (puntaje >= 9 && puntaje <= 12) {
    mensaje = `Excelente, has aprobado con ${puntaje}. ¡Eres genial!`;
  } else if (puntaje >= 6 && puntaje < 9) {
    mensaje = `Muy bien, has aprobado con ${puntaje}, pero deberías reforzar algunos conceptos.`;
  } else {
    mensaje = `Lo siento, no has aprobado. Tu nota fue ${puntaje}. Debes mejorar más e intentarlo nuevamente.`;
  }

  const irAInicio = () => {
    reiniciarExamen(); // Agregado para reiniciar el estado del examen
    navigate('/'); // Navegar a la pantalla de inicio
  };

  return (
    <div className="examen-container">
      <h1>Resultado del Examen Intermedio</h1>
      <p>{mensaje}</p>
      <button onClick={irAInicio}>Intentarlo nuevamente</button>
    </div>
  );
};

export default IntermediateCorrection;

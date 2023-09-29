import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Correcciones.css';

const calcularPuntaje = (preguntasAvanzadas, opcionesSeleccionadas) => {
  let puntaje = 0;
  preguntasAvanzadas.forEach((pregunta, index) => {
    if (opcionesSeleccionadas[index] && opcionesSeleccionadas[index][0] === pregunta.respuestaCorrecta) {
      puntaje += 0.5;
    }
  });
  return puntaje;
};

const clasesPuntaje = {
  alto: 'puntaje-alto',
  medio: 'puntaje-medio',
  bajo: 'puntaje-bajo'
};

const AdvancedCorrection = ({ opcionesSeleccionadas, preguntasAvanzadas, reiniciarExamen }) => {
  const navigate = useNavigate();
  const puntaje = calcularPuntaje(preguntasAvanzadas, opcionesSeleccionadas);
  let mensaje = '';
  let classNamePuntaje = '';

  if (puntaje >= 9 && puntaje <= 12) {
    mensaje = `Excelente, has aprobado con ${puntaje}. ¡Eres genial!`;
    classNamePuntaje = clasesPuntaje.alto;
  } else if (puntaje >= 6 && puntaje < 9) {
    mensaje = `Muy bien, has aprobado con ${puntaje}, pero deberías reforzar algunos conceptos.`;
    classNamePuntaje = clasesPuntaje.medio;
  } else {
    mensaje = `Lo siento, no has aprobado. Tu nota fue ${puntaje}. Debes mejorar más e intentarlo nuevamente.`;
    classNamePuntaje = clasesPuntaje.bajo;
  }

  const irAInicio = () => {
    reiniciarExamen();
    navigate('/');
  };

  useEffect(() => {
    // Aquí puedes poner la lógica para la navegación automática según el puntaje si lo deseas
  }, [puntaje]);

  return (
    <div className="examen-container">
      <h1>Resultado del Examen Avanzado</h1>
      <p className={classNamePuntaje}>{mensaje}</p>
      <button onClick={irAInicio}>Intentarlo nuevamente</button>
    </div>
  );
};

AdvancedCorrection.propTypes = {
  opcionesSeleccionadas: PropTypes.object.isRequired, // Actualizado a 'object'
  preguntasAvanzadas: PropTypes.array.isRequired,
  reiniciarExamen: PropTypes.func.isRequired
};

export default AdvancedCorrection;

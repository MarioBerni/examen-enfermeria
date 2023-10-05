import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Correcciones.css';

const calcularPuntaje = (preguntasBasicas, opcionesSeleccionadas) => {
  let puntaje = 0;
  let preguntasIncorrectas = [];
  
  preguntasBasicas.forEach((pregunta, index) => {
    if (opcionesSeleccionadas[index] && opcionesSeleccionadas[index][0] === pregunta.respuestaCorrecta) {
      puntaje += 0.5;
    } else {
      const respuestaCorrectaTexto = pregunta.opciones.find(opcion => opcion.startsWith(pregunta.respuestaCorrecta)).substring(3);
      preguntasIncorrectas.push({
        pregunta: pregunta.pregunta,
        respuestaCorrecta: respuestaCorrectaTexto
      });
    }
  });

  return { puntaje, preguntasIncorrectas };
};

const clasesPuntaje = {
  alto: 'puntaje-alto',
  medio: 'puntaje-medio',
  bajo: 'puntaje-bajo'
};

const BasicCorrection = ({ opcionesSeleccionadas, preguntasBasicas, reiniciarExamen }) => {
  const navigate = useNavigate();
  const { puntaje, preguntasIncorrectas } = calcularPuntaje(preguntasBasicas, opcionesSeleccionadas);
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
      <h1>Resultado del Examen Básico</h1>
      <p className={classNamePuntaje}>{mensaje}</p>
      { preguntasIncorrectas.length > 0 &&
        <div>
          <h2>Preguntas incorrectas:</h2>
          <ul>
            {preguntasIncorrectas.map((item, index) => (
              <li key={index}>{item.pregunta} (Respuesta correcta: {item.respuestaCorrecta})</li>
            ))}
          </ul>
        </div>
      }
      <button onClick={irAInicio}>Intentarlo nuevamente</button>
    </div>
  );
};

BasicCorrection.propTypes = {
  opcionesSeleccionadas: PropTypes.object.isRequired,
  preguntasBasicas: PropTypes.array.isRequired,
  reiniciarExamen: PropTypes.func.isRequired
};

export default BasicCorrection;

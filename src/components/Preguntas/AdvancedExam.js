import React, { useState } from 'react';
import './Preguntas.css'; // Mantengo la misma hoja de estilos, suponiendo que las clases son reutilizables
import AdvancedCorrection from '../Correcciones/AdvancedCorrection'; // Asegúrate de que la ruta sea correcta

const AdvancedExam = ({ reiniciarExamen }) => { // Cambiado el nombre del componente y la prop que recibe
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({});
  const [enviarExamen, setEnviarExamen] = useState(false);

  // Aquí irían tus preguntas avanzadas, asegúrate de actualizar este array
  const preguntasAvanzadas = [
    {
      pregunta: '¿Cuál es la capital de Francia?',
      opciones: ['Berlín', 'Madrid', 'París', 'Lisboa'],
      respuestaCorrecta: 'París'
    },
    // más preguntas
  ];

  const siguientePregunta = () => {
    if (preguntaActual < preguntasAvanzadas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    }
  };

  const anteriorPregunta = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
    }
  };

  const seleccionarOpcion = (preguntaIndex, opcion) => {
    setOpcionesSeleccionadas({
      ...opcionesSeleccionadas,
      [preguntaIndex]: opcion
    });
  };

  return (
    <div className="examen-container">
      {enviarExamen ? (
        <AdvancedCorrection opcionesSeleccionadas={opcionesSeleccionadas} preguntasAvanzadas={preguntasAvanzadas} reiniciarExamen={reiniciarExamen} />
      ) : (
        <div>
          <div className="pregunta-container">
            <div className="pregunta-title">{`Pregunta ${preguntaActual + 1}`}</div>
            <p className="pregunta-text">{preguntasAvanzadas[preguntaActual].pregunta}</p>
            {preguntasAvanzadas[preguntaActual].opciones.map((opcion, i) => (
              <div
                className={`opcion-container ${opcionesSeleccionadas[preguntaActual] === opcion ? 'opcion-seleccionada' : ''}`}
                key={i}
                onClick={() => seleccionarOpcion(preguntaActual, opcion)}
              >
                <input
                  type="radio"
                  name={`pregunta-${preguntaActual}`}
                  value={opcion}
                  checked={opcionesSeleccionadas[preguntaActual] === opcion}
                  onChange={() => seleccionarOpcion(preguntaActual, opcion)}
                />
                <span className="opcion-text">{opcion}</span>
              </div>
            ))}
          </div>
          <button className="nav-button" onClick={anteriorPregunta} disabled={preguntaActual === 0}>Anterior</button>
          {preguntaActual === preguntasAvanzadas.length - 1 ? (
            <button
              className="enviar-button"
              onClick={() => {
                setEnviarExamen(true);
              }}
            >
              Enviar
            </button>
          ) : (
            <button className="nav-button" onClick={siguientePregunta} disabled={preguntaActual === preguntasAvanzadas.length - 1}>Siguiente</button>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedExam;

import React, { useState } from 'react';
import './Preguntas.css'; // Asumiendo que el archivo CSS se llama Preguntas.css y está en la misma carpeta
import IntermediateCorrection from '../Correcciones/IntermediateCorrection'; // Asegúrate de que la ruta sea correcta

const IntermediateExamen = ({ reiniciarExamen }) => { // Recibe la función reiniciarExamen como prop
  const [preguntaActual, setPreguntaActual] = useState(0);  // Nuevo estado para controlar el índice de la pregunta actual
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({}); // Estado para almacenar las opciones seleccionadas
  const [enviarExamen, setEnviarExamen] = useState(false); // Nuevo estado para controlar si se debe enviar el examen

  const preguntasIntermedias = [
    {
      pregunta: "Pregunta intermedia 1",
      opciones: [
        "A) Opción A",
        "B) Opción B",
        "C) Opción C"
      ],
      respuestaCorrecta: "B) Opción B"
    },
    {
      pregunta: "Pregunta intermedia 2",
      opciones: [
        "A) Opción A",
        "B) Opción B",
        "C) Opción C"
      ],
      respuestaCorrecta: "C) Opción C"
    },
    // Puedes añadir más preguntas siguiendo este formato
  ];

  const siguientePregunta = () => {
    if (preguntaActual < preguntasIntermedias.length - 1) {
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
        <IntermediateCorrection opcionesSeleccionadas={opcionesSeleccionadas} preguntasIntermedias={preguntasIntermedias} reiniciarExamen={reiniciarExamen} /> // Pasa la función reiniciarExamen como prop
      ) : (
        <div>
          <div className="pregunta-container">
            <div className="pregunta-title">{`Pregunta ${preguntaActual + 1}`}</div>
            <p className="pregunta-text">{preguntasIntermedias[preguntaActual].pregunta}</p>
            {preguntasIntermedias[preguntaActual].opciones.map((opcion, i) => (
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
          {/* Botones para navegar entre preguntas */}
          <button className="nav-button" onClick={anteriorPregunta} disabled={preguntaActual === 0}>Anterior</button>
          {preguntaActual === preguntasIntermedias.length - 1 ? (
            <button
              className="enviar-button"
              onClick={() => {
                setEnviarExamen(true); // Cambiar el estado a true para enviar el examen
              }}
            >
              Enviar
            </button>
          ) : (
            <button className="nav-button" onClick={siguientePregunta} disabled={preguntaActual === preguntasIntermedias.length - 1}>Siguiente</button>
          )}
        </div>
      )}
    </div>
  );
};

export default IntermediateExamen;

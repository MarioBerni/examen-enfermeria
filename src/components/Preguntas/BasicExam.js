import React, { useState } from 'react';
import './Preguntas.css'; // Asumiendo que el archivo CSS se llama Preguntas.css y está en la misma carpeta
import BasicCorrection from '../Correcciones/BasicCorrection'; // Asegúrate de que la ruta sea correcta

const BasicExamen = ({ reiniciarExamen }) => { // Recibe la función reiniciarExamen como prop
  const [preguntaActual, setPreguntaActual] = useState(0);  // Nuevo estado para controlar el índice de la pregunta actual
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({}); // Estado para almacenar las opciones seleccionadas
  const [enviarExamen, setEnviarExamen] = useState(false); // Nuevo estado para controlar si se debe enviar el examen

  const preguntasBasicas = [
    {
      pregunta: "¿Cuál es el principal objetivo del control metabólico en el tratamiento de la diabetes gestacional?",
      opciones: [
        "A) Controlar el peso",
        "B) Conseguir la Euglicemia",
        "C) Aumentar los niveles de insulina"
      ],
      respuestaCorrecta: "B) Conseguir la Euglicemia"
    },
    {
      pregunta: "¿Qué tipo de controles diarios se recomienda para una paciente con diabetes gestacional?",
      opciones: [
        "A) Control de peso",
        "B) HGT (Hemoglucotest)",
        "C) Control de presión arterial"
      ],
      respuestaCorrecta: "B) HGT (Hemoglucotest)"
    },
    {
      pregunta: "¿Cuándo se instaura el tratamiento dietético en un paciente con diabetes gestacional?",
      opciones: [
        "A) Después del tratamiento con insulina",
        "B) Antes del tratamiento con insulina",
        "C) Nunca se instaura tratamiento dietético"
      ],
      respuestaCorrecta: "B) Antes del tratamiento con insulina"
    },
    // Puedes añadir más preguntas siguiendo este formato
  ];

  const siguientePregunta = () => {
    if (preguntaActual < preguntasBasicas.length - 1) {
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
        <BasicCorrection opcionesSeleccionadas={opcionesSeleccionadas} preguntasBasicas={preguntasBasicas} reiniciarExamen={reiniciarExamen} /> // Pasa la función reiniciarExamen como prop
      ) : (
        <div>
          <div className="pregunta-container">
            <div className="pregunta-title">{`Pregunta ${preguntaActual + 1}`}</div>
            <p className="pregunta-text">{preguntasBasicas[preguntaActual].pregunta}</p>
            {preguntasBasicas[preguntaActual].opciones.map((opcion, i) => (
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
          {preguntaActual === preguntasBasicas.length - 1 ? (
            <button
              className="enviar-button"
              onClick={() => {
                setEnviarExamen(true); // Cambiar el estado a true para enviar el examen
              }}
            >
              Enviar
            </button>
          ) : (
            <button className="nav-button" onClick={siguientePregunta} disabled={preguntaActual === preguntasBasicas.length - 1}>Siguiente</button>
          )}
        </div>
      )}
    </div>
  );
};

export default BasicExamen;

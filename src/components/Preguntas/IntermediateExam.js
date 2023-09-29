import React, { useState } from 'react';
import './Preguntas.css';
import IntermediateCorrection from '../Correcciones/IntermediateCorrection';

const IntermediateExamen = ({ reiniciarExamen }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({});
  const [enviarExamen, setEnviarExamen] = useState(false);

  const preguntasIntermedias = [
    {
      pregunta: "1. ¿Qué se hace si no se consiguen los objetivos del control metabólico a pesar de la dieta y el ejercicio?",
      opciones: [
        "A) Se suspende todo tratamiento",
        "B) Se inicia tratamiento con insulina",
        "C) Se aumenta la dosis de medicación oral"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "2. ¿Cuál es el valor óptimo de glicemias capilares en estado basal?",
      opciones: [
        "A) 0.70 a 0.95 g/dl",
        "B) 0.80 a 1.00 g/dl",
        "C) 0.90 a 1.10 g/dl"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "3. ¿Qué significa PTOG en el contexto de diabetes gestacional?",
      opciones: [
        "A) Prueba de Tolerancia Oral a la Glucosa",
        "B) Prueba de Tolerancia Oral General",
        "C) Prueba de Triglicéridos en la Sangre"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "4. ¿Qué especialista ajusta la dosis de insulina en el tratamiento de la diabetes gestacional?",
      opciones: [
        "A) Cardiólogo",
        "B) Nutricionista",
        "C) Endocrinólogo"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "5. ¿Qué tipo de defectos pueden prevenir los fármacos de la Clase A?",
      opciones: [
        "A) Morfológicos y neurológicos",
        "B) Cardiovasculares",
        "C) Respiratorios"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "6. ¿En qué casos se pueden utilizar fármacos de la Categoría D?",
      opciones: [
        "A) Cuando el clima es favorable",
        "B) Cuando el beneficio potencial justifica el posible riesgo para el feto",
        "C) En cualquier situación"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "7. ¿Qué fármaco de la Clase A es beneficioso para madres con hipotiroidismo?",
      opciones: [
        "A) Hormona tiroidea",
        "B) Insulina",
        "C) Paracetamol"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "8. ¿Qué categorías de fármacos pueden ser administradas durante la gestación según la FDA?",
      opciones: [
        "A) A y B",
        "B) B y C",
        "C) C y D"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "9. ¿Qué se busca obtener antes de instaurar cualquier tratamiento durante el embarazo?",
      opciones: [
        "A) El consentimiento del padre",
        "B) El beneficio terapéutico materno",
        "C) La aprobación de un comité médico"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "10. ¿Qué enfermedad del embarazo se caracteriza por daño endotelial?",
      opciones: [
        "A) Diabetes gestacional",
        "B) Preeclampsia",
        "C) Anemia"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "11. ¿Cuándo se indica el Ácido acetil Salicílico (AAS) en caso de hipertensión crónica conocida?",
      opciones: [
        "A) Desde las 12 semanas",
        "B) Desde las 20 semanas",
        "C) Desde las 30 semanas"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "12. ¿Qué fármaco se utiliza para tratar la hipertensión crónica y la hipertensión gestacional?",
      opciones: [
        "A) Alfametildopa",
        "B) Paracetamol",
        "C) Aspirina"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "13. ¿Qué otro suplemento además del Ácido acetil Salicílico se usa para prevenir la evolución a Preeclampsia?",
      opciones: [
        "A) Vitamina D",
        "B) Calcio",
        "C) Hierro"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "14. ¿Qué tipo de enfermedad es la preeclampsia?",
      opciones: [
        "A) Cardiovascular",
        "B) Endocrina",
        "C) Multisistémica"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "15. ¿Qué es la Aloinmunización?",
      opciones: [
        "A) Producción de isoanticuerpos maternos",
        "B) Falta de anticuerpos en el feto",
        "C) Exceso de anticuerpos en la madre"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "16. ¿Qué procedimientos invasivos se consideran eventos sensibilizantes?",
      opciones: [
        "A) Ultrasonido y radiografía",
        "B) Amniocentesis y Cordocentesis",
        "C) Vacunación y toma de muestras de sangre"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "17. ¿Qué antígeno causa la generación de anticuerpos irregulares en la madre?",
      opciones: [
        "A) Antígeno A",
        "B) Antígeno B",
        "C) Antígeno D"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "18. ¿Qué se busca detectar con el Test de Coombs?",
      opciones: [
        "A) Presencia de Ac irregulares",
        "B) Niveles de glucosa en sangre",
        "C) Cantidad de plaquetas en la sangre"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "19. ¿Qué episodios pueden llevar a la Isoinmunización?",
      opciones: [
        "A) Transfusión de sangre y hemoderivados",
        "B) Consumo de alcohol durante el embarazo",
        "C) Exposición a productos químicos"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "20. ¿Qué patología podría requerir la inducción del trabajo de parto?",
      opciones: [
        "A) Preeclampsia",
        "B) Diabetes gestacional",
        "C) Anemia"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "21. ¿Qué impacto tienen las condiciones cervicales en la inducción del trabajo de parto?",
      opciones: [
        "A) No tienen impacto",
        "B) Afectan la duración y probabilidad de éxito",
        "C) Solo afectan la duración"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "22. ¿Quién realiza el Test de Bishop?",
      opciones: [
        "A) La madre",
        "B) El enfermero",
        "C) El Obstetra/Partera"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "23. ¿Qué es la Corioamnionitis?",
      opciones: [
        "A) Inflamación de las membranas amnióticas",
        "B) Infección bacteriana",
        "C) Ambas son correctas"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "24. ¿Qué sucede si hay una Rotura prematura de membranas (RPM)?",
      opciones: [
        "A) Se inicia la inducción inmediatamente",
        "B) Se espera al menos 48 horas antes de la inducción",
        "C) No se requiere inducción"
      ],
      respuestaCorrecta: "A"
    }
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
        <IntermediateCorrection opcionesSeleccionadas={opcionesSeleccionadas} preguntasIntermedias={preguntasIntermedias} reiniciarExamen={reiniciarExamen} />
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
          <button className="nav-button" onClick={anteriorPregunta} disabled={preguntaActual === 0}>Anterior</button>
          {preguntaActual === preguntasIntermedias.length - 1 ? (
            <button
              className="enviar-button"
              onClick={() => {
                setEnviarExamen(true);
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
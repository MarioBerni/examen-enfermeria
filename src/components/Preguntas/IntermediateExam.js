import React, { useState } from 'react';
import './Preguntas.css';
import IntermediateCorrection from '../Correcciones/IntermediateCorrection';

const IntermediateExamen = ({ reiniciarExamen }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({});
  const [enviarExamen, setEnviarExamen] = useState(false);

  const preguntasIntermedias = [
    {
      pregunta: "1. ¿Qué artículos del Código Penal no son aplicables si se cumplen los requisitos para el IVE?",
      opciones: [
          "A) Artículos 325 y 325 bis.",
          "B) Artículos 300 y 301.",
          "C) Artículos 200 y 201."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "2. ¿Qué tipo de población puede ampararse en la Ley 18.987?",
      opciones: [
          "A) Solo ciudadanas uruguayas.",
          "B) Ciudadanas uruguayas y extranjeras con al menos un año de residencia.",
          "C) Cualquier mujer, independientemente de su nacionalidad."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "3. ¿Cuál de las siguientes afirmaciones es incorrecta sobre la Ley 18.987?",
      opciones: [
          "A) Promueve el ejercicio pleno de los derechos sexuales y reproductivos.",
          "B) Constituye un instrumento de control de los nacimientos.",
          "C) Tutela la vida humana."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "4. ¿Qué tipos de mujeres pueden ampararse en esta ley?",
      opciones: [
          "A) Solo mujeres casadas.",
          "B) Mujeres mayores de 18 años, adolescentes o incapaces habilitadas.",
          "C) Solo mujeres mayores de 18 años."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "5. ¿Qué se debe hacer en la primera consulta para acceder al IVE?",
      opciones: [
          "A) Presentar una solicitud escrita.",
          "B) Poner en conocimiento del médico las circunstancias que han sobrevenido la concepción.",
          "C) Firmar un contrato legal."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "6. ¿Qué condición adicional se requiere para trabajadoras no dependientes?",
      opciones: [
          "A) Estar jubiladas.",
          "B) No tener más de un trabajador a cargo.",
          "C) Tener un seguro de salud privado."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "7. ¿Qué sucede si el recién nacido presenta alguna enfermedad o afección?",
      opciones: [
          "A) No afecta el período de amparo.",
          "B) El período de amparo puede extenderse hasta que el niño cumpla 6 meses.",
          "C) Se requiere un preaviso al empleador."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "8. ¿Cuál es el período mínimo de descanso establecido por la ley?",
      opciones: [
          "A) 10 semanas.",
          "B) 12 semanas.",
          "C) 14 semanas."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "9. ¿Qué sucede con las trabajadoras que quedaron embarazadas durante el seguro de paro?",
      opciones: [
          "A) Solo reciben la mitad del subsidio.",
          "B) No son elegibles para el subsidio.",
          "C) Son beneficiarias del subsidio por maternidad."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "10. ¿Se requiere preaviso al empleador para extender el período de amparo?",
      opciones: [
          "A) Sí.",
          "B) No.",
          "C) Depende del caso."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "11. ¿Quién debe ser capacitado para la educación en el ejercicio de los derechos sexuales y reproductivos?",
      opciones: [
          "A) Solo los médicos.",
          "B) Los docentes de ciclos primario, secundario y terciario.",
          "C) Los padres de familia."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "12. ¿Qué se busca prevenir según los objetivos específicos de las políticas y programas de Salud sexual y reproductiva?",
      opciones: [
          "A) Obesidad.",
          "B) Enfermedades cardiovasculares.",
          "C) Morbimortalidad materna."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "13. ¿Qué se promueve en la atención integral a los casos de 'embarazo no deseado-no aceptado'?",
      opciones: [
          "A) La toma de medicamentos anticonceptivos.",
          "B) Adopción.",
          "C) Un abordaje sanitario comprometido con los derechos sexuales y reproductivos."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "14. ¿Qué se busca garantizar en las prestaciones de salud sexual y reproductiva?",
      opciones: [
          "A) Solo privacidad.",
          "B) Calidad, confidencialidad y privacidad.",
          "C) Solo calidad."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "15. ¿Qué incluyen los derechos reproductivos según la Ley 18.426?",
      opciones: [
          "A) Solo decidir tener o no hijos.",
          "B) Decidir tener o no hijos y el acceso a métodos anticonceptivos.",
          "C) Solo el acceso a métodos anticonceptivos."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "16. ¿Qué comprenden las técnicas de reproducción humana asistida según la ley?",
      opciones: [
          "A) Solo la fertilización in vitro.",
          "B) Manipulación de gametos o embriones humanos.",
          "C) Solo la inseminación artificial."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "17. ¿Qué debe constar en la historia clínica para procedimientos de alta complejidad?",
      opciones: [
          "A) Solo el consentimiento escrito.",
          "B) Estudios, tratamientos y resultados justificativos.",
          "C) Solo el diagnóstico médico."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "18. ¿Qué se necesita para llevar a cabo las técnicas de reproducción humana asistida?",
      opciones: [
          "A) Solo el consentimiento escrito de la mujer.",
          "B) Consentimiento escrito de ambos miembros de la pareja o de la mujer en su caso.",
          "C) Ratificación verbal al momento de la inseminación."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "19. ¿Cuál es el rango de edad establecido para acceder a estas técnicas?",
      opciones: [
          "A) 18 a 60 años.",
          "B) 21 a 55 años.",
          "C) 18 a 50 años."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "20. ¿Qué garantiza el Estado según la ley?",
      opciones: [
          "A) Cobertura total de los costos.",
          "B) Inclusión de estas técnicas en el Sistema Nacional Integrado de Salud.",
          "C) Asignación de un médico especialista para cada caso."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "21. ¿Qué comprenden las técnicas de reproducción humana asistida según la ley?",
      opciones: [
          "A) Solo la fertilización in vitro.",
          "B) Manipulación de gametos o embriones humanos.",
          "C) Solo la inseminación artificial."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "22. ¿Qué se busca garantizar con la inclusión de estas técnicas en el Sistema Nacional Integrado de Salud?",
      opciones: [
          "A) Reducción de los costos.",
          "B) Mayor disponibilidad de médicos especialistas.",
          "C) Equidad en el acceso."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "23. ¿Qué debe constar en la historia clínica para procedimientos de alta complejidad?",
      opciones: [
          "A) Solo el diagnóstico médico.",
          "B) Estudios, tratamientos y resultados justificativos.",
          "C) Solo el consentimiento escrito."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "24. ¿Qué se necesita para llevar a cabo las técnicas de reproducción humana asistida?",
      opciones: [
          "A) Solo el consentimiento escrito de la mujer.",
          "B) Consentimiento escrito de ambos miembros de la pareja o de la mujer en su caso.",
          "C) Ratificación verbal al momento de la inseminación."
      ],
      respuestaCorrecta: "B"
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
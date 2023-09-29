import React, { useState } from 'react';
import './Preguntas.css';
import AdvancedCorrection from '../Correcciones/AdvancedCorrection';

const AdvancedExam = ({ reiniciarExamen }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({});
  const [enviarExamen, setEnviarExamen] = useState(false);

  const preguntasAvanzadas = [
    {
      pregunta: "1. ¿Qué implica una Hemoglobina glicosilada ≥ 6% en el contexto de diabetes gestacional?",
      opciones: [
        "A) Diabetes Manifiesta",
        "B) Control metabólico óptimo",
        "C) No tiene relevancia"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "2. ¿Qué rango de valores de PTOG a la hora se considera para el diagnóstico de diabetes gestacional?",
      opciones: [
        "A) ≥ a 1.60 g/dl",
        "B) ≥ a 1.70 g/dl",
        "C) ≥ a 1.80 g/dl"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "3. ¿Cuál es la cantidad mínima de UI/Kg de peso actual / día para iniciar el tratamiento con insulina?",
      opciones: [
        "A) 0.1 a 0.2 UI/Kg",
        "B) 0.3 a 0.4 UI/Kg",
        "C) 0.5 a 0.6 UI/Kg"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "4. ¿Qué tipo de insulina se administrará cuando se observen hiperglucemias en ayunas o preprandiales?",
      opciones: [
        "A) Insulinas rápidas",
        "B) Insulinas lentas (Cristalina y/o NPH)",
        "C) Insulinas de acción prolongada"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "5. ¿Qué implica la exposición fetal en el tratamiento materno con fármacos?",
      opciones: [
        "A) Es siempre evitable",
        "B) Es casi siempre inevitable",
        "C) No tiene relevancia"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "6. ¿Cuál es el principal enfoque de la clasificación del riesgo fetal de la FDA?",
      opciones: [
        "A) Costo-beneficio",
        "B) Efectividad del fármaco",
        "C) Estudios humanos y animales"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "7. ¿Qué fármacos de la Clase A son ejemplos claros de disminución del riesgo de defectos congénitos?",
      opciones: [
        "A) Ácido fólico y yodo",
        "B) Vitamina C y D",
        "C) Aspirina y paracetamol"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "8. ¿Qué categorías de fármacos de la FDA están contraindicadas durante la gestación?",
      opciones: [
        "A) A y B",
        "B) C y D",
        "C) X"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "9. ¿Qué precauciones se deben tomar antes de la instauración de cualquier tratamiento durante el embarazo según la FDA?",
      opciones: [
        "A) Debe plantearse con cautela, utilizando siempre las dosis menores",
        "B) Debe hacerse sin considerar el riesgo fetal",
        "C) Debe hacerse solo con fármacos de la Clase A"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "10. ¿Qué indica un índice de proteinuria-creatinuria mayor o igual a 0.3g/g en el contexto de preeclampsia?",
      opciones: [
        "A) Enfermedad renal crónica",
        "B) Daño hepático",
        "C) Daño endotelial"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "11. ¿Cuál es la dosis de Alfametildopa para tratar la hipertensión crónica en el embarazo?",
      opciones: [
        "A) 250mg c/6hs",
        "B) 500mg c/12hs",
        "C) Ambas son correctas"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "12. ¿Qué se busca controlar con la indicación de Calcio en el tratamiento de estados hipertensivos del embarazo?",
      opciones: [
        "A) Mejorar la salud ósea",
        "B) Prevenir la evolución a Preeclampsia",
        "C) Reducir los niveles de colesterol"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "13. ¿Cómo se diagnostica la hipertensión gestacional?",
      opciones: [
        "A) Dos registros tensionales separados idealmente de 4 a 6hs",
        "B) Un solo registro tensional mayor o igual a 140/90 mmHg",
        "C) Por la presencia de síntomas como cefalea occipitofrontal"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "14. ¿Qué implica el término 'Enfermedad multisistémica' en el contexto de preeclampsia?",
      opciones: [
        "A) Afecta solo al sistema cardiovascular",
        "B) Afecta múltiples sistemas del cuerpo",
        "C) No tiene relevancia clínica"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "15. ¿Qué implica la sensibilización en el contexto de incompatibilidad Rh?",
      opciones: [
        "A) Generación de anticuerpos regulares",
        "B) Generación de anticuerpos irregulares",
        "C) Ausencia de anticuerpos"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "16. ¿Qué riesgo implica la incompatibilidad Rh sin tratamiento profiláctico?",
      opciones: [
        "A) Riesgo de diabetes gestacional",
        "B) Riesgo de aloinmunización",
        "C) Riesgo de infecciones"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "17. ¿Cuál es la importancia de realizar una exhaustiva Anamnesis en el diagnóstico de incompatibilidad Rh?",
      opciones: [
        "A) Conocer antecedentes obstétricos y posibles eventos inmunizantes anteriores",
        "B) Evaluar el estado emocional de la madre",
        "C) Obtener información sobre el historial médico general de la madre"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "18. ¿Qué se busca evitar con la administración de medicación profiláctica en madres Rh negativo?",
      opciones: [
        "A) Prevenir la transmisión de enfermedades infecciosas",
        "B) Prevenir eventos sensibilizantes",
        "C) Prevenir el desarrollo de enfermedades crónicas"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "19. ¿Qué se entiende por Antígeno D en el contexto de incompatibilidad Rh?",
      opciones: [
        "A) Un antígeno inofensivo que no causa reacción",
        "B) Un antígeno que puede causar sensibilización y generación de anticuerpos irregulares",
        "C) Un antígeno que solo afecta a personas con Rh positivo"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "20. ¿Qué implica un embarazo en vías de prolongación?",
      opciones: [
        "A) Menos de 37 semanas de gestación",
        "B) Más de 41 semanas y 3 días de gestación",
        "C) Exactamente 40 semanas de gestación"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "21. ¿Qué se busca lograr con la inducción farmacológica del trabajo de parto?",
      opciones: [
        "A) Detener las contracciones",
        "B) Estimular las contracciones uterinas",
        "C) Reducir el dolor del parto"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "22. ¿En qué casos se podría optar por una inducción mecánica del trabajo de parto?",
      opciones: [
        "A) Cuando el cuello uterino está maduro",
        "B) Cuando el cuello uterino no está maduro",
        "C) Solo en casos de emergencia"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "23. ¿Qué es la Conducción del trabajo de parto?",
      opciones: [
        "A) Interrupción del trabajo de parto",
        "B) Estimulación para iniciar el trabajo de parto",
        "C) Guía o dirección del trabajo de parto que no progresa como se esperaba"
      ],
      respuestaCorrecta: "C"
    },
    {
      pregunta: "24. ¿Cuál es la importancia de realizar el Test de Bishop antes de la inducción?",
      opciones: [
        "A) Evaluar la madurez del cuello uterino",
        "B) Determinar el género del bebé",
        "C) Evaluar los niveles de azúcar en sangre"
      ],
      respuestaCorrecta: "A"
    }
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
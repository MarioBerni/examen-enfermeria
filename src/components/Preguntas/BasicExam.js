import React, { useState } from 'react';
import './Preguntas.css'; // Asumiendo que el archivo CSS se llama Preguntas.css y está en la misma carpeta
import BasicCorrection from '../Correcciones/BasicCorrection'; // Asegúrate de que la ruta sea correcta

const BasicExamen = ({ reiniciarExamen }) => { // Recibe la función reiniciarExamen como prop
  const [preguntaActual, setPreguntaActual] = useState(0);  // Nuevo estado para controlar el índice de la pregunta actual
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({}); // Estado para almacenar las opciones seleccionadas
  const [enviarExamen, setEnviarExamen] = useState(false); // Nuevo estado para controlar si se debe enviar el examen

  const preguntasBasicas = [
    {
      pregunta: "1. ¿Cuál es el principal objetivo del control metabólico en el tratamiento de la diabetes gestacional?",
      opciones: [
        "A) Controlar el peso",
        "B) Conseguir la Euglicemia",
        "C) Aumentar los niveles de insulina"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "2. ¿Qué tipo de controles diarios se recomienda para una paciente con diabetes gestacional?",
      opciones: [
        "A) Control de peso",
        "B) HGT (Hemoglucotest)",
        "C) Control de presión arterial"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "3. ¿Cuándo se instaura el tratamiento dietético en un paciente con diabetes gestacional?",
      opciones: [
        "A) Después del tratamiento con insulina",
        "B) Antes del tratamiento con insulina",
        "C) Nunca se instaura tratamiento dietético"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "4. ¿Qué tipo de insulinas se utilizan inicialmente en el tratamiento de la diabetes gestacional?",
      opciones: [
        "A) Insulinas animales",
        "B) Insulinas humanas",
        "C) Insulinas sintéticas"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "5. ¿Qué efectos pueden tener los fármacos en el embrión o feto?",
      opciones: [
        "A) Mejora del sistema inmunológico",
        "B) Malformaciones congénitas",
        "C) Aumento de la inteligencia"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "6. ¿Qué se debe tener en cuenta antes de iniciar un tratamiento farmacológico durante el embarazo?",
      opciones: [
        "A) El clima",
        "B) Beneficio terapéutico materno",
        "C) La marca del fármaco"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "7. ¿En qué se basa la clasificación del riesgo fetal de la FDA?",
      opciones: [
        "A) En el precio del medicamento",
        "B) En estudios humanos y animales",
        "C) En la opinión pública"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "8. ¿Qué fármacos disminuyen el riesgo de defectos congénitos según la Clase A?",
      opciones: [
        "A) Ácido fólico y yodo",
        "B) Aspirina y paracetamol",
        "C) Insulina y metformina"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "9. ¿Cuáles fármacos están contraindicados durante la gestación según la FDA?",
      opciones: [
        "A) Clase A",
        "B) Clase X",
        "C) Clase B"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "10. ¿Cuál es un síntoma común de la hipertensión en el embarazo?",
      opciones: [
        "A) Cefalea occipitofrontal",
        "B) Dolor abdominal",
        "C) Vértigo"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "11. ¿Cuál es el valor de presión arterial que indica hipertensión en el embarazo?",
      opciones: [
        "A) Mayor o igual a 130/80 mmHg",
        "B) Mayor o igual a 140/90 mmHg",
        "C) Mayor o igual a 150/100 mmHg"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "12. ¿Qué se busca prevenir con el Ácido acetil Salicílico (AAS) en casos de hipertensión en el embarazo?",
      opciones: [
        "A) Diabetes gestacional",
        "B) Preeclampsia",
        "C) Deshidratación"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "13. ¿Qué indica la Albuminuria en el diagnóstico de preeclampsia?",
      opciones: [
        "A) Mayor o igual a 0.2 g/día",
        "B) Mayor o igual a 0.3 g/día",
        "C) Mayor o igual a 0.4 g/día"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "14. ¿Cómo se trata la hipertensión crónica durante el embarazo?",
      opciones: [
        "A) Con Alfametildopa",
        "B) Con paracetamol",
        "C) Con aspirina"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "15. ¿Qué es la incompatibilidad Rh?",
      opciones: [
        "A) Madre Rh positivo y feto Rh negativo",
        "B) Madre Rh negativo y feto Rh positivo",
        "C) Madre y feto con el mismo tipo Rh"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "16. ¿Cuáles son los anticuerpos que reaccionan contra los hematíes del feto?",
      opciones: [
        "A) Isoanticuerpos",
        "B) Anticuerpos comunes",
        "C) Anticuerpos irregulares"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "17. ¿En qué semanas se realiza el Test de Coombs si la madre no recibió medicación profiláctica?",
      opciones: [
        "A) 10, 15 y 20 semanas",
        "B) 20, 24 y 28 semanas",
        "C) 30, 32 y 36 semanas"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "18. ¿Qué se busca evitar con la medicación profiláctica en madres Rh negativo?",
      opciones: [
        "A) Diabetes gestacional",
        "B) Eventos sensibilizantes",
        "C) Deshidratación"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "19. ¿Qué eventos pueden causar sensibilización en la madre?",
      opciones: [
        "A) Parto o cesárea de un feto RhD(+)",
        "B) Consumo de alimentos alergénicos",
        "C) Exposición a la radiación"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "20. ¿Qué es la inducción del trabajo de parto?",
      opciones: [
        "A) Detener el trabajo de parto",
        "B) Estimular las contracciones uterinas",
        "C) Evitar el parto vaginal"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "21. ¿En qué caso se podría realizar la inducción del trabajo de parto?",
      opciones: [
        "A) Embarazo en vías de prolongación",
        "B) Bajo nivel de azúcar en sangre",
        "C) Falta de movimiento fetal"
      ],
      respuestaCorrecta: "A"
    },
    {
      pregunta: "22. ¿Qué es el Test de Bishop?",
      opciones: [
        "A) Una prueba de sangre",
        "B) Un método para establecer un Status cervical",
        "C) Un examen de ultrasonido"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "23. ¿Cuál es la diferencia entre inducir y conducir el trabajo de parto?",
      opciones: [
        "A) Inducir es detenerlo y conducir es comenzarlo",
        "B) Inducir es comenzarlo y conducir es guiarlo",
        "C) Ambos términos son sinónimos"
      ],
      respuestaCorrecta: "B"
    },
    {
      pregunta: "24. ¿Cuál de los siguientes no es un método para inducir el trabajo de parto?",
      opciones: [
        "A) Farmacológico",
        "B) Mecánico",
        "C) Nutricional"
      ],
      respuestaCorrecta: "C"
    }
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

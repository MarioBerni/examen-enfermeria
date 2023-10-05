import React, { useState } from 'react';
import './Preguntas.css'; 
import BasicCorrection from '../Correcciones/BasicCorrection';

const BasicExamen = ({ reiniciarExamen }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({});
  const [enviarExamen, setEnviarExamen] = useState(false);

  const preguntasBasicas = [
    {
      pregunta: "1. ¿Qué busca asegurar la Ley 18.987 junto con la 18426?",
      opciones: [
          "A) Promover la procreación irresponsable.",
          "B) Garantizar el ejercicio pleno de los derechos sexuales y reproductivos.",
          "C) Limitar el acceso a la interrupción del embarazo."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "2. ¿Qué valor reconoce el Estado según la Ley 18.987?",
      opciones: [
          "A) El valor social de la maternidad.",
          "B) El valor económico del sistema de salud.",
          "C) El valor de la privacidad individual."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "3. ¿Durante cuántas semanas de embarazo se permite la interrupción voluntaria?",
      opciones: [
          "A) 12 semanas.",
          "B) 24 semanas.",
          "C) 16 semanas."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "4. ¿Qué se necesita para acceder al IVE según la ley?",
      opciones: [
          "A) Tener un ingreso mínimo.",
          "B) Ser mayor de 21 años.",
          "C) Acreditar residencia en el territorio durante al menos un año."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "5. ¿Qué tipo de consulta se necesita para acceder al IVE?",
      opciones: [
          "A) Consulta médica en una institución del Sistema Nacional Integrado de Salud.",
          "B) Consulta psicológica.",
          "C) Consulta con un abogado."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "6. ¿Qué busca proteger la Ley 19161?",
      opciones: [
          "A) El empleo juvenil.",
          "B) La maternidad y paternidad.",
          "C) La jubilación."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "7. ¿Quiénes pueden ser beneficiarias del subsidio por maternidad?",
      opciones: [
          "A) Todas las mujeres, independientemente de su empleo.",
          "B) Solo trabajadoras de la actividad pública.",
          "C) Trabajadoras dependientes de la actividad privada."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "8. ¿Cuántas semanas antes del parto comienza el descanso prenatal?",
      opciones: [
          "A) 8 semanas.",
          "B) 4 semanas.",
          "C) 6 semanas."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "9. ¿Cuántas semanas después del parto dura el descanso puerperal?",
      opciones: [
          "A) 10 semanas.",
          "B) 6 semanas.",
          "C) 8 semanas."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "10. ¿Qué sucede en casos de nacimientos múltiples o de bajo peso?",
      opciones: [
          "A) Se reduce el período de amparo.",
          "B) No hay cambios en el período de amparo.",
          "C) El período de amparo puede extenderse hasta 18 semanas."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "11. ¿Qué busca proteger la Ley 18.426?",
      opciones: [
          "A) Derechos de propiedad.",
          "B) Derechos laborales.",
          "C) Derechos sexuales y reproductivos."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "12. ¿Qué garantiza el Estado según la Ley 18.426?",
      opciones: [
          "A) Acceso a la educación.",
          "B) Trabajo para todos.",
          "C) Ejercicio pleno de los derechos sexuales y reproductivos."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "13. ¿En qué nivel de atención se busca universalizar la cobertura de salud sexual y reproductiva?",
      opciones: [
          "A) Primario.",
          "B) Secundario.",
          "C) Terciario."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "14. ¿Qué se busca promover con respecto al parto según la Ley 18.426?",
      opciones: [
          "A) Parto en casa.",
          "B) Parto humanizado.",
          "C) Parto en el hospital."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "15. ¿Qué se busca evitar en el parto humanizado?",
      opciones: [
          "A) El uso de anestesia.",
          "B) La presencia de familiares.",
          "C) Prácticas invasivas no justificadas."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "16. ¿Cuál es el objetivo principal de la Ley 19.167?",
      opciones: [
          "A) Regular el uso de medicamentos.",
          "B) Establecer el precio de los tratamientos médicos.",
          "C) Regular las técnicas de reproducción humana asistida."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "17. ¿Quiénes pueden acceder a las técnicas de reproducción humana asistida según la ley?",
      opciones: [
          "A) Solo parejas casadas.",
          "B) Solo mujeres.",
          "C) Toda persona, independientemente de su estado civil."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "18. ¿Qué instituciones pueden aplicar estas técnicas?",
      opciones: [
          "A) Solo instituciones privadas.",
          "B) Cualquier hospital.",
          "C) Instituciones habilitadas por el Ministerio de Salud Pública."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "19. ¿Cómo se define la infertilidad según la ley?",
      opciones: [
          "A) Incapacidad de concebir después de 24 meses de intento.",
          "B) Incapacidad de concebir después de 6 meses de intento.",
          "C) Incapacidad de concebir después de 12 meses de intento."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "20. ¿Qué edad deben tener las personas para acceder a estas técnicas según la ley?",
      opciones: [
          "A) Mayor de 21 y menor de 50 años.",
          "B) Mayor de 18 y menor de 60 años.",
          "C) Mayor de 18 y menor de 40 años."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "21. ¿Qué instituciones están autorizadas para aplicar técnicas de reproducción humana asistida?",
      opciones: [
          "A) Todas las clínicas y hospitales.",
          "B) Solo hospitales públicos.",
          "C) Instituciones habilitadas por el Ministerio de Salud Pública."
      ],
      respuestaCorrecta: "C"
  },
  {
      pregunta: "22. ¿Qué se entiende por infertilidad según la ley?",
      opciones: [
          "A) Incapacidad de concebir después de 24 meses de intento.",
          "B) Incapacidad de concebir después de 6 meses de intento.",
          "C) Incapacidad de concebir después de 12 meses de intento."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "23. ¿Qué se necesita para aplicar las técnicas de reproducción humana asistida?",
      opciones: [
          "A) Solo la aprobación de un médico.",
          "B) Consentimiento escrito de ambos miembros de la pareja o de la mujer en su caso.",
          "C) Solo el consentimiento verbal de la mujer."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "24. ¿Quiénes pueden acceder a estas técnicas según la ley?",
      opciones: [
          "A) Solo mujeres mayores de 21 años.",
          "B) Toda persona, independientemente de su estado civil.",
          "C) Solo parejas casadas."
      ],
      respuestaCorrecta: "B"
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

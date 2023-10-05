import React, { useState } from 'react';
import './Preguntas.css';
import AdvancedCorrection from '../Correcciones/AdvancedCorrection';

const AdvancedExam = ({ reiniciarExamen }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({});
  const [enviarExamen, setEnviarExamen] = useState(false);

  const preguntasAvanzadas = [
    {
      pregunta: "1. ¿Cuál es el objetivo principal de la Ley 18.987?",
      opciones: [
          "A) Penalizar la interrupción del embarazo.",
          "B) Despenalizar la interrupción del embarazo bajo ciertas condiciones.",
          "C) Promover la planificación familiar."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "2. ¿Qué establece el Art. 325 y 325 bis del Código del Proceso Penal?",
      opciones: [
          "A) Establece una pena de seis a veinticuatro meses de prisión para quien colabore en el aborto con consentimiento de la mujer.",
          "B) Penaliza el aborto sin consentimiento de la mujer.",
          "C) Establece una pena de prisión de dos a cinco años para quien realice un aborto."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "3. ¿Qué no constituye la interrupción voluntaria del embarazo según la ley?",
      opciones: [
          "A) Un derecho humano.",
          "B) Un instrumento de control de los nacimientos.",
          "C) Un acto médico."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "4. ¿Qué debe acreditar una extranjera para acceder al IVE?",
      opciones: [
          "A) Residencia habitual en el territorio durante un período no inferior a un año.",
          "B) Ciudadanía uruguaya.",
          "C) Seguro médico internacional."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "5. ¿Qué se evalúa en la primera consulta médica para el IVE?",
      opciones: [
          "A) La capacidad económica de la mujer.",
          "B) Las circunstancias que han sobrevenido la concepción.",
          "C) El estado civil de la mujer."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "6. ¿Qué institución está encargada de amparar actividades para el subsidio por maternidad?",
      opciones: [
          "A) Ministerio de Salud Pública.",
          "B) Banco de Previsión Social.",
          "C) Instituto del Niño y Adolescente del Uruguay."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "7. ¿Qué pasa si el recién nacido necesita tratamiento domiciliario por alguna afección?",
      opciones: [
          "A) No afecta el período de amparo.",
          "B) El período de amparo puede extenderse hasta que el niño cumpla 6 meses.",
          "C) Se corta el subsidio."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "8. ¿Qué tipo de trabajadoras tienen derecho al subsidio por maternidad?",
      opciones: [
          "A) Solo trabajadoras dependientes.",
          "B) Trabajadoras dependientes, no dependientes, y titulares de empresas monotributistas.",
          "C) Solo trabajadoras en el sector público."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "9. ¿Cuál es el mínimo de semanas de descanso que establece la Ley 19161?",
      opciones: [
          "A) 14 semanas.",
          "B) 16 semanas.",
          "C) 18 semanas."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "10. ¿Se pueden variar los períodos de licencia con autorización del BPS?",
      opciones: [
          "A) Sí.",
          "B) No.",
          "C) Solo en casos excepcionales."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "11. ¿Qué tipo de infraestructura se busca fortalecer en el nivel primario de atención según la Ley 18.426?",
      opciones: [
          "A) Solo infraestructura física.",
          "B) Infraestructura y capacidad de los recursos humanos y materiales.",
          "C) Solo recursos materiales."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "12. ¿Qué se busca impulsar en la población según los objetivos generales de las políticas y programas de Salud sexual y reproductiva?",
      opciones: [
          "A) Medidas de promoción de la salud y prevención de la enfermedad.",
          "B) Solo medidas de promoción de la salud.",
          "C) Solo medidas de prevención de la enfermedad."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "13. ¿Qué se busca garantizar para las personas institucionalizadas o en tratamiento asistencial?",
      opciones: [
          "A) Solo acceso a medicación.",
          "B) Respeto a los derechos sexuales y reproductivos.",
          "C) Solo privacidad y confidencialidad."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "14. ¿Qué se promueve para el intercambio de información y educación para la salud según la Ley 18.426?",
      opciones: [
          "A) Coordinación interinstitucional y participación de redes sociales.",
          "B) Solo coordinación interinstitucional.",
          "C) Solo participación de redes sociales."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "15. ¿Qué comprenden los derechos sexuales según la Ley 18.426?",
      opciones: [
          "A) Solo poder decidir cuándo y cómo tener relaciones sexuales.",
          "B) Poder decidir cuándo, cómo y con quién tener relaciones sexuales, y vivir la sexualidad sin presiones ni violencia.",
          "C) Solo vivir la sexualidad sin presiones ni violencia."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "16. ¿Cuál es el principal objetivo terapéutico de las técnicas de reproducción humana asistida según la ley?",
      opciones: [
          "A) Aumentar la tasa de natalidad.",
          "B) Tratar la infertilidad.",
          "C) Ofrecer una alternativa a la adopción."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "17. ¿Qué se necesita para que una institución pueda aplicar estas técnicas?",
      opciones: [
          "A) Solo una licencia comercial.",
          "B) Habilitación específica del Ministerio de Salud Pública.",
          "C) Acreditación internacional."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "18. ¿Qué se considera para definir la infertilidad según la ley?",
      opciones: [
          "A) Tiempo de intento de concepción.",
          "B) Edad de la mujer.",
          "C) Número de intentos fallidos de inseminación."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "19. ¿Qué se requiere para la realización de técnicas de alta complejidad?",
      opciones: [
          "A) Solo el consentimiento de la mujer.",
          "B) Constancia escrita de estudios, tratamientos y resultados.",
          "C) Aprobación de un comité ético."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "20. ¿Qué se busca garantizar con la inclusión de estas técnicas en el Sistema Nacional Integrado de Salud?",
      opciones: [
          "A) Equidad en el acceso.",
          "B) Reducción de los costos.",
          "C) Mayor disponibilidad de médicos especialistas."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "21. ¿Cuál es el principal objetivo terapéutico de las técnicas de reproducción humana asistida según la ley?",
      opciones: [
          "A) Aumentar la tasa de natalidad.",
          "B) Tratar la infertilidad.",
          "C) Ofrecer una alternativa a la adopción."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "22. ¿Qué se necesita para que una institución pueda aplicar estas técnicas?",
      opciones: [
          "A) Solo una licencia comercial.",
          "B) Habilitación específica del Ministerio de Salud Pública.",
          "C) Acreditación internacional."
      ],
      respuestaCorrecta: "B"
  },
  {
      pregunta: "23. ¿Qué se considera para definir la infertilidad según la ley?",
      opciones: [
          "A) Tiempo de intento de concepción.",
          "B) Edad de la mujer.",
          "C) Número de intentos fallidos de inseminación."
      ],
      respuestaCorrecta: "A"
  },
  {
      pregunta: "24. ¿Qué se requiere para la realización de técnicas de alta complejidad?",
      opciones: [
          "A) Solo el consentimiento de la mujer.",
          "B) Constancia escrita de estudios, tratamientos y resultados.",
          "C) Aprobación de un comité ético."
      ],
      respuestaCorrecta: "B"
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
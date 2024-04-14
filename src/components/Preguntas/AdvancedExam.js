import React, { useState } from 'react';
import AdvancedCorrection from '../Correcciones/AdvancedCorrection';
import './AdvancedExam.css';

const AdvancedExam = ({ reiniciarExamen }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({});
  const [enviarExamen, setEnviarExamen] = useState(false);

  const preguntasAvanzadas = [
    {
      "pregunta": "1. ¿Cuál es el diagnóstico más probable en esta paciente basándose en los hallazgos clínicos y de laboratorio?",
      "opciones": [
        "A) Amenaza de parto pretérmino y preeclampsia sobreagregada",
        "B) Trabajo de parto pretérmino y anemia moderada",
        "C) Amenaza de aborto y diabetes gestacional"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "2. ¿Qué factores de riesgo presenta la paciente para el desarrollo de complicaciones obstétricas?",
      "opciones": [
        "A) Hipertensión arterial crónica y antecedente de infección urinaria",
        "B) Edad materna avanzada y obesidad",
        "C) Diabetes gestacional y trombofilia"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "3. ¿Cómo interpretaría los resultados de laboratorio de esta paciente?",
      "opciones": [
        "A) Anemia leve y leucocitosis con neutrofilia sugestiva de infección",
        "B) Trombocitopenia y coagulopatía",
        "C) Hiperglucemia y disfunción hepática"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "4. Considerando la edad gestacional y los hallazgos clínicos, ¿qué diagnóstico diferencial plantearía en este caso?",
      "opciones": [
        "A) Desprendimiento prematuro de placenta normoinserta",
        "B) Rotura prematura de membranas",
        "C) Corioamnionitis"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "5. ¿Qué medidas terapéuticas iniciales recomendaría para el manejo de esta paciente?",
      "opciones": [
        "A) Reposo absoluto, hidratación intravenosa y antibioticoterapia de amplio espectro",
        "B) Inductores de maduración pulmonar fetal y tocólisis intravenosa",
        "C) Sulfato de magnesio intravenoso y antihipertensivos orales"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "6. ¿Qué estudios adicionales solicitaría para confirmar el diagnóstico y evaluar el bienestar fetal?",
      "opciones": [
        "A) Cardiotocografía fetal y perfil biofísico fetal",
        "B) Resonancia magnética fetal y ecocardiografía fetal",
        "C) Amniocentesis y cordocentesis"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "7. Basándose en los antecedentes obstétricos de la paciente, ¿qué medidas profilácticas se deberían haber considerado durante este embarazo?",
      "opciones": [
        "A) Administración de ácido acetilsalicílico a dosis bajas y suplementación con calcio",
        "B) Progesterona vaginal y pesquisa regular de estreptococo grupo B",
        "C) Aspirina a dosis bajas y tamizaje para diabetes gestacional"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "8. Si la paciente presenta un deterioro clínico y/o fetal, ¿qué conducta obstétrica propondría y por qué?",
      "opciones": [
        "A) Finalización inmediata del embarazo por cesárea debido al riesgo de compromiso fetal",
        "B) Conducta expectante con monitorización fetal continua y maduración pulmonar fetal",
        "C) Inducción del trabajo de parto con oxitocina intravenosa"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "9. En caso de requerir la finalización del embarazo, ¿qué vía de parto sería la más adecuada en este caso?",
      "opciones": [
        "A) Parto vaginal inducido con oxitocina",
        "B) Cesárea electiva por el riesgo de complicaciones maternas y fetales",
        "C) Parto instrumentado con fórceps o vacuum"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "10. Suponiendo que la paciente tiene una evolución favorable y se logra prolongar el embarazo, ¿qué medidas de seguimiento y control recomendaría para prevenir complicaciones maternas y fetales?",
      "opciones": [
        "A) Control prenatal semanal, perfil biofísico fetal bisemanal y inductores de maduración pulmonar fetal",
        "B) Hospitalización continua, monitorización fetal diaria y finalización electiva a las 34 semanas",
        "C) Control prenatal quincenal, ecografía doppler mensual y finalización electiva a las 37 semanas"
      ],
      "respuestaCorrecta": "A"
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
    setOpcionesSeleccionadas({ ...opcionesSeleccionadas, [preguntaIndex]: opcion });
  };

  return (
    <div className="examen-container">
      {enviarExamen ? (
        <AdvancedCorrection
          opcionesSeleccionadas={opcionesSeleccionadas}
          preguntasAvanzadas={preguntasAvanzadas}
          reiniciarExamen={reiniciarExamen}
        />
      ) : (
        <div>
          <h2>Caso Clínico</h2>
          <div className="caso-clinico">
            <p>Paciente femenina de 28 años, G2P1A0, con embarazo de 32 semanas por fecha de última menstruación (FUM -17/02/2024. ), acude al servicio de urgencias obstétricas por presentar contracciones uterinas regulares y sensación de presión pélvica.</p>
            <h3>Antecedentes personales:</h3>
            <ul>
              <li>Hipertensión arterial crónica controlada con alfametildopa 500 mg cada 12 horas.</li>
            </ul>
            <h3>Antecedentes obstétricos:</h3>
            <ul>
              <li>G1: Parto vaginal a término sin complicaciones, recién nacido sano de 3200 gramos.</li>
              <li>G2 (actual): Controles prenatales irregulares, último control hace 4 semanas. Grupo sanguíneo: O Rh negativo, Coombs indirecto negativo en primer trimestre. Hemoglobina en primer trimestre: 11,2 g/dL. Urocultivo del segundo trimestre: Escherichia coli &gt;100.000 UFC/mL, tratado con cefuroxima por 7 días. Ecografía de segundo trimestre normal. Prueba de tolerancia oral a la glucosa (PTOG) a las 26 semanas: Normal.</li>
            </ul>
            <h3>Examen físico:</h3>
            <ul>
              <li>Signos vitales: Presión arterial 150/95 mmHg, frecuencia cardíaca 92 lpm, temperatura 37,1°C, frecuencia respiratoria 18 rpm.</li>
              <li>Altura uterina: 30 cm.</li>
              <li>Frecuencia cardíaca fetal: 145 lpm.</li>
              <li>Dinámica uterina: 3 contracciones en 10 minutos, de 30-40 segundos de duración.</li>
              <li>Genitales externos: Flujo vaginal escaso, no se evidencia sangrado ni líquido amniótico.</li>
              <li>Especuloscopía: Cuello uterino con 2 cm de dilatación, 50% de borramiento, posición central.</li>
            </ul>
            <h3>Se solicitan exámenes de laboratorio:</h3>
            <ul>
              <li>Hemograma: Hemoglobina 10,5 g/dL, leucocitos 12.000/mm³ (70% neutrófilos).</li>
              <li>Proteína C reactiva (PCR): 18 mg/L.</li>
              <li>Perfil de coagulación: Normal.</li>
              <li>Proteínas en orina de 24 horas: 450 mg/día.</li>
            </ul>
            <p>Se realiza ecografía obstétrica que muestra feto único vivo en presentación cefálica, con peso fetal estimado de 1800 gramos, índice de líquido amniótico normal y placenta normoinserta.</p>
            <p>Con esta información, se plantean las siguientes preguntas para evaluar el conocimiento de los estudiantes sobre el caso:</p>
            </div>
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
          <div className="nav-buttons">
            <button className="nav-button" onClick={anteriorPregunta} disabled={preguntaActual === 0}>
              Anterior
            </button>
            {preguntaActual === preguntasAvanzadas.length - 1 ? (
              <button className="enviar-button" onClick={() => { setEnviarExamen(true); }}>
                Enviar
              </button>
            ) : (
              <button className="nav-button" onClick={siguientePregunta} disabled={preguntaActual === preguntasAvanzadas.length - 1}>
                Siguiente
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedExam;
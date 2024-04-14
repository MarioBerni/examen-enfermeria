import React, { useState } from 'react';
import './Preguntas.css';
import IntermediateCorrection from '../Correcciones/IntermediateCorrection';

const IntermediateExamen = ({ reiniciarExamen }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState({});
  const [enviarExamen, setEnviarExamen] = useState(false);

  const preguntasIntermedias = [
    {
      "pregunta": "1. ¿Cuál es el objetivo principal del control obstétrico?",
      "opciones": [
        "A) Obtener el máximo grado de salud física y mental de la madre e hijo.",
        "B) Reducir al mínimo la morbi-mortalidad de la madre solamente.",
        "C) Realizar un seguimiento del embarazo sin enfocarse en la salud materno-fetal."
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "2. ¿Cuál es la frecuencia aconsejada de controles prenatales para considerar un embarazo bien controlado en cantidad?",
      "opciones": [
        "A) Al menos tres consultas repartidas en los tres trimestres.",
        "B) Al menos cinco consultas repartidas en los tres trimestres.",
        "C) Al menos siete consultas repartidas en los tres trimestres."
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "3. ¿Qué examen se realiza para determinar la presencia de embrión intrautero y ajustar la edad gestacional en el primer trimestre?",
      "opciones": [
        "A) Ecografía obstétrica",
        "B) Resonancia magnética",
        "C) Radiografía abdominal"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "4. ¿En qué semanas de gestación se recomienda realizar la Prueba de Tolerancia Oral a la Glucosa (PTOG)?",
      "opciones": [
        "A) Entre las 20 y 24 semanas",
        "B) Entre las 24 y 28 semanas",
        "C) Entre las 28 y 32 semanas"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "5. ¿Cuál es el objetivo de la semiología obstétrica a partir de las 36 semanas?",
      "opciones": [
        "A) Estimar el peso fetal",
        "B) Valorar la cantidad de líquido amniótico",
        "C) Ambas respuestas son correctas"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "6. ¿Cuál es el rango normal de presión arterial en una gestante?",
      "opciones": [
        "A) Menor a 120/80 mmHg",
        "B) Menor a 140/90 mmHg",
        "C) Menor a 160/100 mmHg"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "7. ¿Cuál es el fármaco de elección para el tratamiento de la hipertensión gestacional?",
      "opciones": [
        "A) Labetalol",
        "B) Alfametildopa",
        "C) Nifedipina"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "8. ¿Qué fármaco se utiliza para la profilaxis de convulsiones en preeclampsia severa?",
      "opciones": [
        "A) Sulfato de magnesio",
        "B) Diazepam",
        "C) Fenitoína"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "9. ¿Cuál es el gold standard para el diagnóstico de proteinuria significativa en preeclampsia?",
      "opciones": [
        "A) Índice proteinuria/creatininuria",
        "B) Tira reactiva en orina",
        "C) Albuminuria en 24 horas"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "10. ¿Cuál es el rango de edad gestacional en el que se recomienda la inducción a la maduración pulmonar fetal con corticoides?",
      "opciones": [
        "A) 24 a 34 semanas",
        "B) 28 a 36 semanas",
        "C) 32 a 38 semanas"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "11. ¿Cuál es el principal agente etiológico de las infecciones del tracto urinario durante el embarazo?",
      "opciones": [
        "A) Escherichia coli",
        "B) Staphylococcus aureus",
        "C) Streptococcus agalactiae"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "12. ¿Cuál es el antibiótico de primera elección para el tratamiento de la bacteriuria asintomática en el embarazo?",
      "opciones": [
        "A) Amoxicilina",
        "B) Cefuroxima",
        "C) Ciprofloxacino"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "13. ¿Cuál es el principal riesgo de la pielonefritis aguda durante el embarazo?",
      "opciones": [
        "A) Amenaza de parto pretérmino",
        "B) Preeclampsia",
        "C) Rotura prematura de membranas"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "14. ¿Cuál es el método de elección para la uteroinhibición en la amenaza de parto pretérmino en embarazos mayores o iguales a 32 semanas?",
      "opciones": [
        "A) Indometacina",
        "B) Nifedipina",
        "C) Fenoterol"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "15. ¿Cuál es la puntuación del test de Bishop que se considera favorable para la inducción del trabajo de parto?",
      "opciones": [
        "A) Mayor a 4 puntos",
        "B) Mayor a 6 puntos",
        "C) Mayor a 8 puntos"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "16. ¿Cuál es el método de elección para la maduración cervical en pacientes con índice de Bishop menor a 6 y membranas íntegras?",
      "opciones": [
        "A) Prostaglandinas vaginales",
        "B) Sonda de Foley transcervical",
        "C) Oxitocina intravenosa"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "17. ¿Cuál es la dosis inicial recomendada de oxitocina para la inducción del trabajo de parto?",
      "opciones": [
        "A) 2 mU/min",
        "B) 6 mU/min",
        "C) 12 mU/min"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "18. ¿Cuál es el rango normal de frecuencia cardíaca fetal durante el trabajo de parto?",
      "opciones": [
        "A) 100-120 latidos por minuto",
        "B) 110-160 latidos por minuto",
        "C) 120-180 latidos por minuto"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "19. ¿Cuál es el valor normal de hemoglobina en un recién nacido a término sano?",
      "opciones": [
        "A) 10-14 g/dL",
        "B) 14-20 g/dL",
        "C) 20-24 g/dL"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "20. ¿Cuál es el rango normal de frecuencia respiratoria en un recién nacido?",
      "opciones": [
        "A) 20-40 respiraciones por minuto",
        "B) 40-60 respiraciones por minuto",
        "C) 60-80 respiraciones por minuto"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "21. ¿Qué reflejo arcaico evalúa la respuesta del recién nacido al simular una caída?",
      "opciones": [
        "A) Reflejo de Moro",
        "B) Reflejo de succión",
        "C) Reflejo de búsqueda"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "22. ¿Cuál es el tiempo máximo esperado para la expulsión del meconio en un recién nacido sano?",
      "opciones": [
        "A) 12 horas",
        "B) 24 horas",
        "C) 48 horas"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "23. ¿Cuál es el método recomendado para la curación del cordón umbilical en el recién nacido?",
      "opciones": [
        "A) Limpieza con agua y jabón",
        "B) Aplicación de antibióticos tópicos",
        "C) Higiene con alcohol al 70% en forma circular"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "24. ¿Cuál es la causa más frecuente de metrorragia en el tercer trimestre del embarazo?",
      "opciones": [
        "A) Placenta previa",
        "B) Desprendimiento prematuro de placenta normoinserta",
        "C) Rotura uterina"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "25. ¿Cuál es el tipo de placenta previa que cubre totalmente el orificio cervical interno?",
      "opciones": [
        "A) Placenta previa tipo I",
        "B) Placenta previa tipo II",
        "C) Placenta previa tipo IV"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "26. ¿Cuál es el método diagnóstico de elección para confirmar una placenta previa?",
      "opciones": [
        "A) Ecografía obstétrica",
        "B) Resonancia magnética",
        "C) Tacto vaginal"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "27. ¿Cuál es la edad gestacional recomendada para finalizar el embarazo en una paciente con placenta previa asintomática?",
      "opciones": [
        "A) 34 semanas",
        "B) 36 semanas",
        "C) 38 semanas"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "28. ¿Cuál es el periodo del puerperio que comprende las primeras 24 horas después del parto?",
      "opciones": [
        "A) Puerperio inmediato",
        "B) Puerperio mediato",
        "C) Puerperio tardío"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "29. ¿Cuál es el aspecto normal de los loquios en las primeras 48 horas después del parto?",
      "opciones": [
        "A) Serosos",
        "B) Rojizos y abundantes",
        "C) Amarillentos"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "30. ¿Cuál es el método anticonceptivo recomendado durante la lactancia materna?",
      "opciones": [
        "A) Anticonceptivos orales combinados",
        "B) Dispositivo intrauterino",
        "C) Métodos de barrera"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "31. ¿Cuál es el principal beneficio del alojamiento conjunto para el recién nacido?",
      "opciones": [
        "A) Fortalece los lazos afectivos entre madre e hijo",
        "B) Disminuye el riesgo de infecciones nosocomiales",
        "C) Ambas respuestas son correctas"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "32. ¿Cuál es el rango normal de peso para un recién nacido a término?",
      "opciones": [
        "A) 2000-2500 gramos",
        "B) 2500-4000 gramos",
        "C) 4000-4500 gramos"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "33. ¿Qué reflejo arcaico evalúa la respuesta del recién nacido ante un estímulo táctil en la palma de la mano?",
      "opciones": [
        "A) Reflejo de prensión palmar",
        "B) Reflejo de Babinski",
        "C) Reflejo de Galant"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "34. ¿Cuál es el agente etiológico más frecuente de la mastitis puerperal?",
      "opciones": [
        "A) Staphylococcus aureus",
        "B) Escherichia coli",
        "C) Streptococcus agalactiae"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "35. ¿Cuál es el tratamiento inicial recomendado para la mastitis puerperal?",
      "opciones": [
        "A) Suspensión de la lactancia materna",
        "B) Antibióticos de amplio espectro",
        "C) Vaciamiento adecuado del pecho y medidas locales"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "36. ¿Cuál es la definición de aborto según la OMS?",
      "opciones": [
        "A) Interrupción del embarazo antes de las 20 semanas o con un peso fetal menor a 500 gramos",
        "B) Interrupción del embarazo antes de las 24 semanas o con un peso fetal menor a 600 gramos",
        "C) Interrupción del embarazo antes de las 28 semanas o con un peso fetal menor a 1000 gramos"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "37. ¿Cuál es el signo clínico fundamental del aborto?",
      "opciones": [
        "A) Dolor abdominal",
        "B) Fiebre",
        "C) Metrorragia"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "38. ¿Qué tipo de aborto se caracteriza por la expulsión parcial de los productos de la concepción?",
      "opciones": [
        "A) Aborto completo",
        "B) Aborto incompleto",
        "C) Aborto retenido"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "39. ¿Cuál es la principal complicación del aborto incompleto?",
      "opciones": [
        "A) Infección",
        "B) Hemorragia",
        "C) Perforación uterina"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "40. ¿Cuál es la indicación más frecuente de cesárea?",
      "opciones": [
        "A) Desproporción cefalopélvica",
        "B) Presentación podálica",
        "C) Placenta previa"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "41. ¿Cuál es el tipo de anestesia de elección para una cesárea electiva?",
      "opciones": [
        "A) Anestesia general",
        "B) Anestesia epidural",
        "C) Anestesia raquídea"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "42. ¿Cuál es la complicación más frecuente de la cesárea en el postoperatorio inmediato?",
      "opciones": [
        "A) Hemorragia",
        "B) Infección de la herida quirúrgica",
        "C) Tromboembolismo pulmonar"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "43. ¿Cuál es el período de tiempo recomendado para el inicio de la deambulación después de una cesárea sin complicaciones?",
      "opciones": [
        "A) 6 horas",
        "B) 12 horas",
        "C) 24 horas"
      ],
      "respuestaCorrecta": "C"
    },
    {
      "pregunta": "44. ¿Cuál es la definición de rotura prematura de membranas (RPM)?",
      "opciones": [
        "A) Rotura de las membranas ovulares antes del inicio del trabajo de parto, independientemente de la edad gestacional",
        "B) Rotura de las membranas ovulares después del inicio del trabajo de parto, independientemente de la edad gestacional",
        "C) Rotura de las membranas ovulares antes de las 37 semanas de gestación"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "45. ¿Cuál es el método diagnóstico de elección para confirmar una RPM?",
      "opciones": [
        "A) Especuloscopía",
        "B) Ecografía obstétrica",
        "C) Prueba de cristalización"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "46. ¿Cuál es el antibiótico de elección para la profilaxis de la infección en casos de RPM pretérmino?",
      "opciones": [
        "A) Ampicilina",
        "B) Eritromicina",
        "C) Clindamicina"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "47. ¿Cuál es la complicación más grave de la RPM para el feto?",
      "opciones": [
        "A) Prematuridad",
        "B) Infección intraamniótica",
        "C) Hipoplasia pulmonar"
      ],
      "respuestaCorrecta": "B"
    },
    {
      "pregunta": "48. ¿Cuál es la vía de transmisión más frecuente de la toxoplasmosis congénita?",
      "opciones": [
        "A) Transplacentaria",
        "B) Perinatal",
        "C) Postnatal"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "49. ¿Cuál es el método diagnóstico de elección para detectar la infección materna por toxoplasma durante el embarazo?",
      "opciones": [
        "A) Serología IgG e IgM",
        "B) Reacción en cadena de la polimerasa (PCR) en líquido amniótico",
        "C) Aislamiento del parásito en placenta"
      ],
      "respuestaCorrecta": "A"
    },
    {
      "pregunta": "50. ¿Cuál es el fármaco de elección para el tratamiento de la toxoplasmosis durante el embarazo?",
      "opciones": [
        "A) Espiramicina",
        "B) Pirimetamina",
        "C) Sulfadiazina"
      ],
      "respuestaCorrecta": "A"
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
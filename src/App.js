import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicExamen from '../src/components/Preguntas/BasicExam';
import IntermediateExamen from '../src/components/Preguntas/IntermediateExam'; // Asegúrate de ajustar la ruta
import AdvancedExam from '../src/components/Preguntas/AdvancedExam'; // Importa el nuevo componente AdvancedExam

function App() {
  const [nivelExamen, setNivelExamen] = useState(null);

  const elegirNivel = (nivel) => {
    setNivelExamen(nivel);
  };

  const reiniciarExamen = () => {  
    setNivelExamen(null);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          { nivelExamen ? (
            <>
              {nivelExamen === 'BASICO' && <BasicExamen reiniciarExamen={reiniciarExamen} />}
              {nivelExamen === 'INTERMEDIO' && <IntermediateExamen reiniciarExamen={reiniciarExamen} />}
              {nivelExamen === 'AVANZADO' && <AdvancedExam reiniciarExamen={reiniciarExamen} />} {/* Agregado el examen Avanzado */}
              {/* <button onClick={reiniciarExamen} className="restart-button">Volver al inicio</button> */}
            </>
          ) : (
            <Routes>
              <Route path="/" element={
                <>
                  <h1>Bienvenido al Examen de Enfermería</h1>
                  <h2>Por favor, seleccione el nivel del examen:</h2>
                  <div className="button-container">
                    <button onClick={() => elegirNivel('BASICO')} className="exam-level-button">BÁSICO</button>
                    <button onClick={() => elegirNivel('INTERMEDIO')} className="exam-level-button">INTERMEDIO</button>
                    <button onClick={() => elegirNivel('AVANZADO')} className="exam-level-button">AVANZADO</button> {/* Botón para el nivel Avanzado */}
                  </div>
                </>
              } />
            </Routes>
          )}
        </header>
      </div>
    </Router>
  );
}

export default App;

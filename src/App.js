import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntermediateExamen from '../src/components/Preguntas/IntermediateExam';
import AdvancedExam from '../src/components/Preguntas/AdvancedExam';

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
          {nivelExamen ? (
            <>
              {nivelExamen === 'INTERMEDIO' && <IntermediateExamen reiniciarExamen={reiniciarExamen} />}
              {nivelExamen === 'AVANZADO' && <AdvancedExam reiniciarExamen={reiniciarExamen} />}
            </>
          ) : (
            <Routes>
              <Route path="/" element={
                <>
                  <h1>Bienvenido al Examen de Enfermería</h1>
                  <h2>Por favor, seleccione la prueba que desea realizar:</h2>
                  <div className="button-container">
                    <button onClick={() => elegirNivel('INTERMEDIO')} className="exam-level-button">EXAMEN</button>
                    <button onClick={() => elegirNivel('AVANZADO')} className="exam-level-button">CASO CLÍNICO</button>
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
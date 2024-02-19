import React from 'react';
import { useNavigate } from 'react-router-dom';

const test: React.FC = () => {
  const navigateToDetail = (skill: string) => {
    console.log(skill); // oder führen Sie eine Navigation durch
  };

  return (
    
    <div className="container">
       {/* Noch eine Leerzeile für Abstand */}
       <div className="my-20"></div>
      {/* Analytische Fähigkeiten Kiste */}
      <div className="row mb-3">
        <div className="col-md-5" onClick={() => navigateToDetail('Analytische Fähigkeiten')}>
          <div className="card h-100" style={{ cursor: 'pointer' }}>
            <div className="card-body">
              <h5 className="card-title">Analytische Fähigkeiten</h5>
              <ul className="card-text">
                <li>Marktforschung</li>
                <li>Szenario-Analyse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
 {/* Noch eine Leerzeile für Abstand */}
 <div className="my-4"></div>
      {/* Risikomanagement Kiste */}
      <div className="row mb-3">
        <div className="col-md-5" onClick={() => navigateToDetail('Risikomanagement')}>
          <div className="card h-100" style={{ cursor: 'pointer' }}>
            <div className="card-body">
              <h5 className="card-title">Risikomanagement</h5>
              <ul className="card-text">
                <li>Risikobewertung</li>
                <li>Kontinuierliche Überwachung</li>
                <li>Absicherungsstrategien</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
 {/* Noch eine Leerzeile für Abstand */}
 <div className="my-4"></div>
      {/* Kundenberatung Kiste */}
      <div className="row mb-3">
        <div className="col-md-5" onClick={() => navigateToDetail('Kundenberatung')}>
          <div className="card h-100" style={{ cursor: 'pointer' }}>
            <div className="card-body">
              <h5 className="card-title">Kundenberatung</h5>
              <ul className="card-text">
                <li>Kundenbedürfnisse verstehen</li>
                <li>Gute Kommunikationsfähigkeiten</li>
                <li>Lösungsorientierte Beratung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
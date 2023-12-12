import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (card: string) => {
    if (card === 'Einführung') {
      navigate('/introduction'); // Wenn die "Einführung"-Karte geklickt wird, navigieren Sie zur Einführungsseite.
    }  else if (card === 'Fähigkeiten') {
      navigate('/fahigkeiten'); // Navigieren zur Fähigkeiten-Seite, wenn die entsprechende Karte geklickt wird.
    } else {
      console.log(`Karte ${card} wurde geklickt.`);
      // Weitere Aktionen für andere Karten
    }
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lernspiel "der Finanzberater"</h2>
      <div className="row">
        <div className="col-12">
          <div className="text-center mt-3 mb-3">
            <p>
              Willkommen auf unserer Webseite "Lernspiel als Finanzberater" - Ihre Eintrittskarte zu einem interaktiven Lernabenteuer für finanzielle Kompetenz!
              Durch unser Spiel bieten wir eine innovative Möglichkeit, die Grundlagen der Finanzberatung für Geschäftskunden spielerisch zu meistern.
              Tauchen Sie mit uns ein in die aufregende Welt des Lernspiels, in der Sie nicht nur Finanzprinzipien erlernen, sondern Ihr Wissen auch in realistischen
              Szenarien anwenden können. Unser interaktives Lernspiel verbindet Information mit Unterhaltung - die ideale Kombination, um das komplexe
              Universum der Finanzen motivierend und verständlich zu gestalten.
            </p>
          </div>
        </div>
      </div>
      {/* Obere Reihe für die beiden Karten */}
      <div className="row">
        <div className="col-md-5 mb-4">
          <div className="card h-100" onClick={() => handleCardClick('Einführung')} style={{ cursor: 'pointer' }}>
            <div className="card-body">
              <p className="card-text">Einführung zur "Finanzberatung" - Beschreibung der Einführung...</p>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div> {/* Dieser leere div sorgt für etwas Abstand zwischen den Karten */}
        <div className="col-md-5 mb-4">
          <div className="card h-100" onClick={() => handleCardClick('Fähigkeiten')} style={{ cursor: 'pointer' }}>
            <div className="card-body">
              <p className="card-text">Was soll man als Finanzberater können? - Beschreibung der Fähigkeiten...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Textbereich unter den Karten */}
      

      {/* Reihe für den Start-Button */}
      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-primary mt-3" onClick={() => handleCardClick('Start')}>Start!</button>
        </div>
      </div>
    </div>
  );
};

export default App;
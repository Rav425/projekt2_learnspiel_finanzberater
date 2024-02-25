import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LevelSelectorPage.css'; // Ihr CSS-Dateipfad
import video from '../assets/Untitled Video.mp4';
const App: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (card: string) => {
    switch (card) {
      case 'Einführung':
        navigate('/introduction'); // Navigieren zur Einführungsseite
        break;
      case 'Fähigkeiten':
        navigate('/fahigkeiten'); // Navigieren zur Fähigkeiten-Seite
        break;
      case 'Start':
        navigate('/LevelSelector'); // Navigieren zur LevelSelector-Seite
        break;
      case 'Leaderboard':
        navigate('/leaderboard'); // Navigieren zur Leaderboard-Seite
        break;
      default:
        console.log(`Karte ${card} wurde geklickt.`);
        // Weitere Aktionen für andere Karten
    }
  };

  return (
    <div className="level-selector-container">
      <div className="row mb-4">
        <div className="col-12">
          <button className="btn btn-outline-secondary" onClick={() => handleCardClick('Leaderboard')}>Rangliste</button>
        </div>
      </div>

      <h1 className="text-center mb-4" style={{ color: '#007bff' }}>Lernspiel "der Finanzberater"</h1>
      <div className="row">
        <div className="col-12">
          <div className="text-center mt-3 mb-3" style={{ color: '#555' }}>
            <p>
            Willkommen auf unserer Webseite "Lernspiel als Finanzberater" - Ihre Eintrittskarte zu einem interaktiven Lernabenteuer für finanzielle Kompetenz!
              Durch unser Spiel bieten wir eine innovative Möglichkeit, die Grundlagen der Finanzberatung für Geschäftskunden spielerisch zu meistern.
              Tauchen Sie mit uns ein in die aufregende Welt des Lernspiels, in der Sie nicht nur Finanzprinzipien erlernen, sondern Ihr Wissen auch in realistischen
              Szenarien anwenden können. Unser interaktives Lernspiel verbindet Information mit Unterhaltung - die ideale Kombination, um das komplexe
              Universum der Finanzen motivierend und verständlich zu gestalten
              {/* ... restlicher Text ... */}
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5 mb-4">
          <div className="card h-100" onClick={() => handleCardClick('Einführung')} style={{ cursor: 'pointer', backgroundColor: '#e9ecef' }}>
            <div className="card-body">
              <p className="card-text">Einführung zur "Finanzberatung"</p>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5 mb-4">
          <div className="card h-100" onClick={() => handleCardClick('Fähigkeiten')} style={{ cursor: 'pointer', backgroundColor: '#e9ecef' }}>
            <div className="card-body">
              <p className="card-text">Fähigkeiten & Fachkompetenz</p>
            </div>
           
          </div>
          
        </div>
        
      </div> 
      

      <div className="row">
        <div className="col-12 text-center">
        <div className="video-container">
    
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      
      <video width="750" height="500" controls autoPlay >
        <source src={video} type="video/mp4" />
        Ihr Browser unterstützt das Video-Tag nicht.
      </video>
    </div>
  </div>
          <button className="btn btn-primary mt-3" onClick={() => handleCardClick('Start')}>Start!</button>
        </div>
      </div>
    </div>
  );
};

export default App;
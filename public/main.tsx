import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../src/components/App';
import IntroductionPage from '../src/components/IntroductionPage'; // Der Importpfad sollte Ihrem Projekt entsprechen
import FahigkeitenPage from '../src/components/FahigkeitenPage';
import LevelSelectorPage from '../src/components/LevelSelectorPage';
import LeaderboardPage from '../src/components/LeaderboardPage';
import Risiko from '../src/components/Risiko';
import Risikoidentifikation from '../src/components/Risikoidentifikation';
import Risikobewertung from '../src/components/Risikobewertung';
import Fragen from '../src/components/Fragen';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/introduction" element={<IntroductionPage />} />
      <Route path="/fahigkeiten" element={<FahigkeitenPage />} />
      <Route path="/LevelSelector" element={<LevelSelectorPage />} />
      <Route path="/Leaderboard" element={<LeaderboardPage />} />
      <Route path="/risikomanagement" element={<Risiko />} />
      <Route path="/Risikoidentifikation" element={<Risikoidentifikation />} />
      <Route path="/Risikobewertung" element={<Risikobewertung />} />
      <Route path="/level2" element={< Fragen/>} />
    </Routes>
  </BrowserRouter>
);



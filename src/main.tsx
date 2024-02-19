import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import IntroductionPage from './IntroductionPage'; // Der Importpfad sollte Ihrem Projekt entsprechen
import FahigkeitenPage from './FahigkeitenPage';
import LevelSelectorPage from './LevelSelectorPage';
import LeaderboardPage from './LeaderboardPage';
import Risiko from './Risiko';
import Risikoidentifikation from './Risikoidentifikation';
import Risikobewertung from './Risikobewertung';
import Fragen from './Fragen';
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



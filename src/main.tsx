import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import IntroductionPage from './IntroductionPage'; // Der Importpfad sollte Ihrem Projekt entsprechen
import FahigkeitenPage from './FahigkeitenPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/introduction" element={<IntroductionPage />} />
      <Route path="/fahigkeiten" element={<FahigkeitenPage />} />
    </Routes>
  </BrowserRouter>
);


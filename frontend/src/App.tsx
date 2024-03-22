// import { useState } from 'react'
 import Login from "./components/Login";
import Signup from "./components/Signup";
import Level1Quiz1 from "./components/levels/Level1Quiz1";
import Level1Scenario1 from "./components/levels/Level1Scenario1";
import Level2 from "./components/levels/Level2";
import Level3Neu from "./components/levels/Level3_neu";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import AdminCategory from "./admin/pages/AdminCategory";
import AdminAddQuiz from "./admin/pages/AdminAddQuiz";
import AdminQuizzes from "./admin/pages/AdminQuizzes";

import Startseite from './pages/Startseite';
import IntroductionPage from './pages/IntroductionPage'; // Der Importpfad sollte Ihrem Projekt entsprechen
import FahigkeitenPage from './pages/FahigkeitenPage';
import LevelSelectorPage from './pages/LevelSelectorPage';
// import LeaderboardPage from './LeaderboardPage';
import Inhalt1 from "./pages/Inhalt1";
import Inhalt2 from "./pages/Inhalt2";
import Inhalt3 from "./pages/Inhalt3";
import Inhalt4 from "./pages/Inhalt4";
import AnalytischeMethodenInhalt from "./pages/AnalytischeMethodenInhalt";
import MarktforschungUndAnalyse from "./pages/MarktforschungUndAnalyse";
import EZeitreihenanalyse from "./pages/EZeitreihenanalyse";

import FinanzBilanzanalyse from "./pages/FinanzUndBilanzanalyse";
import KreditwuerdigkeitAnalyse from "./pages/KreditwuerdigkeitAnalyse";
import Unternehmensbewertung from "./pages/Unternehmensbewertung";

import Risikomagement from './pages/Risikomanagement';
import Risikoidentifikation from './pages/Risikoidentifikation';
import Risikobewertung from './pages/Risikobewertung';
import Risikostrategie from './pages/Risikostrategie';
import Fragen from './pages/Fragen';
import AdminAddCategory from "./admin/pages/AdminAddCategory";

import Kundenberatung from './pages/Kundenberatung';
import FinanzUndBilanzanalyse from "./pages/FinanzUndBilanzanalyse";
import Investitionsanalyse from "./pages/Investitionsanalyse";

function App() {

  return (
    <div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/level1Quiz1" element={<Level1Quiz1 />} />
          <Route path="/Level1Scenario1" element={<Level1Scenario1 />}/>
          <Route path="/Leaderboard" element={<Leaderboard />} />
          {/* ADMIN Routes you have to add a protected route */}
          <Route path="/admin/Dashboard" element={<Dashboard/>} />
          <Route path="/admin/Category" element={<AdminCategory/>} />
          <Route path="/admin/AddCategory" element={<AdminAddCategory/>} />
          <Route path="/admin/AddQuiz" element={<AdminAddQuiz/>} />
          <Route path="/admin/Quizzes" element={<AdminQuizzes/>} />

          <Route path="/startseite" element={<Startseite />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/inhalt1" element={<Inhalt1 />} />
          <Route path="/inhalt2" element={<Inhalt2 />} />
          <Route path="/inhalt3" element={<Inhalt3 />} />
          <Route path="/inhalt4" element={<Inhalt4 />} />
          <Route path="/analytische-faehigkeiten" element={<AnalytischeMethodenInhalt />} />
          <Route path="/marktforschung" element={<MarktforschungUndAnalyse />} />
          <Route path="/ezeitreihenanalyse" element={<EZeitreihenanalyse />} />
          <Route path="/investitionsanalyse" element={<Investitionsanalyse />} />
          <Route path="/finanz-bilanzanalyse" element={<FinanzBilanzanalyse />} />
          <Route path="/kreditwuerdigkeit" element={<KreditwuerdigkeitAnalyse />} />
          <Route path="/unternehmensbewertung" element={<Unternehmensbewertung />} />
          <Route path="/fahigkeiten" element={<FahigkeitenPage />} />
          <Route path="/LevelSelector" element={<LevelSelectorPage />} />
          {/* <Route path="/Leaderboard" element={<LeaderboardPage />} /> */}
          <Route path="/risikomanagement" element={<Risikomagement />} />
          <Route path="/risikoidentifikation" element={<Risikoidentifikation />} />
          <Route path="/risikobewertung" element={<Risikobewertung />} />
          <Route path="/risikostrategie" element={<Risikostrategie />} />
          <Route path="/level2_fragen" element={< Fragen/>} />
          <Route path="/level2" element={< Level2/>} />
          <Route path="/level3_new" element={<Level3Neu />} />
          <Route path="/kundenberatung" element={<Kundenberatung />} />
          <Route path="/finanz-und-bilanzanalyse" element={<FinanzUndBilanzanalyse />} />
          <Route path="/investitionsanalyse" element={<Investitionsanalyse />} />
      
      </Routes>
    </div>
  )
}

export default App

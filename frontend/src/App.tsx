// import { useState } from 'react'
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import Level1Quiz1 from "./components/levels/Level1Quiz1";
import Level1Scenario1 from "./components/levels/Level1Scenario1";
import Level1Scenario2 from "./components/levels/Level1Scenario2";
import Level2Scenario1 from "./components/levels/Level2Scenario1";

import Leaderboard from "./components/Leaderboard";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./pages/admin/admin/Dashboard";
import AdminCategory from "./pages/admin/admin/AdminCategory";
import AdminAddQuiz from "./pages/admin/admin/AdminAddQuiz";
import AdminQuizzes from "./pages/admin/admin/AdminQuizzes";

import Startseite from './pages/Startseite';
// import IntroductionPage from './pages/EinführungFinanzberatungPage'; // Der Importpfad sollte Ihrem Projekt entsprechen
// import FahigkeitenPage from './pages/FahigkeitenPage';
import LevelSelectorPage from './pages/LevelSelectorPage';
// import LeaderboardPage from './LeaderboardPage';
import Risikomagement from './pages/Risikomanagement';
import Risikoidentifikation from './pages/Risikoidentifikation';
import Risikobewertung from './pages/Risikobewertung';
import Fragen from './pages/Fragen';


function App() {

  return (
    <div>
      <Routes>
          {/* <Route path="/" element={<Login />} / */}
          <Route path="/level1Quiz1" element={<Level1Quiz1 />} />
          <Route path="/level1Scenario1" element={<Level1Scenario1 />}/>
          <Route path="/Leaderboard" element={<Leaderboard />} />
          {/* ADMIN Routes you have to add a protected route */}
          <Route path="/AddCategory" element={<Dashboard/>} />
          <Route path="/adminCategory" element={<AdminCategory/>} />
          <Route path="/adminAddQuiz" element={<AdminAddQuiz/>} />
          <Route path="/adminQuizzes" element={<AdminQuizzes/>} />

          <Route path="/startseite" element={<Startseite />} />
          {/* <Route path="/introduction" element={<IntroductionPage />} /> */}
          {/* <Route path="/fahigkeiten" element={<FahigkeitenPage />} /> */}
          <Route path="/LevelSelector" element={<LevelSelectorPage />} />
          {/* <Route path="/Leaderboard" element={<LeaderboardPage />} /> */}
          <Route path="/risikomanagement" element={<Risikomagement />} />
          <Route path="/risikoidentifikation" element={<Risikoidentifikation />} />
          <Route path="/risikobewertung" element={<Risikobewertung />} />
          <Route path="/level2" element={< Fragen/>} />
          <Route path="/level2Scenario1" element={<Level2Scenario1 />} />
          <Route path="/level1Scenario2" element={<Level1Scenario2 />} />
       
          
          
      </Routes>
    </div>
  )
}

export default App

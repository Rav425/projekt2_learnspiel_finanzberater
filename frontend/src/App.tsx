// import { useState } from 'react'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Level1Quiz1 from "./components/levels/Level1Quiz1";
import Level1Scenario1 from "./components/levels/Level1Scenario1";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import AdminCategory from "./pages/admin/AdminCategory";
import AdminAddQuiz from "./pages/admin/AdminAddQuiz";
import AdminQuizzes from "./pages/admin/AdminQuizzes";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/level1Quiz1" element={<Level1Quiz1 />} />
          <Route path="/level1Scenario1" element={<Level1Scenario1 />}/>
          <Route path="/Leaderboard" element={<Leaderboard />} />
          {/* ADMIN Routes you have to add a protected route */}
          <Route path="/AddCategory" element={<Dashboard/>} />
          <Route path="/adminCategory" element={<AdminCategory/>} />
          <Route path="/adminAddQuiz" element={<AdminAddQuiz/>} />
          <Route path="/adminQuizzes" element={<AdminQuizzes/>} />


      </Routes>
    </div>
  )
}

export default App

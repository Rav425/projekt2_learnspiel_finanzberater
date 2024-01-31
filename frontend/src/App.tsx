// import { useState } from 'react'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Level1Quiz1 from "./components/levels/Level1Quiz1";
import Level1Scenario1 from "./components/levels/Level1Scenario1";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route} from "react-router-dom";

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
      </Routes>
    </div>
  )
}

export default App

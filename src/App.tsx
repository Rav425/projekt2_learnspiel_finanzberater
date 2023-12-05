// import { useState } from 'react'
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </div>
  )
}

export default App

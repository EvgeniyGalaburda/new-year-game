import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Members from "./components/members/Members"
import Game from "./components/Game/Game"

function App() {


  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="members" element={<Members/>}/>
        <Route path="/" element={<Game/>}/>
      </Routes>
    </div>
  )
}

export default App

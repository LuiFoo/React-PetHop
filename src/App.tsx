import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./componentes/Home"
import ChameUmHop from "./componentes/ChameHop"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chame-um-hop" element={<ChameUmHop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

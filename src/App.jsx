import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return(
    <Routes>
          <Route index element={<Home />} />
          <Route path="catalogo" element={<Home />}/>
    </Routes>
  )
  
}

export default App

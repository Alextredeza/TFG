import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Licenses from "./pages/AboutUs/Licenses"
import History from "./pages/AboutUs/History"
import Cookies from "./pages/Config/Cookies"
import Ajustes from "./pages/Config/Ajustes"
import Carrito from "./pages/Carrito"

function App() {
  return(
    <Routes>
          <Route index element={<Home />} />
          <Route path="catalogo" element={<Catalogo />}/>
          <Route path="aboutus/history" element={<History />}/>
          <Route path="config/licensess" element={<Licenses />}/>
          <Route path="config/ajustes" element={<Ajustes />}/>
          <Route path="config/cookies" element={<Cookies />}/>
          <Route path="carrito" element={<Carrito />}/>
    </Routes>
  )
  
}

export default App

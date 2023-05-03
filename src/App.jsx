import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Historia from "./pages/Config/Historia"
import Licencias from "./pages/Config/Licencias"
import Cookies from "./pages/Config/Cookies"
import Ajustes from "./pages/Config/Ajustes"
import Carrito from "./pages/Carrito"

function App() {
  return(
    <Routes>
          <Route index element={<Home />} />
          <Route path="catalogo" element={<Catalogo />}/>
          <Route path="config/historia" element={<Historia />}/>
          <Route path="config/licencias" element={<Licencias />}/>
          <Route path="config/ajustes" element={<Ajustes />}/>
          <Route path="config/cookies" element={<Cookies />}/>
          <Route path="carrito" element={<Carrito />}/>
    </Routes>
  )
  
}

export default App

import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Licenses from "./pages/AboutUs/Licenses"
import History from "./pages/AboutUs/History"
import Cookies from "./pages/Config/Cookies"
import Ajustes from "./pages/Config/Ajustes"
import Carrito from "./pages/Carrito"
import CarId from "./pages/CarId"
import Shop from "./pages/Shop"
import Login from "./pages/Login"
import Register from "./pages/register"
import NotFound from "./pages/NotFound"
import Sell from "./pages/Sell"

function App() {
  return(
    <Routes>
          <Route index element={<Home />} />
          <Route path="catalogo" element={<Catalogo />}/>
          <Route path="catalogo/:carid" element={<CarId />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="aboutus/history" element={<History />}/>
          <Route path="config/licensess" element={<Licenses />}/>
          <Route path="config/ajustes" element={<Ajustes />}/>
          <Route path="config/cookies" element={<Cookies />}/>
          <Route path="carrito" element={<Carrito />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="sell" element={<Sell />}/>
          <Route path="*" element={<NotFound />}/>
    </Routes>
  )
  
}

export default App

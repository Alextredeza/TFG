import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createHashRouter, RouterProvider } from "react-router-dom"
import { AppProvaider } from './context/App'

// Routeres
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import History from "./pages/AboutUs/History"
import Carrito from "./pages/Carrito"
import CarId from "./pages/CarId"
import Shop from "./pages/Shop"
import Login from "./pages/Login"
import Register from "./pages/register"
import NotFound from "./pages/NotFound"
import Sell from "./pages/Sell"
import Plantilla from "./pages/plantilla"
import Navbar from './components/Layouts/NavBar'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/catalogo',
    element: <Catalogo />
  },
  {
    path: '/catalogo/:carid',
    element: <CarId />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/aboutus/history',
    element: <History />
  },
  {
    path: '/Carrito',
    element: <Carrito />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/CarId',
    element: <CarId />
  },
  {
    path: '/NotFound',
    element: <NotFound />
  },
  {
    path: '/Sell',
    element: <Sell />
  },
  {
    path: '/plantilla',
    element: <Plantilla />
  },
  {
    path: '/Shop',
    element: <Shop />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvaider >
    <RouterProvider router={router} />
    </AppProvaider>
  </React.StrictMode>,
)

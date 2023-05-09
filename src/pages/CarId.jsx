import React from 'react'
import { Link, useParams, Navigate, useLocation } from 'react-router-dom'
import { useApp } from '../hooks/useApp'


// React-router-dom -> sirve para crear las rutas de la aplicación
// context -> sirve para compartir información entre componentes sin necesidad de pasar props
// hooks -> sirve para crear funciones que se pueden reutilizar en cualquier componente

function CarId() {
  const location = useLocation() // useLocation -> sirve para obtener la ubicación actual de la aplicación

  const { carid } = useParams() // useParams -> sirve para obtener los parámetros de la url -> /car/:carid -> carid es el parámetro

  const { cards } = useApp() // useApp -> es un custom HOOK que sirve para obtener el contexto de la aplicación

  // const { carid } = useParams() // estoy destructurando el objeto que me devuelve useParams() y obtengo el parámetro carid

  // Encontrar el carro por el id que viene en la url -> /car/:carid
  const car = cards.find(c => c.id == carid)
  if (!car) return <Navigate to="/catalogo" state={{ from: location }} />

  return (
    <div className='container m-auto p-3'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5' >
        <div>
          <img src={car.img} alt={`car ${car.model} ${car.brand}`} className='w-full' />
        </div>
        <div>
          <ul>
            <li>Modelo: {car?.model ?? "Sin Espesificación"}</li>
            <li>Marca: {car?.brand ?? "Sin Espesificación"}</li>
            <li>Año: {car?.year ?? "Sin Espesificación"}</li>
            <li>Color: {car?.color ?? "Sin Espesificación"}</li>
            <li>Precio: {car?.price}</li>
          </ul>
        </div>
      </div>
      <div className='bg-white/50 p-3 rounded-sm'>
        <p className='text-xl font-bold mb-3'>Informacion</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem accusamus excepturi velit architecto earum inventore, amet quisquam dolorum dolore tempora recusandae blanditiis sequi rerum modi quae! Blanditiis, repellendus voluptatum magni iure assumenda laudantium quia distinctio eligendi, consequuntur eos, animi ipsa.</p>
      </div>

      <Link
            className='bg-white'
            to='/shop'>comprar</Link>
    </div>
  )
}

export default CarId
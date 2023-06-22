import React, { useEffect, useState } from 'react'
import { Link, useParams, Navigate, useLocation } from 'react-router-dom'
import { useApp } from '../hooks/useApp'
import Layout from '../components/Layouts/Layout'
import Slider from '../components/Slider'

// React-router-dom -> sirve para crear las rutas de la aplicación
// context -> sirve para compartir información entre componentes sin necesidad de pasar props
// hooks -> sirve para crear funciones que se pueden reutilizar en cualquier componente

function CarId() {
  const location = useLocation() // useLocation -> sirve para obtener la ubicación actual de la aplicación

  const { carid, id } = useParams() // useParams -> sirve para obtener los parámetros de la url -> /car/:carid -> carid es el parámetro

  console.log('carid', carid);

  const { cards, addCardStore } = useApp() // useApp -> es un custom HOOK que sirve para obtener el contexto de la aplicación

  // const { carid } = useParams() // estoy destructurando el objeto que me devuelve useParams() y obtengo el parámetro carid

  // Encontrar el carro por el id que viene en la url -> /car/:carid
  const car = cards.find(c => c.id == carid)
  if (!car) return <Navigate to="/catalogo" state={{ from: location }} />

  const handlerClick = () => {
    addCardStore(car)
    window.location.href = '/carrito'
  }

  const [price, setPrice] = useState(`${car.price}`);

  useEffect(() => {
    const formatter = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    });
    setPrice(formatter.format(car.price));
  }, []);

  return (
    <Layout>
      <div className='container m-auto p-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mb-5' >
          <div className='overflow-hidden'>
            <Slider images={car?.images  ? car?.images.split(',') : [car.img]} className='aspect-video' />
          </div>
          <div className='bg-[#43435e] p-3 rounded-md text-white mb-3 lg:mb-0'>
            <ul className=''>
              <li className='border-2 border-white/20 p-1'>
                <span className='font-bold'>Modelo</span>:
                {car?.model ?? "Sin Espesificación"}
              </li>
              <li className='border-2 border-white/20 p-1'><span className='font-bold'>Marca</span>: {car?.brand ?? "Sin Espesificación"}</li>
              <li className='border-2 border-white/20 p-1'><span className='font-bold'>Año</span>: {car?.year ?? "Sin Espesificación"}</li>
              <li className='border-2 border-white/20 p-1'><span className='font-bold'>Color</span>: {car?.color ?? "Sin Espesificación"}</li>
              <li className='border-2 border-white/20 p-1'><span className='font-bold'>Precio</span>: {price}</li>
              <li className='border-2 border-white/20 p-1'><span className='font-bold'>Kilometros</span>: {car?.km ?? "Sin espesificacion"}</li>
              <li className='border-2 border-white/20 p-1'><span className='font-bold'>Potencia</span>: {car?.cv ?? "Sin espesificacion"}</li>
              <li className='border-2 border-white/20 p-1'><span className='font-bold'>Modificaciones</span>: {car?.modif ?? "Sin espesificacion"}</li>
            </ul>
          </div>
        </div>
        <div className='bg-[#43435e] p-3 rounded-md text-white/70'>
          <p className='text-xl font-bold mb-3'>Informacion</p>
          {car?.info ?? "Sin Espesificación"}
        </div>

        <button
          className='bg-paletter-redlight text-white font-bold py-2 px-4 rounded mt-3 inline-block cursor-pointer hover:bg-paletter-red'
          onClick={handlerClick}
        >comprar</button>
      </div>
    </Layout>
  )
}

export default CarId
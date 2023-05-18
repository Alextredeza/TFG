import React from 'react'
import Layout from '../components/Layouts/Layout'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useApp } from '../hooks/useApp'
import { Navigate } from 'react-router-dom'

function Shop() {

  const { data: login, loading } = useLocalStorage('loggin', false)
  const {
    data: dataLocalStorage,
    saveData: saveLocalStorage,
  } = useLocalStorage('shop', false)
  const [current, setCurrent] = React.useState(0)
  const { clearCardStore } = useApp()


  if (loading) return (
    <div className='relative min-h-screen'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex items-center justify-center'>
          <div className='w-16 h-16 border-t-2 border-white rounded-full animate-spin'></div>
        </div>
      </div>
    </div>
  )

  if (!login) return (<Navigate to="/login" />)

  const LabelWrape = ({ title, type = 'text', id, placeholder }) =>
    <div className='flex flex-col'>
      <label className='font-bold text-2xl text-white/80 mb-1' htmlFor={id}>{title}</label>
      <input name={id} id={id} className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder={placeholder ?? title} type={type} />
    </div>


  const handlerSubmitFirst = (e) => {
    e.preventDefault()
    console.log(e.target)
    setCurrent(1)
  }

  const handlerSubmitSecond = (e) => {
    e.preventDefault()
    console.log(e.target)
    setCurrent(2)
  }

  const handlerSubmitThird = (e) => {
    setCurrent(3)
    clearCardStore()
  }


  return (
    <Layout>
      {dataLocalStorage ? (
        <div className='container m-auto p-3'>
          {current === 0 && (
            <form onSubmit={handlerSubmitFirst} className='bg-paletter-bluesecond p-3 rounded-md flex flex-col gap-4'>
              <div className='flex flex-col'>
                <label className='font-bold text-2xl text-white/80' htmlFor="">Nombres</label>
                <input className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder='Nombre' type="text" />
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-2xl text-white/80' htmlFor="">Apellidos</label>
                <input className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder='Apellidos' type="text" />
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-2xl text-white/80' htmlFor="">Correo</label>
                <input className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder='Correo electronico' type="text" />
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-2xl text-white/80' htmlFor="">Telefono</label>
                <input className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder='Telefono' type="text" />
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-2xl text-white/80' htmlFor="">Direccion</label>
                <input className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder='Dirección' type="text" />
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-2xl text-white/80' htmlFor="">Ciudad</label>
                <input className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder='Ciudad' type="text" />
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-2xl text-white/80' htmlFor="">DNI</label>
                <input className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder='DNI' type="text" />
              </div>
              <button
                className='bg-paletter-redlight text-white font-bold py-2 px-4 rounded mt-3 inline-block cursor-pointer hover:bg-paletter-red'
              >
                Siguiente
              </button>
            </form>
          )}

          {current === 1 && (
            <form onSubmit={handlerSubmitSecond} className='bg-paletter-bluesecond p-3 rounded-md flex flex-col gap-4'>
              <div className='flex flex-col'>
                <label className='font-bold text-2xl text-white/80' htmlFor="">Selecciona el consecionario</label>
                <select name="conces" id="conces">
                  <option value="1">Concesionario 1</option>
                  <option value="2">Concesionario 2</option>
                  <option value="3">Concesionario 3</option>
                </select>
              </div>
              <button
                className='bg-paletter-redlight text-white font-bold py-2 px-4 rounded mt-3 inline-block cursor-pointer hover:bg-paletter-red'
              >
                Siguiente
              </button>
            </form>
          )}

          {current === 2 && (
            <div className='bg-paletter-bluesecond p-3 rounded-md flex flex-col gap-4'>
              <div className=''>
                {dataLocalStorage.map((item, index) => {
                  return (
                    <p className='border border-white p-1' key={index}>{item.model} | € {item.price}</p>
                  )
                })}
              </div>
              <p>
                Total: € {dataLocalStorage.reduce((acc, item) => acc + item.price, 0)}
              </p>
              <button
                onClick={handlerSubmitThird}
                className='bg-paletter-redlight text-white font-bold py-2 px-4 rounded mt-3 inline-block cursor-pointer hover:bg-paletter-red'
              >
                Confirmar Compra
              </button>
            </div>
          )}

          {current === 3 && (
            <div className='bg-paletter-bluesecond p-3 rounded-md flex flex-col gap-4'>
              <p className='text-2xl font-bold text-white/80' >Gracias por comprar, en tu correo te llegara las instrucciónes para continuar con un asesor</p>
            </div>
          )}

        </div>
      ) : (
        <div>
          <h1>Shop</h1>
          <p>NO TIENES NADA AUN</p>
        </div>
      )}
    </Layout>
  )
}

export default Shop
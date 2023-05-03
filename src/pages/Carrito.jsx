import React from 'react'
import { useApp } from '../hooks/useApp'
import { BiX } from 'react-icons/bi'

function Carrito() {

  const { dataLocalStorage, removeCardStore } = useApp()

  if (dataLocalStorage.length === 0) return <p>No tienes nada en tu carrito de compras</p>

  return (
    <div className='container m-auto p-3'>
      <h1>
        Carrito de compras
      </h1>

      <div>
        <p className='text-2xl font-bold' >Total: € {dataLocalStorage.reduce((acc, item) => acc + item.price, 0)}</p>
      </div>

      <div className='p-3 gap-2 flex flex-col'>
        {dataLocalStorage.map((item, index) => {
          return <div key={index} className='p-2 bg-slate-300 rounded-md w-full flex gap-2 h-[7rem] relative'>
            <img src={item.img} alt="imagen de coche" className='rounded-md w-[50%]' />
            <div className='flex gap-2 flex-col'>
              <p className='font-bold text-xl' >{item.model}</p>
              <p className='text-sm' >{item.brand}</p>
              <p className='text-red-500 text-2xl font-bold' >€ {item.price}</p>
              <button
                onClick={() => {
                  removeCardStore(item.uuid)
                }}
                className='absolute top-0 right-0' >
                <BiX className='font-bold text-2xl text-red-500' />
              </button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Carrito
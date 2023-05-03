import React from 'react'
import Layout from '../components/Layouts/Layout'
import Menu from '../components/Layouts/Menu'

import { useApp } from '../hooks/useApp'

function Catalogo() {
  const { cards, filter, filters, addCardStore } = useApp()

  return (
    <Layout>
      <div className='flex h-[calc(100vh_-_3rem)]'>
        <Menu />
        <div className='bg-slate-400 w-full overflow-auto ' >
          <button
            onClick={() => filter({
              type: 'price',
              value: 500
            })}
          >
            filtrar carros a € 500
          </button>
          <div className='p-3 gap-2 grid grid-cols-responsive'>
            {filters.length > 0 && filters.map((item, index) => {
              return <div key={index} className='p-2 bg-slate-300 rounded-md w-full flex gap-2 max-h-24rem]'>
                <img src={item.img} alt="imagen de coche" className='rounded-md w-[50%]' />
                <div className='flex gap-2 flex-col'>
                  <p className='font-bold text-xl' >{item.model}</p>
                  <p className='text-sm' >{item.brand}</p>
                  <p className='text-red-500 text-2xl font-bold' >€ {item.price}</p>
                  <p className='text-sm cursor-pointer hover:text-red-500'
                    onClick={() => {
                      addCardStore(item)
                    }}
                  >Añadir carrito de compra</p>
                </div>
              </div>
            })}

            {filters.length == 0 && cards.map((item, index) => {
              return <div key={index} className='p-2 bg-slate-300 rounded-md w-full flex gap-2 max-h-24rem]'>
                <img src={item.img} alt="imagen de coche" className='rounded-md w-[50%]' />
                <div className='flex gap-2 flex-col'>
                  <p className='font-bold text-xl' >{item.model}</p>
                  <p className='text-sm' >{item.brand}</p>
                  <p className='text-red-500 text-2xl font-bold' >€ {item.price}</p>
                  <p className='text-sm cursor-pointer hover:text-red-500'
                    onClick={() => {
                      addCardStore(item)
                    }}
                  >Añadir carrito de compra</p>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Catalogo
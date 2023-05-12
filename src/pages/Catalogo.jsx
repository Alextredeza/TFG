import React from 'react'
import Layout from '../components/Layouts/Layout'
import Menu from '../components/Layouts/Menu'

import { useApp } from '../hooks/useApp'
import {CardCatologo} from '../components/CardCatologo'

function Catalogo() {
  const { cards, filters, addCardStore } = useApp()

  return (
    <Layout>
      <div className='flex h-[calc(100vh_-_4rem)]'>
        <Menu />
        <div className='bg-paletter-blue w-full overflow-auto ' >
          <div className='p-3 gap-2 grid grid-cols-1 lg:grid-cols-3'>
            {filters.length > 0 && filters.map((item, index) => {
              return <CardCatologo index={index} item={item} addCardStore={addCardStore} key={index}/>
            })}

            {filters.length == 0 && cards.map((item, index) => {
              return <CardCatologo index={index} item={item} addCardStore={addCardStore} key={index}/>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Catalogo
import React from 'react'
import Layout from '../components/Layouts/Layout'

const NotFound = () => {
  return (
    <Layout>
        <div className='h-[calc(100vh_-_4rem)] flex items-center justify-center'>
            <h1 className='text-3xl font-bold text-white' >Pagina no encontrada</h1>
        </div>
    </Layout>
  )
}

export default NotFound
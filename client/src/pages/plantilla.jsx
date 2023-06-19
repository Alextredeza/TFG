import React from 'react'
import { useApp } from '../hooks/useApp'
import Layout from '../components/Layouts/Layout'

const plantilla = () => {

    const { staff } = useApp()

    return (
        <Layout>
            <div className='container m-auto p-3s'>
                <div className='my-5 flex gap-5 flex-wrap'>
                    {staff.map((item) => (
                        <div key={item.id} className='p-3 bg-palletter-blue drop-shadow-md shadow-md rounded-md w-1/4 flex flex-col items-center'>
                            <img src={item.avatar} alt="" />
                            <p className='text-white font-bold'>{item.name}</p>
                            <br></br>
                            <p className='text-white'>{item.puesto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default plantilla
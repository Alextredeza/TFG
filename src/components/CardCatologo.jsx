import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const CardCatologo = ({ item, index, addCardStore }) => {

    const [price, setPrice] = useState(`${item.price}`)

    useEffect(() => {
        const formatter = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
        })
        setPrice(formatter.format(item.price))
    }, [])

    return <div key={index} className='p-2 bg-paletter-bluesecond text-white rounded-md w-full flex gap-2'>
        <img src={item.img} alt="imagen de coche" className='rounded-md w-[50%]' />
        <div className='flex gap-2 flex-col'>
            <Link to={`/catalogo/${item.id}`} className='font-bold text-xl hover:opacity-50 cursor-pointer' >{item.model}</Link>
            <p className='text-sm' >{item.brand}</p>
            <p className='text-red-500 text-2xl font-bold' >{price}</p>
            <button className='bg-paletter-redlight/50 text-white p-2 w-fit rounded-md'
                onClick={() => {
                    addCardStore(item)
                    window.location.href = '/carrito'
                }}
            ><AiOutlineShoppingCart /></button>
        </div>
    </div>
}

export { CardCatologo }
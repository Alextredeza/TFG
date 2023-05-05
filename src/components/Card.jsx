import React, { useState, useEffect } from 'react'

const Card = ({ item }) => {

    const [price, setPrice] = useState(`${item.price}`)

    useEffect(() => {
        const formatter = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
        })
        setPrice(formatter.format(item.price))
    }, [])

    return (
        <div className='bg-paletter-bluesecond px-4 py-2 rounded-md m-2 hover:opacity-50 cursor-pointer text-paletter-white/80'>
            <img className='w-full rounded-md' src={item.img} alt="" />
            <p className='font-bold text-xl'>{item.model}</p>
            <p className='font-bold'>{item.brand}</p>
            <p className='font-bold text-xl text-paletter-redlight'>{price}</p>
        </div>
    )
}

export default Card
import React from 'react'

const Card = ({item}) => {
    return (
        <div className={`${item.bg ?? 'bg-slate-400'} px-4 py-2 rounded-md m-2`}>
            <img className='w-full rounded-md' src={item.img} alt="" />
            <p className='font-bold text-xl'>{item.model}</p>
            <p className='font-bold'>{item.brand}</p>
            <p className='font-bold text-xl'>{item.price}</p>
        </div>
    )
}

export default Card
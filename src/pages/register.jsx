import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useApp } from '../hooks/useApp'
import { Navigate, useLocation } from 'react-router-dom'

const Register = () => {

    const { addUsers } = useApp()
    const location = useLocation()
    const { data: login, saveData: setLogin } = useLocalStorage('loggin', false)
    const { data: users, saveData: SetUsers } = useLocalStorage('users', [])

    if (login) return (<Navigate to="/catalogo" state={{ from: location }} />)


    const handlerSubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let email = e.target.email.value
        let password = e.target.password.value

        let usersData = users ?? []
        console.log({ usersData });
        usersData.push({ name, email, password })
        SetUsers(usersData)

        setLogin({ name, email })
        return (<Navigate to="/catalogo" state={{ from: location }} />)
    }

    const LabelWrape = ({ title, type = 'text', id, placeholder }) =>
        <div className='flex flex-col'>
            <label className='font-bold text-2xl text-white/80 mb-1' htmlFor={id}>{title}</label>
            <input name={id} id={id} className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder={placeholder ?? title} type={type} />
        </div>

    return (
        <div className='container m-auto p-3 min-h-screen flex items-center justify-center'>
            <form onSubmit={handlerSubmit} className='bg-paletter-bluesecond rounded-md flex flex-col p-4 w-[24rem] gap-4'>
                <LabelWrape type='text' title='Nombre' placeholder="nombre de usuario" id='name' />
                <LabelWrape type='email' title='email' placeholder="Correo electronico" id='email' />
                <LabelWrape type='password' title='Contraseña' placeholder="contraseña" id='password' />
                <button className='bg-paletter-redlight px-1 py-2 rounded-md text-white mt-3 hover:bg-paletter-red'>Registrarse</button>
            </form>
        </div>
    )
}

export default Register
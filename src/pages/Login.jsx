import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Navigate, useLocation, Link } from 'react-router-dom'

const Login = () => {

    const location = useLocation()
    const { data: login, saveData: setLogin } = useLocalStorage('loggin', false)
    const { data: users } = useLocalStorage('users', [])

    if (login) return (<Navigate to="/catalogo" state={{ from: location }} />)


    const handlerSubmit = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        if (!email || !password) return alert('Por favor ingrese todos los campos')

        let usersData = users ? users : []
        let user = usersData.find(user => user.email === email && user.password === password)
        if (!user) return alert('Usuario no encontrado')
        setLogin(user)
        return <Navigate to="/catalogo" state={{ from: location }} />
    }

    return (
        <div className='container m-auto p-3 min-h-screen flex items-center justify-center'>
            <form onSubmit={handlerSubmit} className='bg-paletter-bluesecond rounded-md flex flex-col p-4 w-[24rem] gap-4'>
                <div className='flex flex-col'>
                    <label className='font-bold text-2xl text-white mb-2' htmlFor="email">Correo</label>
                    <input type="email" name="email" id="email" className='p-1 bg-paletter-bluethird text-white rounded-md' placeholder='email' />
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-2xl text-white mb-2' htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" className='p-1 bg-paletter-bluethird text-white rounded-md' placeholder='contraseña' />
                </div>
                <small>¿No tienes cuenta?, <Link to='/register' className='cursor-pointer text-paletter-red'>registrar</Link></small>
                <button className='bg-paletter-redlight px-1 py-2 rounded-md text-white mt-3 hover:bg-paletter-red'>Iniciar sesión</button>
            </form>
        </div>
    )
}

export default Login
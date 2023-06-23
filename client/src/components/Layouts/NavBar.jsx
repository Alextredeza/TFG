import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import getGravatarURL from "../../utils/avatar"

const Navbar = () => {

    const { data: login, saveData: setLogin } = useLocalStorage('loggin', false)
    const [show, setShow] = useState(false)


    const UserWrapper = ({ user }) => {
        return (
            <div
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                onClick={() => setShow(!show)} className="relative group">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10">
                        <img src={getGravatarURL(login.email)} alt="" className='h-full rounded-full' />
                    </div>
                    <div>
                        <div>{user.name}</div>
                    </div>
                </div>
                <div>
                    <div className={"absolute bg-paletter-gray/50 p-2 w-full rounded-md flex-col gap-1 " + (show ? 'flex' : 'hidden')}>
                        <button
                            onClick={() => setLogin(false)}
                            className='hover:opacity-50 cursor-pointer'>Cerrar Session</button>
                        <Link to='/carrito' className='hover:opacity-50 cursor-pointer'>Carrito de compra</Link>
                    </div>
                </div>
            </div>
        )
    }

    let menu = [
        {
            name: 'Operaciones',
            path: '/',
            subMenu: [{ name: 'Comprar', path: '/catalogo' }, { name: 'Vender', path: '/sell' }]
        },
        {
            name: 'Conócenos',
            path: '/curiosidades',
            subMenu: [{ name: 'Nuestra historia', path: '/aboutus/history' }, { name: 'Plantilla', path: '/plantilla' }]
        },
        // { name: 'Carrito', path: '/carrito' },
        // { name: 'Configuración', subMenu: [{ name: 'Ajustes', path: '/ajustes' }, { name: 'Cokies', path: '/iniciarsesion' }] },
        {
            component: login ? <UserWrapper user={login} /> : <Link to='/login'>Iniciar Sesion</Link>,
            path: '/iniciarsesion',
            subMenu: [{ name: 'Iniciar sesion', path: '/iniciar' }, { name: 'Registrarse', path: '/registro' }]
        },
    ]

    return (
        <nav className='bg-paletter-blue shadow-md h-[4rem] flex items-center justify-around text-white'>
            <Link to='/' className="h-full py-1">
                <img
                    src="/logo2.png"
                    alt="logo de la empresa"
                    className="h-full"
                />
            </Link>
            <div className="flex gap-6 items-center">
                {menu.map((item, index) => {
                    if (item?.component) return item.component
                    return <Link to={item.path} className="relative group cursor-pointer" key={index} >
                        {item.name}
                        {item.subMenu &&
                            <div className="absolute bg-paletter-gray/50 p-2 w-full rounded-md flex-col gap-1 hidden group-hover:flex">
                                {item.subMenu.map((subItem, subIndex) => {
                                    return <Link to={subItem.path} key={subIndex} className='hover:opacity-50 cursor-pointer'>
                                        {subItem.name}
                                    </Link>
                                })}
                            </div>
                        }
                    </Link>
                })}
            </div>
        </nav>
    )
}
export default Navbar;
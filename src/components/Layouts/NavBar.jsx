import { Link } from "react-router-dom"

const Navbar = () => {

    let menu = [
        { 
            name: 'Operaciones', 
            path: '/', 
            subMenu:[{ name: 'Comprar', path: '/comprar' }, { name: 'Vender', path: '/vender' }] 
        },
        { 
            name: 'Iniciar Sesion', 
            path: '/iniciarsesion', 
            subMenu:[{ name: 'Iniciar sesion', path: '/iniciar' }, { name: 'Registrarse', path: '/registro' }] 
        },
        { 
            name: 'Conócenos', 
            path: '/curiosidades', 
            subMenu:[{ name: 'Nuestra historia', path: '/aboutus/history' }, { name: 'Historial de ventas', path: '/ventas' }, { name: 'Plantilla', path: '/plantilla' }] 
        },
        { name: 'Carrito', path: '/carrito' },
        { name: 'Configuración', subMenu:[{ name: 'Ajustes', path: '/ajustes' }, { name: 'Cokies', path: '/iniciarsesion' }] },
    ]

    return (
        <nav className='bg-paletter-blue shadow-md h-[4rem] flex items-center justify-around text-white'>
            <Link to='/' className="h-full py-1">
                <img
                    src="logo2.png"
                    alt="logo de la empresa"
                    className="h-full"
                />
            </Link>
            <div className="flex gap-6">
                {menu.map((item, index) => {
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
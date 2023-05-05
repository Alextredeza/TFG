import { Link } from "react-router-dom"

const Navbar = () => {

    let menu = [
        { 
            name: 'Operaciones', 
            path: '/', 
            subMenu:[{ name: 'Compras', path: '/iniciarsesion' }, { name: 'Ventas', path: '/iniciarsesion' }] 
        },
        { name: 'Iniciar Sesion', path: '/iniciarsesion' },
        { name: 'Curiosidades', path: '/curiosidades' },
        { name: 'Carrito', path: '/carrito' },
        { name: 'Configuración', subMenu:[{ name: 'Compras', path: '/iniciarsesion' }, { name: 'Ventas', path: '/iniciarsesion' }] },
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
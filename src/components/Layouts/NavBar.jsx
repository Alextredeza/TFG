const Navbar = () => {

    let menu = [
        { name: 'Operaciones', path: '/', subMenu:[{ name: 'Compras', path: '/iniciarsesion' }] [{ name: 'Ventas', path: '/iniciarsesion' }] },
        { name: 'Iniciar Sesion', path: '/iniciarsesion' },
        { name: 'Curiosidades', path: '/curiosidades' },
        { name: 'Carrito', path: '/carrito' },
        { name: 'Configuración', path: '/configuracion' },
    ]

    return (
        <nav className='bg-cyan-400 h-12 flex items-center justify-around'>
            <div className="h-full py-1">
                <img
                    src="https://img2.freepng.es/20180224/rye/kisspng-sports-car-logo-auto-racing-vector-sports-car-car-wire-frame-png-picture-5a90fc321336a5.2878361915194511860787.jpg"
                    alt="logo de la empresa"
                    className="h-full"
                />
            </div>
            <div className="flex gap-6">
                {menu.map((item, index) => {
                    return <div key={index} >
                        {item.name}
                        {item.subMenu && 
                        <div className="flex flex-col gap-2">
                            {item.subMenu.map((subItem, subIndex) => {
                                return <div key={subIndex}>
                                    {subItem.name}
                                </div>
                            })}
                        </div>
                        }
                    </div>
                })}
            </div>
        </nav>
    )
}
export default Navbar;
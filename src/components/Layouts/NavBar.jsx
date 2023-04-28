const Navbar = () => {

    let menu = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className='bg-red-100 h-12'>
            {menu.map((item, index) => {
                return <a key={index} >{item.name}</a>
            })}
        </nav>
    )
}
export default Navbar;
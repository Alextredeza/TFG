const Menu = () => {
    let menu = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]
    return (
        <nav className='bg-blue-100 w-32'>
            {menu.map((item, index) => {
                return <a key={index} >{item.name}</a>
            })}
        </nav>
    )
}
export default Menu;
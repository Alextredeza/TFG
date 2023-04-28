import React from 'react'

const Layout = ({ children }) => {

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

    return (
        <div className=''>
            <Navbar />
            <div className='flex h-[calc(100vh_-_3rem)]'>
                <Menu />
                <div className='bg-slate-400 w-full overflow-auto ' >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout

// Cotenedor > contenido
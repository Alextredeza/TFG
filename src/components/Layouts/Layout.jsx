import React from 'react'
import Navbar from './NavBar'
import Menu from './Menu'

const Layout = ({ children }) => {
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
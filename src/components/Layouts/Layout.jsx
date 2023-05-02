import React from 'react'
import Navbar from './NavBar'
import Menu from './Menu'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout

// Cotenedor > contenido
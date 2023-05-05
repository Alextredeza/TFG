import React from 'react'
import Navbar from './NavBar'
import Menu from './Menu'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout

// Cotenedor > contenido
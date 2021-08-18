import React from 'react'
import { Link } from './Router'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/countries'>Countries</Link>
        </div>
    )
}

export default Nav

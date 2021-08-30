import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to='#' className='brand-logo hide-on-med-and-down'>
                    My Blog
                </Link>
                <ul id='nav-mobile' className='right'>
                    <li>
                        <NavLink exact to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

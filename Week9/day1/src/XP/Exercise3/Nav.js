import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <ul className='navbar-nav'>
                <li class='nav-item'>
                    <Link class='nav-link' aria-current='page' to='/'>
                        Home
                    </Link>
                </li>
                <li class='nav-item'>
                    <Link class='nav-link' to='/profile'>
                        Profile
                    </Link>
                </li>
                <li class='nav-item'>
                    <Link class='nav-link' to='/shop'>
                        Shop
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav

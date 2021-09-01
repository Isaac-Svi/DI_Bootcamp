import React from 'react'
import { useAuth } from '../providers/AuthProvider'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import PrivateLink from './PrivateLink'
import PublicLink from './PublicLink'

const Navbar = () => {
    const { logout } = useAuth()

    const handleClick = (e) => {
        e.preventDefault()
        logout()
    }

    return (
        <nav>
            <Link to='/' className='logo'>
                <img width='50' src='/static/logo.jpg' alt='logo' />
                <h2>Auth</h2>
            </Link>
            <ul>
                <PublicLink to='/signin'>Sign In</PublicLink>
                <PublicLink to='/register'>Register</PublicLink>
                <PrivateLink to='/dashboard'>Dashboard</PrivateLink>
                <PrivateLink to='/##' onClick={handleClick}>
                    Sign Out
                </PrivateLink>
            </ul>
        </nav>
    )
}

export default Navbar

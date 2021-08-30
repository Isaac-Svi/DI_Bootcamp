import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Link to='/'>MovieSeriesInfo</Link>
            </div>
            <ul>
                <li>
                    <i className='fab fa-imdb yellow'></i>
                </li>
                <li>
                    <i className='fab fa-react cyan'></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

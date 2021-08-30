import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            Using <i className='fab fa-react'></i> React JS &amp; Redux JS
            integrated with external movies data API{' '}
            <a href='https://omdbapi.com'>OMDB</a>
        </footer>
    )
}

export default Footer

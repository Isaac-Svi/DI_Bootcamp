import React from 'react'
import MoviesContainer from '../components/MoviesContainer'
import SearchForm from '../components/SearchForm'
import '../styles/Landing.css'

const Landing = () => {
    return (
        <div className='searchbox-container'>
            <h1>
                <i className='fas fa-search'></i> Search for a movie ,TV series
                ..
            </h1>
            <SearchForm />
            <MoviesContainer />
        </div>
    )
}

export default Landing

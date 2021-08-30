import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ imdbID, Title, Year, Poster }) => {
    return (
        <div className='movie-card'>
            <img src={Poster} alt={`${Title} poster`} />
            <p>
                {Title} - {Year}
            </p>
            <Link className='btn btn-primary' to={`/movie/${imdbID}`}>
                Movie Details <i className='fas fa-chevron-right'></i>
            </Link>
        </div>
    )
}

export default MovieCard

import React from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'
import Loader from './Loader'
import '../styles/MoviesContainer.css'

const MoviesContainer = ({ movies, loading }) => {
    return (
        <div className='movies-container'>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {movies ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.imdbID} {...movie} />
                        ))
                    ) : (
                        <p>No movies found</p>
                    )}
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies,
        loading: state.movieReducer.loading,
    }
}

export default connect(mapStateToProps)(MoviesContainer)

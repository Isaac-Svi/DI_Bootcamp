import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectMovie } from './actions'

class MovieList extends Component {
    render() {
        const { getMovie, movies } = this.props

        return (
            <div>
                <h1>Movie List</h1>
                <div className='movie-list'>
                    {movies.map((movie, i) => {
                        return (
                            <div key={`movie-${i}`}>
                                {movie.title}{' '}
                                <button onClick={() => getMovie(movie)}>details</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { movies: state.moviesReducer.movies }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: (movie) => dispatch(selectMovie(movie)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../redux/actions'
import Loader from '../components/Loader'
import '../styles/Movie.css'

const Movie = ({ loading, movie, history, match, dispatch }) => {
    useEffect(() => {
        console.log('fetched')
        dispatch(fetchMovie(match.params.id))
    }, [])

    const goBack = (e) => {
        e.preventDefault()
        history.goBack()
    }

    const {
        imdbID,
        Poster,
        Title,
        Genre,
        Released,
        Rated,
        imdbRating,
        Director,
        Writer,
        Actors,
        Plot,
    } = movie

    if (loading) return <Loader />

    return (
        <div className='movie-details'>
            <img src={Poster} alt='' />
            <h2 className='title'>{Title}</h2>
            <ul>
                <li>
                    <strong>Genre: </strong>
                    {Genre}
                </li>
                <li>
                    <strong>Released: </strong>
                    {Released}
                </li>
                <li>
                    <strong>Rated: </strong>
                    {Rated}
                </li>
                <li>
                    <strong>IMDB Rating: </strong>
                    {imdbRating}
                </li>
                <li>
                    <strong>Director: </strong>
                    {Director}
                </li>
                <li>
                    <strong>Writer: </strong>
                    {Writer}
                </li>
                <li>
                    <strong>Actors: </strong>
                    {Actors}
                </li>
            </ul>
            <div className='plot'>
                <h2>About</h2>
                <p>{Plot}</p>
                <div className='buttons'>
                    <a
                        href={`https://imdb.com/title/${imdbID}`}
                        target='_blank'
                        rel='noreferrer'
                        className='btn btn-primary'
                    >
                        View on IMDB
                    </a>
                    <span className='link white' onClick={goBack}>
                        Go Back To Search
                    </span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieReducer.movie,
        loading: state.movieReducer.loading,
    }
}

export default connect(mapStateToProps)(Movie)

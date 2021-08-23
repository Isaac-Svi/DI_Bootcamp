import React, { Component } from 'react'
import { connect } from 'react-redux'

class MovieDetails extends Component {
    render() {
        const { title, releaseDate, rating } = this.props

        return (
            <div>
                <h1>Movie</h1>
                <p>Title: {title}</p>
                <p>Release Date: {releaseDate}</p>
                <p>Rating: {rating}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { title, releaseDate, rating } = state.selectedMovieReducer.selectedMovie

    return { title, releaseDate, rating }
}

export default connect(mapStateToProps, null)(MovieDetails)

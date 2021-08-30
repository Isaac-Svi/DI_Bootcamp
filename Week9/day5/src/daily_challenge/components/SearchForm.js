import React from 'react'
import { connect } from 'react-redux'
import { changeText, fetchSearchedMovies } from '../redux/actions'

const SearchForm = ({ text, changeText, fetchSearchedMovies }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchSearchedMovies(text)
    }

    return (
        <form className='searchbox-form' onSubmit={handleSubmit}>
            <input
                type='search'
                value={text}
                onChange={changeText}
                placeholder='Search Movies, TV Series ...'
            />
            <button className='btn-large btn-primary'>Search</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        text: state.textReducer.text,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (e) => dispatch(changeText(e)),
        fetchSearchedMovies: (search) => dispatch(fetchSearchedMovies(search)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)

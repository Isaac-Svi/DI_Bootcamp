import {
    CHANGE_TEXT,
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING,
} from './constants'

const APIKey = 'b3bb3ae'

export const changeText = (e) => {
    const { value } = e.target
    return { type: CHANGE_TEXT, payload: value }
}

export const fetchSearchedMovies = (searchTerm) => async (dispatch) => {
    dispatch({ type: LOADING })

    try {
        const res = await fetch(
            `https://www.omdbapi.com/?apikey=${APIKey}&s=${searchTerm}`
        )
        const { Search } = await res.json()

        dispatch({ type: FETCH_MOVIES, payload: Search })
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchMovie = (id) => async (dispatch) => {
    dispatch({ type: LOADING })

    try {
        const res = await fetch(
            `https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`
        )
        const data = await res.json()

        dispatch({ type: FETCH_MOVIE, payload: data })
    } catch (err) {
        throw new Error(err)
    }
}

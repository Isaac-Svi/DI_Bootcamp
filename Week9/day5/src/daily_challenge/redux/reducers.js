import { combineReducers } from 'redux'
import {
    CHANGE_TEXT,
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING,
} from './constants'

const textReducer = (state, action = {}) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return { ...state, text: action.payload }
        default:
            return { ...state }
    }
}

const movieReducer = (state, action = {}) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return { ...state }
        case FETCH_MOVIES:
            return { ...state, movies: action.payload, loading: false }
        case FETCH_MOVIE:
            return { ...state, movie: action.payload, loading: false }
        case LOADING:
            return { ...state, loading: true }
        default:
            return { ...state }
    }
}

export default combineReducers({
    movieReducer,
    textReducer,
})

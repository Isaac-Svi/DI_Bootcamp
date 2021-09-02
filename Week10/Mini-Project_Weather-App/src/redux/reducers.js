import { combineReducers } from 'redux'
import {
    GET_CITY,
    GET_FAVORITES,
    GET_FORECAST,
    FORECAST_LOADING,
    CHANGE_SEARCH_TEXT,
    CITY_LOADING,
    FAVORITES_LOADING,
    TOGGLE_FAVORITE,
    RESULTS_LOADING,
    RESULTS,
    RESULTS_ERROR,
    FORECAST_ERROR,
    CITY_ERROR,
    FAVORITES_ERROR,
} from './constants'

const textReducer = (state, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return { ...state, text: action.payload }
        case RESULTS:
            return { ...state, results: action.payload }
        case RESULTS_LOADING:
            return { ...state, loading: true }
        case RESULTS_ERROR:
            return { ...state, error: action.payload }
        default:
            return { ...state }
    }
}

const forecastReducer = (state, action = {}) => {
    switch (action.type) {
        case FORECAST_LOADING:
            return { ...state, loading: true }
        case GET_FORECAST:
            return {
                ...state,
                loading: false,
                forecast: action.payload,
            }
        case FORECAST_ERROR:
            return { ...state, error: action.payload }
        default:
            return { ...state }
    }
}

const cityReducer = (state, action = {}) => {
    switch (action.type) {
        case CITY_LOADING:
            return { ...state, loading: true }
        case GET_CITY:
            return { ...state, loading: false, city: action.payload }
        case CITY_ERROR:
            return { ...state, error: action.payload }
        default:
            return { ...state }
    }
}

const favoritesReducer = (state, action = {}) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const { cityKey, cityName } = action.payload
            const index = state.favorites.findIndex(
                (fav) => fav.cityKey === cityKey
            )
            if (index === -1) {
                state.favorites.push({ cityKey, cityName })
                console.log(state.favorites)
            } else {
                state.favorites.splice(index, 1)
            }
            localStorage.setItem(
                'favorites',
                JSON.stringify([...state.favorites])
            )
            return { ...state, favorites: [...state.favorites] }
        case FAVORITES_LOADING:
            return { ...state, loading: true }
        case GET_FAVORITES:
            return { ...state, loading: false, favObjects: action.payload }
        case FAVORITES_ERROR:
            return { ...state, error: action.payload }
        default:
            return { ...state }
    }
}

export default combineReducers({
    textReducer,
    cityReducer,
    forecastReducer,
    favoritesReducer,
})

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]))
}

const initialState = {
    textReducer: {
        text: '',
        loading: true,
        results: [], // cities that possibly match with user search
        error: null,
    },
    cityReducer: {
        loading: true,
        city: {},
        error: null,
    },
    forecastReducer: {
        loading: true,
        forecast: [],
        error: null,
    },
    favoritesReducer: {
        loading: true,
        favorites: [...JSON.parse(localStorage.getItem('favorites'))],
        favObjects: [],
        error: null,
    },
}

export default createStore(reducers, initialState, applyMiddleware(thunk))

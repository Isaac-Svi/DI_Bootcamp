import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const initialState = {
    textReducer: {
        text: '',
    },
    movieReducer: {
        movies: [],
        loading: false,
        movie: [],
    },
}

export default createStore(reducers, initialState, applyMiddleware(thunk))

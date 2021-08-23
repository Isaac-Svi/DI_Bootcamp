import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducers } from './reducers'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'
import './dc.css'

const store = createStore(reducers)

const DC = () => {
    return (
        <Provider store={store}>
            <h1>Redux Movies</h1>
            <div className='container'>
                <MovieList />
                <MovieDetails />
            </div>
        </Provider>
    )
}

export default DC

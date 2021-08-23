import { createStore } from 'redux'
import { actionTypes } from '../actions'

const { INCREASE_COUNT, DECREASE_COUNT } = actionTypes

const initialState = { count: 0 }

export const reducer = (state, action) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return { ...state, count: ++state.count }
        case DECREASE_COUNT:
            return { ...state, count: --state.count }
        default:
            return { ...state }
    }
}

export const store = createStore(reducer, initialState)

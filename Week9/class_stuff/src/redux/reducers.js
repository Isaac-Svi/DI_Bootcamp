import { combineReducers } from 'redux'
import { I1, I2, PLUS_ONE, MINUS_ONE } from './constants'

const initialState = {
    i1: 'text 1',
    i2: 'text 2',
    count: 0,
}

export const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case I1:
            return { ...state, i1: action.payload }
        case I2:
            return { ...state, i2: action.payload }
        default:
            return { ...state }
        // in the following 2 cases, you can see that
        // we don't always need to do calculation in separate
        // action then get payload. we can also just send action
        // type, which will trigger a case where we manipulate the
        // state directly in the reducer
        // case PLUS_ONE:
        //     return { ...state, count: state.count + 1 }
        // case MINUS_ONE:
        //     return { ...state, count: state.count - 1 }
        // default:
        //     return { ...state }
    }
}

// we can also combine reducers
export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return { ...state, count: state.count + 1 }
        case MINUS_ONE:
            return { ...state, count: state.count - 1 }
        default:
            return { ...state }
    }
}

// Most of the time, you want to have a few reducers.  Otherwise it might
// be very hard to manage a huge reducer.
export const reducer = combineReducers({
    textReducer,
    countReducer,
})

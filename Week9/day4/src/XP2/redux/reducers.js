import { AGE_UP, AGE_DOWN } from './constants'

const initialState = {
    age: 20,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case AGE_UP:
            return { age: state.age + 1 }
        case AGE_DOWN:
            return { age: state.age - 1 }
        default:
            return { ...state }
    }
}

export default reducer

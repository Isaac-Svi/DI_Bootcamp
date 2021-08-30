import { FNAME, SNAME, GET_RESULT } from './constants'

const initialState = {
    fname: '',
    sname: '',
    result: {},
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FNAME:
            return { ...state, fname: action.payload }
        case SNAME:
            return { ...state, sname: action.payload }
        case GET_RESULT:
            return { ...state, result: action.payload }
        default:
            return { ...state }
    }
}

export default reducer

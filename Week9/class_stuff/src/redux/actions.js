import { I1, I2, MINUS_ONE, PLUS_ONE } from './constants'

export const changeI1 = (value) => {
    return { type: I1, payload: value }
}

export const changeI2 = (value) => {
    return { type: I2, payload: value }
}

export const changeInput = ({ type, value }) => {
    return { type, payload: value }
}

export const plusOne = () => {
    return { type: PLUS_ONE }
}

export const minusOne = () => {
    return { type: MINUS_ONE }
}

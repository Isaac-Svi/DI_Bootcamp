import { ADD_TODO, CHANGE_INPUT, TOGGLE_DONE } from './constants'

export const addTodo = (value) => {
    return { type: ADD_TODO, payload: value }
}

export const changeInput = (e) => {
    const { value } = e.target

    return { type: CHANGE_INPUT, payload: value }
}

export const toggleTodoDone = (index) => {
    return { type: TOGGLE_DONE, payload: index }
}

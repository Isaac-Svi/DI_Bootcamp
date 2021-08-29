import { ADD_TODO, TOGGLE_DONE, CHANGE_INPUT } from '../constants'
import Todo from '../../utils/Todo'
import { todos, initialState } from '../initialState'

export const todosReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TODO:
            todos.push(new Todo(action.payload))
            return { input: '', todos: [...todos] }
        case TOGGLE_DONE:
            const index = action.payload
            todos[index].done = !todos[index].done
            return { ...state, todos: [...todos] }
        case CHANGE_INPUT:
            return { ...state, input: action.payload }
        default:
            return { ...state }
    }
}

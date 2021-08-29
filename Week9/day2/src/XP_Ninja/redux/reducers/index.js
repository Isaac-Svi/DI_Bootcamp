import { combineReducers } from 'redux'
import { todosReducer } from './todos'
import { visibilityFilter } from './visibilityFilter'

export default combineReducers({
    todos: todosReducer,
    visibilityFilter,
})

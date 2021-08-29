import { connect } from 'react-redux'
import TodoList from './TodoList'
import { toggleTodoDone } from './redux/actions'
import { VISIBILITY_FILTERS } from './redux/constants'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VISIBILITY_FILTERS.GET_ALL:
            return [...todos]
        case VISIBILITY_FILTERS.GET_ACTIVE:
            return todos.filter((todo) => !todo.done)
        case VISIBILITY_FILTERS.GET_COMPLETE:
            return todos.filter((todo) => todo.done)
        default:
            throw new Error('unknown filter')
    }
}

const mapStateToProps = (state) => {
    const {
        todos: { todos },
        visibilityFilter,
    } = state

    return {
        todos: getVisibleTodos(todos, visibilityFilter),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDone: (index) => dispatch(toggleTodoDone(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

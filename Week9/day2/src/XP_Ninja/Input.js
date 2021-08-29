import React from 'react'
import { connect } from 'react-redux'
import { addTodo, changeInput } from './redux/actions'

const Input = ({ input, changeInput, addTodo }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input) return
        addTodo(input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={input} onChange={changeInput} />
            <button>Add Todo</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        input: state.todos.input,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (value) => dispatch(addTodo(value)),
        changeInput: (e) => dispatch(changeInput(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)

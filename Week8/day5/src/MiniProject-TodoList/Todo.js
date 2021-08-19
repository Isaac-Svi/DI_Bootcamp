import React from 'react'

const Todo = ({ todo, removeTodo }) => {
    return (
        <div className='todo'>
            <div className='todo-text' onClick={removeTodo}>
                {todo}
            </div>
        </div>
    )
}

export default Todo

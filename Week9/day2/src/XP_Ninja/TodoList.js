import React from 'react'
import Input from './Input'
import VisibleLinks from './VisibleLinks'

const TodoList = ({ todos, toggleDone }) => {
    return (
        <div>
            <Input />
            <br />
            <div>
                <span>Show: </span>
                <VisibleLinks />
            </div>
            <ul>
                {todos.map((todo, i) => {
                    return (
                        <li
                            onClick={() => toggleDone(i)}
                            key={todo.id}
                            style={{
                                userSelect: 'none',
                                textDecoration: todo.done
                                    ? 'line-through'
                                    : 'none',
                            }}
                        >
                            {todo.todo}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList

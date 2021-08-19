import React, { Component } from 'react'
import Todo from './Todo'
import Input from './Input'
import './TodoList.css'

export default class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: JSON.parse(localStorage.getItem('todos')) || [],
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('todos')) {
            localStorage.setItem('todos', JSON.stringify([]))
        }
    }

    addTodo = (todo) => {
        const todos = [...this.state.todos, todo]
        localStorage.setItem('todos', JSON.stringify(todos))
        this.setState({ todos })
    }

    removeTodo = (index) => {
        const { todos } = this.state
        todos.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
        this.setState({ todos })
    }

    render() {
        const { todos } = this.state

        return (
            <div className='todo-list'>
                <h1>Todo's</h1>
                {todos.length ? (
                    todos.map((todo, i) => {
                        return (
                            <Todo
                                key={`todo-${i}`}
                                todo={todo}
                                removeTodo={this.removeTodo}
                            />
                        )
                    })
                ) : (
                    <div className='done'>You have no todo's left, yay!</div>
                )}
                <Input addTodo={this.addTodo} />
            </div>
        )
    }
}

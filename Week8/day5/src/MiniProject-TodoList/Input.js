import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: '',
        }
    }

    handleChange = (e) => {
        this.setState({ todo: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
        this.setState({ todo: '' })
    }

    render() {
        const { todo } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <small>Add a new todo:</small>
                <input type='text' value={todo} onChange={this.handleChange} />
            </form>
        )
    }
}

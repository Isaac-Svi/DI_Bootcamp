import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            age: null, // Why null instead of ''?
            errormessage: '',
            textarea: 'The content of a textarea goes in the value attribute',
            select: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    numericHandleChange = (e) => {
        const { name, value } = e.target

        if (/[^0-9]/.test(value)) {
            // alert(`Your ${name} must be a number`)
            this.setState({ errormessage: `Your ${name} must be a number` })
            return
        }

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { value } = e.target.username

        alert(`You are submitting ${value}`)
    }

    render() {
        // just using username instead of making a new header
        // doesn't seem necessary to add header, and it's more neat without it
        const { username, age, errormessage, textarea, select } = this.state

        return (
            <div>
                {username.length > 0 && age && (
                    <h1>
                        Hello {username} {age}
                    </h1>
                )}
                <form onSubmit={this.handleSubmit}>
                    <p>Enter your name:</p>
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={this.handleChange}
                    />
                    <p>Enter your age:</p>
                    <input
                        type='text'
                        name='age'
                        value={age}
                        onChange={this.numericHandleChange}
                    />
                    <span>{errormessage}</span>
                    <br />
                    <textarea name='textarea' value={textarea}></textarea>
                    <br />
                    <select name='select' value={select} onChange={this.handleChange}>
                        <option value='1'>Ford</option>
                        <option value='2'>Volvo</option>
                        <option value='3'>Flat</option>
                    </select>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

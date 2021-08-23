import React, { Component } from 'react'
import PostForm from './PostForm'

export default class XPG extends Component {
    state = {
        name: '',
        email: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { name, email } = this.state

        fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err.message))
    }

    render() {
        const { name, email } = this.state

        return (
            <>
                {/* <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type='text'
                        name='name'
                        value={name}
                        placeholder='Name'
                    />
                    <input
                        onChange={this.handleChange}
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                    />
                    <button>Add user</button>
                </form> */}
                <PostForm />
            </>
        )
    }
}

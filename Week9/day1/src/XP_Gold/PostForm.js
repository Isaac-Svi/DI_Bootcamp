import React, { Component } from 'react'
import axios from 'axios'
import '../styles/PostForm.css'

export default class PostForm extends Component {
    state = {
        userId: '',
        title: '',
        body: '',
    }

    submitHandler = async (e) => {
        e.preventDefault()

        const { userId, title, body } = this.state

        try {
            const { data } = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    userId,
                    title,
                    body,
                }
            )

            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {
        const { userId, title, body } = this.state

        return (
            <form onSubmit={this.submitHandler}>
                <input
                    onChange={this.handleChange}
                    value={userId}
                    type='text'
                    name='userId'
                    placeholder='User ID'
                />
                <input
                    onChange={this.handleChange}
                    value={title}
                    type='text'
                    name='title'
                    placeholder='Title'
                />
                <input
                    onChange={this.handleChange}
                    value={body}
                    type='text'
                    name='body'
                    placeholder='Body'
                />
                <button>Submit</button>
            </form>
        )
    }
}

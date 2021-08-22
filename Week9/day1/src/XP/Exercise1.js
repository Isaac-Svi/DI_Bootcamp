import React, { Component } from 'react'
import '../styles/Exercise1.css'

export default class Exercise1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            author: '',
            genre: '',
            yearPublished: '',
            success: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { title, author, genre, yearPublished } = e.target

        console.log({
            title: title.value,
            author: author.value,
            genre: genre.value,
            yearPublished: yearPublished.value,
        })

        this.setState({
            title: title.value,
            author: author.value,
            genre: genre.value,
            yearPublished: yearPublished.value,
            success: true,
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {
        const { title, author, genre, yearPublished, success } = this.state

        return (
            <>
                <h1>New Book</h1>
                {success && <p>data sent!</p>}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title'>Title</label>
                    <input
                        onChange={this.handleChange}
                        type='text'
                        name='title'
                        id='title'
                        value={title}
                    />
                    <label htmlFor='author'>Author</label>
                    <input
                        onChange={this.handleChange}
                        type='text'
                        name='author'
                        id='author'
                        value={author}
                    />
                    <label htmlFor='genre'>Genre</label>
                    <input
                        onChange={this.handleChange}
                        type='text'
                        name='genre'
                        id='genre'
                        value={genre}
                    />
                    <label htmlFor='year-published'>Year Published</label>
                    <input
                        onChange={this.handleChange}
                        type='text'
                        name='yearPublished'
                        id='year-published'
                        value={yearPublished}
                    />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

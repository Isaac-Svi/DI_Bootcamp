import React, { Component } from 'react'

export default class Client extends Component {
    constructor(props) {
        super(props)

        this.state = {
            headerText: '',
            message: '',
            response: '',
        }
    }

    componentDidMount() {
        const fetchHello = async () => {
            try {
                const res = await fetch('http://localhost:4000/api/hello')
                const data = await res.text()

                this.setState({ headerText: data })
            } catch (err) {
                console.log(err.message)
            }
        }

        fetchHello()
    }

    handleChange = (e) => {
        this.setState({ message: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('http://localhost:4000/api/world', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: this.state.message }),
            })

            const data = await res.text()

            this.setState({ response: data })
        } catch (err) {
            console.log(err.message)
        }
    }

    render() {
        const { headerText, message, response } = this.state

        return (
            <div>
                <h1 style={{ fontWeight: 400 }}>{headerText}</h1>
                <h1>Post to Server:</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={message} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <div className='output'>{response}</div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
        }
    }

    occurError = () => {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            throw new Error('Something went wrong')
        }

        return <button onClick={this.occurError}>Occur an error</button>
    }
}

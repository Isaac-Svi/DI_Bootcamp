import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: '',
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo })
    }

    render() {
        const { error, errorInfo } = this.state

        if (error || errorInfo) {
            console.log('error', error)
            console.log('errorInfo', errorInfo)
            return <h1>Something went wrong</h1>
        }

        return this.props.children
    }
}

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo })
    }

    render() {
        const { error, errorInfo } = this.state

        if (error) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        <summary>Details</summary>
                        Error: {error.message}
                        {errorInfo.componentStack}
                    </details>
                </div>
            )
        }

        return this.props.children
    }
}

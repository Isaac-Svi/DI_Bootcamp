import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            error: '',
            errorInfo: '',
        }
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo })
    }

    render() {
        const { errorInfo } = this.state

        if (this.state.error) {
            return (
                <div className='card my-5'>
                    <div className='card-header'>
                        An error has occured in this component.{' '}
                        <a href='/'>Reload this page</a>
                    </div>
                    <div className='card-body'>
                        <details className='error-details'>
                            <summary>Click for error details</summary>
                            {errorInfo.componentStack}
                        </details>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

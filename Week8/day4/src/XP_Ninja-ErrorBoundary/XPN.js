import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Modal from './Modal'

export default class XPN extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errorInfo: null,
        }
    }

    componentDidCatch(_, errorInfo) {
        this.setState({ errorInfo })
    }

    render() {
        console.log(JSON.stringify(this.state.errorInfo))

        return (
            <>
                <ErrorBoundary hasError={this.state.hasError} />
                {this.state.errorInfo && (
                    <Modal>
                        <p>Error: Something went wrong!</p>
                        <details>
                            <summary>Details</summary>
                            <div style={{ whiteSpace: 'pre-wrap' }}>
                                {this.state.errorInfo.componentStack}
                            </div>
                        </details>
                    </Modal>
                )}
            </>
        )
    }
}

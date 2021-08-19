import React, { Component } from 'react'
import './Modal.css'

export default class Modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true,
        }
    }

    close = () => {
        this.setState({ show: false })
    }

    render() {
        const { show } = this.state

        return (
            <div style={{ display: show ? 'flex' : 'none' }} className='modal-background'>
                <div className='modal-body'>
                    {this.props.children}
                    <button onClick={this.close}>Close</button>
                </div>
            </div>
        )
    }
}

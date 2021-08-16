import React, { Component } from 'react'
import './Language.css'

export default class Language extends Component {
    constructor(props) {
        super(props)

        this.state = {
            votes: this.props.votes,
        }
    }

    handleClick = () => {
        this.setState({ votes: ++this.state.votes })
    }

    render() {
        const { votes } = this.state
        const { name } = this.props

        return (
            <div className='language'>
                <span>{votes}</span>
                <span>{name}</span>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        )
    }
}

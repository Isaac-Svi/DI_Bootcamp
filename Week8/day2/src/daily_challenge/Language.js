import React, { Component } from 'react'
import './Language.css'

export default class Language extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, handleClick, votes } = this.props

        return (
            <div className='language'>
                <span>{votes}</span>
                <span>{name}</span>
                <button onClick={handleClick}>Click Here</button>
            </div>
        )
    }
}

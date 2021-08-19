import React, { Component } from 'react'

export default class QuoteInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { quote, author } = this.props

        return (
            <div key={Math.random()} className='info fade-in-down'>
                <h1>"{quote}"</h1>
                <p>
                    <em>-{author ? author : 'Unknown'}-</em>
                </p>
            </div>
        )
    }
}

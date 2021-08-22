import React, { Component } from 'react'
import Countries from './Countries'

const getSuggestions = (arr, value) =>
    arr.filter((x) => {
        return value && x.toLowerCase().startsWith(value.toLowerCase())
    })

export default class AutoCompletedText extends Component {
    constructor(props) {
        super(props)

        this.state = {
            suggestions: [],
            text: '',
        }
    }

    handleChange = (e) => {
        const { value } = e.target

        this.setState({
            text: value,
            suggestions: getSuggestions(Countries, value),
        })
    }

    handleClick = (value) => {
        this.setState({
            text: value,
            suggestions: getSuggestions(Countries, value),
        })
    }

    render() {
        const { suggestions, text } = this.state

        return (
            <div>
                <h1>Auto Completed</h1>
                <input type='text' value={text} onChange={this.handleChange} />
                <ul className='output'>
                    {suggestions.map((x, i) => {
                        return (
                            <li
                                style={{ cursor: 'pointer' }}
                                key={i}
                                onClick={() => this.handleClick(x)}
                            >
                                {x}
                            </li>
                        )
                    })}
                </ul>
                <div className='num-suggestions'>Suggestions: {suggestions.length}</div>
            </div>
        )
    }
}

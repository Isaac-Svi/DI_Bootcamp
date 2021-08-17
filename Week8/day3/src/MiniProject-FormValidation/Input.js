import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            // could have kept errors in an array to show at same time
            // like project specified, but i preferred only showing one
            // error at a time
            error: '',
        }
    }

    validate = (value) => {
        // pattern can be a regex object or string
        // if it's a string, it will be converted into RegExp object

        // clearTimeout while user is typing, since error might be gone
        clearTimeout(this.timeout)

        let { pattern, label } = this.props

        if (!value) {
            return `${label} is required`
        } else {
            this.timeout = setTimeout(() => {
                if (typeof pattern === 'string') {
                    pattern = new RegExp(pattern)
                }

                if (pattern && !pattern.test(value)) {
                    this.setState({ error: `${label} is invalid` })
                }
            }, 1000)
        }
    }

    handleChange = (e) => {
        const { value } = e.target

        const error = this.validate(value)
        this.setState({ value, error })
    }

    render() {
        const { label, id } = this.props
        const { value, error } = this.state

        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input
                    autoComplete='off'
                    type='text'
                    onChange={this.handleChange}
                    value={value}
                    id={id}
                />
                {error && <div className='error'>{error}</div>}
            </div>
        )
    }
}

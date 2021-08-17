import React, { Component } from 'react'

export default class Exercise2 extends Component {
    constructor() {
        super()
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${e.target.value}`)
        }
    }

    render() {
        return <input type='text' onKeyPress={this.handleKeyPress} />
    }
}

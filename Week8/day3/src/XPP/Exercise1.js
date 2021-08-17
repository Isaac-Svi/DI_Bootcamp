import React, { Component } from 'react'

export default class Exercise1 extends Component {
    constructor() {
        super()
    }

    clickHandler = () => {
        alert('I was clicked')
    }

    render() {
        return <button onClick={this.clickHandler}>Click Me!</button>
    }
}

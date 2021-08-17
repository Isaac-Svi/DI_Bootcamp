import React, { Component } from 'react'

export default class Exercise6 extends Component {
    constructor(props) {
        super(props)
    }

    shootTwo = () => {
        alert(this)
    }

    render() {
        return <button onClick={this.shootTwo}>Keep Shooting!</button>
    }
}

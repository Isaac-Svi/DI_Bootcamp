import React, { Component } from 'react'

export default class Exercise5 extends Component {
    constructor(props) {
        super(props)
        this.shootWithArgument = this.shootWithArgument.bind(this)
    }

    shootWithArgument(x) {
        alert(x)
    }

    render() {
        return <button onClick={() => this.shootWithArgument('Goal')}>Shooting!</button>
    }
}

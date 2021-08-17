import React, { Component } from 'react'

export default class Exercise4 extends Component {
    constructor() {
        super()

        this.shootRegularWithParameter = this.shootRegularWithParameter.bind(this, 'Goal')
    }

    shootRegularWithParameter(x) {
        alert(x)
    }

    render() {
        return <button onClick={this.shootRegularWithParameter}>Shooting!</button>
    }
}

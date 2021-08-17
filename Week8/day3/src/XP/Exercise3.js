import React, { Component } from 'react'

export default class Exercise3 extends Component {
    constructor() {
        super()

        this.shootRegular = this.shootRegular.bind(this)
    }

    shootRegular() {
        alert(this)
        console.log(this)
    }

    render() {
        return <button onClick={this.shootRegular}>Keep Shooting!</button>
    }
}

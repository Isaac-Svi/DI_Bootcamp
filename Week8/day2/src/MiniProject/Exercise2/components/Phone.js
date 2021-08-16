import React, { Component } from 'react'

const randomNum = (min, max) => {
    max -= min
    return Math.floor(Math.random() * max + min)
}

export default class Phone extends Component {
    constructor(props) {
        super(props)

        this.colors = ['black', 'blue', 'green', 'purple', 'silver', 'red']

        this.state = {
            brand: 'Samsung',
            model: 'Galaxy S20',
            color: 'black',
            year: 2020,
        }
    }

    changeColor = () => {
        this.setState({ color: this.colors[randomNum(0, this.colors.length)] })
    }

    render() {
        return (
            <div>
                <h1>My phone is a {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}
                </p>
                <button onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}

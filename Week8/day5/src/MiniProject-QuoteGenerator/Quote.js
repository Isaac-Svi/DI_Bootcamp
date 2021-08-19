import React, { Component } from 'react'
import quotes from './quotes'
import './Quote.css'
import QuoteInfo from './QuoteInfo'

const randomNum = (min, max) => {
    max -= min
    return Math.floor(Math.random() * max + min)
}

const randomColor = () => {
    const c = () => randomNum(0, 255)

    return `rgb(${c()},${c()},${c()})`
}

export default class Quote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quoteIndex: randomNum(0, quotes.length),
            color: '',
        }
    }

    componentDidMount() {
        this.getNewQuote()
    }

    getNewQuote = () => {
        // just make sure same quote doesn't come up twice in a row
        while (true) {
            const quoteIndex = randomNum(0, quotes.length)

            if (quoteIndex !== this.state.quoteIndex) {
                this.setState({ quoteIndex })
                break
            }
        }

        document.body.style.setProperty('--color', randomColor())
    }

    render() {
        const { quoteIndex } = this.state
        const quote = quotes[quoteIndex]

        return (
            <div className='quote-box'>
                <QuoteInfo {...quote} />
                <div className='button-container'>
                    <button onClick={this.getNewQuote}>New quote</button>
                </div>
            </div>
        )
    }
}

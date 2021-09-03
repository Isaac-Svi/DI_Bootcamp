import React from 'react'
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            calculation: '',
            results: '',
            justEvaluated: false,
        }
    }

    doOperation = (e) => {
        const { innerText } = e.target
        const { calculation, results, justEvaluated } = this.state
        if (justEvaluated) {
            this.setState({
                calculation: results + innerText,
                justEvaluated: false,
            })
        } else {
            this.setState({ calculation: calculation + innerText })
        }
    }

    evaluate = () => {
        const { calculation } = this.state
        this.setState({
            results: eval(calculation),
            calculation: calculation + ' = ' + eval(calculation),
            justEvaluated: true,
        })
    }

    clear = () => {
        this.setState({ results: '', calculation: '' })
    }

    buttonInfo = [
        { func: this.clear, className: 'ac', text: 'AC' },
        { func: this.doOperation, className: 'divide', text: '/' },
        { func: this.doOperation, className: 'multiply', text: '*' },
        { func: this.doOperation, className: 'seven', text: 7 },
        { func: this.doOperation, className: 'eight', text: 8 },
        { func: this.doOperation, className: 'nine', text: 9 },
        { func: this.doOperation, className: 'subtract', text: '-' },
        { func: this.doOperation, className: 'four', text: 4 },
        { func: this.doOperation, className: 'five', text: 5 },
        { func: this.doOperation, className: 'six', text: 6 },
        { func: this.doOperation, className: 'add', text: '+' },
        { func: this.doOperation, className: 'one', text: 1 },
        { func: this.doOperation, className: 'two', text: 2 },
        { func: this.doOperation, className: 'three', text: 3 },
        { func: this.evaluate, className: 'equals', text: '=' },
        { func: this.doOperation, className: 'zero', text: 0 },
        { func: this.doOperation, className: 'dot', text: '.' },
    ]

    render() {
        const { calculation, results } = this.state

        return (
            <div className='calculator'>
                <div className='window'>
                    <div className='calculation'>{calculation}</div>
                    <div className='results'>{results}</div>
                </div>
                <div className='buttons'>
                    {this.buttonInfo.map(({ func, className, text }, i) => {
                        return (
                            <button
                                key={`calc-btn-${i}`}
                                onClick={(e) => func(e)}
                                className={className}
                            >
                                {text}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App

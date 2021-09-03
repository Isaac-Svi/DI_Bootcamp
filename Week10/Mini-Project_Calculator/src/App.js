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

    render() {
        const { calculation, results } = this.state

        return (
            <div className='calculator'>
                <div className='window'>
                    <div className='calculation'>{calculation}</div>
                    <div className='results'>{results}</div>
                </div>
                <div className='buttons'>
                    <button onClick={this.clear} className='ac'>
                        AC
                    </button>
                    <button onClick={this.doOperation} className='divide'>
                        /
                    </button>
                    <button onClick={this.doOperation} className='multiply'>
                        *
                    </button>
                    <button onClick={this.doOperation} className='seven'>
                        7
                    </button>
                    <button onClick={this.doOperation} className='eight'>
                        8
                    </button>
                    <button onClick={this.doOperation} className='nine'>
                        9
                    </button>
                    <button onClick={this.doOperation} className='subtract'>
                        -
                    </button>
                    <button onClick={this.doOperation} className='four'>
                        4
                    </button>
                    <button onClick={this.doOperation} className='five'>
                        5
                    </button>
                    <button onClick={this.doOperation} className='six'>
                        6
                    </button>
                    <button onClick={this.doOperation} className='add'>
                        +
                    </button>
                    <button onClick={this.doOperation} className='one'>
                        1
                    </button>
                    <button onClick={this.doOperation} className='two'>
                        2
                    </button>
                    <button onClick={this.doOperation} className='three'>
                        3
                    </button>
                    <button onClick={this.evaluate} className='equals'>
                        =
                    </button>
                    <button onClick={this.doOperation} className='zero'>
                        0
                    </button>
                    <button onClick={this.doOperation} className='dot'>
                        .
                    </button>
                </div>
            </div>
        )
    }
}

export default App

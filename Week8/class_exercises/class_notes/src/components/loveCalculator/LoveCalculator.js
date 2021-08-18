import React, { Component } from 'react'
import Person from './Person'
import Button from './Button'
import Result from './Result'

export default class LoveCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            sname: '',
            output: {},
        }
    }

    handleChange1 = (e) => {
        this.setState({ fname: e.target.value })
    }

    handleChange2 = (e) => {
        this.setState({ sname: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { fname, sname } = this.state

        fetch(
            `https://love-calculator.p.rapidapi.com/getPercentage` +
                `?fname=${fname}` +
                `&sname=${sname}`,
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-key':
                        '06865f8d81msh36cb45b77de1421p107b51jsn2b83eeee5b68',
                    'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                },
            }
        )
            .then((res) => res.json())
            .then((response) => {
                this.setState({ output: response })
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    render() {
        const { fname, sname, output } = this.state

        return (
            <div>
                <Person num={1} value={fname} handleChange={this.handleChange1} />
                <Person num={2} value={sname} handleChange={this.handleChange2} />
                <Button handleClick={this.handleSubmit} />
                <Result results={output} />
            </div>
        )
    }
}

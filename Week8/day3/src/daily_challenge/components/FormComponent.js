import React, { Component } from 'react'
import Form from './Form'
import Output from './Output'

export default class FormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            nutsFree: '',
            lactoseFree: '',
            vegan: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    handleCheck = (e) => {
        const { name, checked } = e.target

        this.setState({ [name]: checked ? 'on' : '' })
    }

    render() {
        return (
            <div>
                <h1>Sample form</h1>
                <Form
                    details={this.state}
                    handleChange={this.handleChange}
                    handleCheck={this.handleCheck}
                />
                <Output details={this.state} />
            </div>
        )
    }
}

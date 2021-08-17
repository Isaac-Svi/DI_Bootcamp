import React, { Component } from 'react'
import Input from './Input'
import './Form.css'

export default class Form extends Component {
    constructor() {
        super()
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <Input id='fname' label='First name' />
                <Input id='lname' label='Last name' />
                <Input id='phone' label='Phone' pattern='^(\d{1}-)?\d{3}-\d{3}-\d{4}$' />
                <Input id='email' label='Email' pattern={/^\w+@\w+\.\w+$/} />
            </form>
        )
    }
}

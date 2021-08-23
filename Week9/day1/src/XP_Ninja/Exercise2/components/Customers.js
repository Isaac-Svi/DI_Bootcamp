import React, { Component } from 'react'
import SVG from '../../../assets/react-icon.svg'
import '../../../styles/Customers.css'

export default class Customers extends Component {
    state = {
        customers: [],
    }

    componentDidMount() {
        fetch('/api/customers')
            .then((res) => res.json())
            .then((customers) => this.setState({ customers }))
            .catch((err) => console.log(err.message))
    }

    render() {
        return (
            <>
                <header>
                    <img src={SVG} alt='react-icon' />
                    <h2>React &amp; Express</h2>
                </header>
                <ul>
                    <h2>Customers</h2>
                    {this.state.customers.map(({ id, firstName, lastName }) => {
                        return (
                            <li key={id}>
                                {firstName} {lastName}
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

import React, { Component } from 'react'
import { Link } from './Router'
import './CountryLinks.css'

export default class CountryLinks extends Component {
    constructor() {
        super()

        this.state = {
            countries: [],
        }
    }

    componentDidMount() {
        fetch('/api/countries')
            .then((res) => res.json())
            .then((countries) => this.setState({ countries }))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className='country-links'>
                <br />
                {this.state.countries.map(({ country_id, country }) => {
                    return (
                        <div key={`country-${country_id}`}>
                            <Link to={`/country/${country_id}`}>{country}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

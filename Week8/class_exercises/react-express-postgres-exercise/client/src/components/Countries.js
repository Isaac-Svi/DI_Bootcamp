import React, { Component } from 'react'
import Loader from './Loader'
import Select from './Select'
import './Countries.css'

export default class Countries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: [],
            cities: [],
            cityLoading: true,
            countryLoading: true,
        }
    }

    componentDidMount() {
        fetch('/api/countries')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    countries: data,
                    countryLoading: false,
                    cityLoading: false,
                })
                this.handleChange({ target: { value: this.el.value } })
            })
            .catch((err) => console.log(err.message))
    }

    handleChange = ({ target }) => {
        this.setState({ cityLoading: true })

        fetch(`/api/cities/${target.value}`)
            .then((res) => res.json())
            .then((data) => this.setState({ cities: data, cityLoading: false }))
            .catch((err) => console.log(err.message))
    }

    render() {
        const { countries, cities, cityLoading, countryLoading } = this.state

        return (
            <>
                <h1 className='countries-header'>See which cities are in a country: </h1>
                <div className='countries'>
                    {!countryLoading ? (
                        <Select
                            ref={(el) => (this.el = el)}
                            handleChange={this.handleChange}
                            options={countries}
                            keys={['country_id', 'country']}
                        />
                    ) : (
                        <Loader />
                    )}
                    {!cityLoading ? (
                        <Select options={cities} keys={['city_id', 'city']} />
                    ) : (
                        <Loader />
                    )}
                </div>
            </>
        )
    }
}

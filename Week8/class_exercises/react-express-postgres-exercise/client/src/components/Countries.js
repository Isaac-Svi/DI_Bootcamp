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
            loading: false,
        }
    }

    componentDidMount() {
        fetch('/api/countries')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ countries: data })
                this.handleChange({ target: { value: this.el.value } })
            })
            .catch((err) => console.log(err.message))
    }

    handleChange = ({ target }) => {
        this.setState({ loading: true })

        fetch(`/api/cities/${target.value}`)
            .then((res) => res.json())
            .then((data) => this.setState({ cities: data, loading: false }))
            .catch((err) => console.log(err.message))
    }

    render() {
        const { countries, cities, loading } = this.state

        return (
            <>
                <h1 className='countries-header'>See which cities are in a country: </h1>
                <div className='countries'>
                    <Select
                        ref={(el) => (this.el = el)}
                        handleChange={this.handleChange}
                        options={countries}
                        keys={['country_id', 'country']}
                    />
                    {!loading ? (
                        <Select options={cities} keys={['city_id', 'city']} />
                    ) : (
                        <Loader />
                    )}
                </div>
            </>
        )
    }
}

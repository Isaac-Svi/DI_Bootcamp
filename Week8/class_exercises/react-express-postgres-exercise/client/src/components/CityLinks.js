import React, { Component } from 'react'
import Loader from './Loader'

export default class CityLinks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cities: [],
            loading: true,
        }
    }

    getCities = (id) => {
        fetch(`/api/cities/${id}`)
            .then((res) => res.json())
            .then((cities) => this.setState({ cities, loading: false }))
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        const { id } = this.props.match.params

        if (!id) return

        this.getCities(id)
    }

    render() {
        return (
            <ul className='country-links'>
                {this.state.loading ? (
                    <Loader />
                ) : (
                    this.state.cities.map(({ city_id, city }) => {
                        return <li key={`city-${city_id}`}>{city}</li>
                    })
                )}
            </ul>
        )
    }
}

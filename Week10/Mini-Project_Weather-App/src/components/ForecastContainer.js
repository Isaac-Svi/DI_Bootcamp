import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getForecast } from '../redux/actions'
import Loader from './Loader'
import ForecastCard from './ForecastCard'
import Grid from '@material-ui/core/Grid'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ForecastContainer = ({
    city_loading,
    forecast_loading,
    city,
    forecasts,
    getForecast,
    error,
}) => {
    useEffect(() => {
        if (!city_loading) getForecast(city.Key)
    }, [city])

    if (error) throw new Error(error)

    return (
        <>
            {city_loading || forecast_loading ? (
                <Loader />
            ) : (
                <Grid
                    container
                    spacing={3}
                    alignItems='center'
                    justifyContent='space-between'
                >
                    {forecasts.map((forecast, i) => {
                        const date = new Date(forecast.Date)
                        const doy = daysOfWeek[date.getDay()]
                        let { Minimum: min, Maximum: max } =
                            forecast.Temperature
                        min = `${min.Value}°${min.Unit}`
                        max = `${max.Value}°${max.Unit}`

                        return (
                            <ForecastCard
                                key={`forecast-${i}`}
                                doy={doy}
                                min={min}
                                max={max}
                            />
                        )
                    })}
                </Grid>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        city_loading: state.cityReducer.loading,
        forecast_loading: state.forecastReducer.loading,
        city: state.cityReducer.city,
        forecasts: state.forecastReducer.forecast,
        error: state.forecastReducer.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getForecast: (key) => dispatch(getForecast(key)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastContainer)

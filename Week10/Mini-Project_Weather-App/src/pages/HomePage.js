import React from 'react'
import WeatherContainer from '../components/WeatherContainer'
import ForecastContainer from '../components/ForecastContainer'
import AutoComplete from '../components/AutoComplete'
import ErrorBoundary from '../components/ErrorBoundary'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

const HomePage = () => {
    return (
        <Box
            p={3}
            m='auto'
            width='75%'
            height='70vh'
            minWidth={300}
            maxWidth={1100}
        >
            <ErrorBoundary>
                <AutoComplete />
                <br />
                <br />
                <Grid container spacing={3}>
                    <br />
                    <WeatherContainer />
                    <ForecastContainer />
                </Grid>
            </ErrorBoundary>
        </Box>
    )
}

export default HomePage

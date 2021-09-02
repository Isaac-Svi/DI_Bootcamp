import React, { useEffect } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import FavoriteCard from '../components/FavoriteCard'
import Loader from '../components/Loader'
import { connect } from 'react-redux'
import { getFavorites } from '../redux/actions'

const FavoritesPage = ({ favObjects, loading, favorites, getFavorites }) => {
    useEffect(() => {
        getFavorites(favorites)
    }, [])

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
                <Grid container spacing={3}>
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            {favObjects.map((favorite, i) => {
                                console.log(favorite)
                                const { Value, Unit } =
                                    favorite.Temperature.Metric
                                const temp = `${Value}°${Unit}`

                                return (
                                    <FavoriteCard
                                        key={`favorite-${i}`}
                                        cityName={favorite.cityName}
                                        temp={temp}
                                        weatherText={favorite.WeatherText}
                                    />
                                )
                            })}
                        </>
                    )}
                </Grid>
            </ErrorBoundary>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoritesReducer.favorites,
        loading: state.favoritesReducer.loading,
        favObjects: state.favoritesReducer.favObjects,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFavorites: (favorites) => dispatch(getFavorites(favorites)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage)

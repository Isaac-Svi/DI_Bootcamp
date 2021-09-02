import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loader from './Loader'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Button from '@material-ui/core/Button'
import { toggleFavorite, getCity } from '../redux/actions'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        width: '50px',
    },
    flexSection: {
        height: '60px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '10px',
    },
}))

const WeatherContainer = ({
    text,
    favorites,
    loading,
    city,
    getCity,
    toggleFavorite,
    error,
}) => {
    const { Key, LocalizedName, WeatherText, WeatherIcon, Temperature } = city
    const classes = useStyles()

    useEffect(() => {
        getCity(text)
    }, [])

    if (error) {
        console.log(error)
        throw new Error(error)
    }

    return (
        <Grid item xs={12} mt={2}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.flexSection}>
                                <img
                                    width={50}
                                    src={`https://www.accuweather.com/images/weathericons/${WeatherIcon}.svg`}
                                    alt='weather image'
                                />
                                <div>
                                    <span className='name'>
                                        {LocalizedName}{' '}
                                    </span>
                                    <span className='temperature'>
                                        {Temperature.Metric.Value}°
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div
                                style={{ justifyContent: 'flex-end' }}
                                className={classes.flexSection}
                            >
                                {favorites.some(
                                    (fav) => fav.cityKey === Key
                                ) ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                                <Button
                                    onClick={() =>
                                        toggleFavorite(Key, LocalizedName)
                                    }
                                    variant='contained'
                                    color='secondary'
                                >
                                    Add to Favorites
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <h1 style={{ textAlign: 'center' }}>{WeatherText}</h1>
                    </Grid>
                </>
            )}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.cityReducer.city,
        error: state.cityReducer.error,
        text: state.textReducer.text,
        loading: state.cityReducer.loading,
        favorites: state.favoritesReducer.favorites,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCity: (searchText) => dispatch(getCity(searchText)),
        toggleFavorite: (cityKey, cityName) =>
            dispatch(toggleFavorite(cityKey, cityName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)

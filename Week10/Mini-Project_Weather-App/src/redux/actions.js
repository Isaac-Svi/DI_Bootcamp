import {
    GET_CITY,
    CITY_LOADING,
    CITY_ERROR,
    GET_FORECAST,
    FORECAST_LOADING,
    FORECAST_ERROR,
    TOGGLE_FAVORITE,
    GET_FAVORITES,
    FAVORITES_LOADING,
    FAVORITES_ERROR,
    CHANGE_SEARCH_TEXT,
    // FAILED_REQUEST,
    RESULTS,
    RESULTS_ERROR,
} from './constants'
import { getWeatherUrl, getKeyUrl, getForecastUrl } from '../utils'

export const changeText = (e) => async (dispatch) => {
    // TODO: see if there's a better way to do this
    if (!e || !e.target) return

    try {
        const { value } = e.target

        if (typeof value === 'string')
            dispatch({ type: CHANGE_SEARCH_TEXT, payload: value })

        if (!value) return dispatch({ type: RESULTS, payload: [] })

        const res = await fetch(getKeyUrl(value))
        const results = await res.json()

        dispatch({ type: RESULTS, payload: results })
    } catch (err) {
        dispatch({ type: RESULTS_ERROR, payload: err })
    }
}

export const getCity = (searchText) => {
    return async (dispatch) => {
        // default is Tel Aviv
        searchText = searchText ? searchText : 'Tel Aviv'

        dispatch({ type: CITY_LOADING })

        try {
            // get city location key to use for next api call
            let res = await fetch(getKeyUrl(searchText))
            const [{ LocalizedName, Key }] = await res.json()

            dispatch({ type: CHANGE_SEARCH_TEXT, payload: LocalizedName })

            // get details of city
            res = await fetch(getWeatherUrl(Key))
            const [data] = await res.json()

            dispatch({
                type: GET_CITY,
                payload: { Key, LocalizedName, ...data },
            })
        } catch (err) {
            dispatch({ type: CITY_ERROR, payload: err })
        }
    }
}

export const getForecast = (key) => {
    return async (dispatch) => {
        dispatch({ type: FORECAST_LOADING })
        try {
            const res = await fetch(getForecastUrl(key))
            const { DailyForecasts } = await res.json()

            dispatch({ type: GET_FORECAST, payload: DailyForecasts })
        } catch (err) {
            dispatch({ type: FORECAST_ERROR, payload: err })
        }
    }
}

export const toggleFavorite = (cityKey, cityName) => {
    return { type: TOGGLE_FAVORITE, payload: { cityKey, cityName } }
}

export const getFavorites = (favorites) => {
    return async (dispatch) => {
        dispatch({ type: FAVORITES_LOADING })
        try {
            const favs = await Promise.all(
                favorites.map(({ cityKey, cityName }) =>
                    fetch(getWeatherUrl(cityKey)).then(async (res) => {
                        const [data] = await res.json()
                        return {
                            cityName,
                            ...data,
                        }
                    })
                )
            )

            dispatch({ type: GET_FAVORITES, payload: favs })
        } catch (err) {
            dispatch({ type: FAVORITES_ERROR, payload: err })
        }
    }
}

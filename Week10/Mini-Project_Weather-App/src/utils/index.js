export const getKeyUrl = (searchText) => {
    return (
        `${process.env.LOCATION_URL}/cities/autocomplete` +
        `?apikey=${process.env.WEATHER_API_KEY}` +
        `&q=${searchText}` +
        `&language=en-us`
    )
}

export const getWeatherUrl = (key) => {
    return (
        `${process.env.CONDITION_URL}/${key}` +
        `?apikey=${process.env.WEATHER_API_KEY}` +
        `&language=en-us` +
        `&details=false`
    )
}

export const getForecastUrl = (key) => {
    return (
        `${process.env.FORECAST_URL}/${key}` +
        `?apikey=${process.env.WEATHER_API_KEY}` +
        `&language=en-us&details=false` +
        `&metric=true`
    )
}

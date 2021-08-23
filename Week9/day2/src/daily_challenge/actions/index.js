import { MOVIE_SELECTED } from '../constants'

export const selectMovie = (movie) => {
    return { type: MOVIE_SELECTED, payload: movie }
}

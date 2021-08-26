import { FILTER_RESULTS } from './constants'

export const filterResults = (e) => {
    const { value } = e.target

    return { type: FILTER_RESULTS, payload: value }
}

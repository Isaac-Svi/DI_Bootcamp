import { FILTER_RESULTS } from './constants'
import { articles } from '../articles'

const initialState = {
    searchText: '',
    results: articles,
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FILTER_RESULTS:
            const searchText = action.payload
            const results = articles.filter(({ title }) => {
                return title.toLowerCase().includes(searchText.toLowerCase())
            })
            return { ...state, searchText, results }
        default:
            return { ...state }
    }
}

export default reducer

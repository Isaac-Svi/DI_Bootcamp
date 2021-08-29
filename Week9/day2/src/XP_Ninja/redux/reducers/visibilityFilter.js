import { VISIBILITY_FILTERS, SET_VISIBILITY_FILTER } from '../constants'

export const visibilityFilter = (
    state = VISIBILITY_FILTERS.GET_ALL,
    action = {}
) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

import { FILTER_ROBOTS, POPULATE_ROBOTS } from '../constants'

const initialState = {
    robots: [],
    filteredRobots: [],
    searchText: '',
}

export const robotsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FILTER_ROBOTS:
            const { payload: searchText } = action

            const filteredRobots = state.robots.filter(({ name }) =>
                name.toLowerCase().includes(searchText.toLowerCase())
            )

            return { ...state, filteredRobots, searchText }
        case POPULATE_ROBOTS:
            return { ...state, robots: action.payload }
        default:
            return { ...state }
    }
}

import { CHANGE_INPUT, POPULATE_ROBOTS } from './constants'

const initialState = {
    input: '',
    filteredRobots: [],
    robots: [],
    robotsLoading: true,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_INPUT:
            const input = action.payload
            const filteredRobots = state.robots.filter((robot) => {
                return (
                    robot.name &&
                    robot.name.toLowerCase().includes(input.toLowerCase())
                )
            })
            console.log(filteredRobots)
            return { ...state, input, filteredRobots }
        case POPULATE_ROBOTS:
            return {
                ...state,
                filteredRobots: action.payload,
                robots: action.payload,
                robotsLoading: false,
            }
        default:
            return { ...state }
    }
}

export default reducer

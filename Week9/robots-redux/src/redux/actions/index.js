import { FILTER_ROBOTS, POPULATE_ROBOTS } from '../constants'

export const filterRobots = (searchText) => {
    return { type: FILTER_ROBOTS, payload: searchText }
}

// by making our action return another function, we're allowing
// react-thunk to receive the dispatch as a parameter,  this allows
// us to take care of asynchronous operations.
// you can use async/await or fetch
export const populateRobots = () => async (dispatch) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const robots = await res.json()

        dispatch({ type: POPULATE_ROBOTS, payload: robots })
    } catch (err) {
        console.log(err)
    }
}

import { CHANGE_INPUT, POPULATE_ROBOTS } from './constants'

export const changeInput = (e) => {
    const { value } = e.target
    return { type: CHANGE_INPUT, payload: value }
}

export const populateRobots = () => async (dispatch) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        for (const robot of data) {
            robot.image = `https://robohash.org/${robot.id}`
        }

        dispatch({
            type: POPULATE_ROBOTS,
            payload: data,
        })
    } catch (err) {
        throw new Error(err)
    }
}

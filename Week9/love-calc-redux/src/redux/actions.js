import { FNAME, SNAME, GET_RESULT } from './constants'
import axios from 'axios'

export const changeFname = (e) => {
    return { type: FNAME, payload: e.target.value }
}

export const changeSname = (e) => {
    return { type: SNAME, payload: e.target.value }
}

export const getResults =
    ({ fname, sname }) =>
    async (dispatch) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://love-calculator.p.rapidapi.com/getPercentage',
                params: { fname, sname },
                headers: {
                    'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                    'x-rapidapi-key':
                        '06865f8d81msh36cb45b77de1421p107b51jsn2b83eeee5b68',
                },
            }
            const { data } = await axios.request(options)

            dispatch({ type: GET_RESULT, payload: data })
        } catch (err) {
            console.log(err)
        }
    }

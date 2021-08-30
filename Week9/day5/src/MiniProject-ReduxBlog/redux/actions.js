import { DELETE_POST } from './constants'

export const deletePost = (id) => {
    return { type: DELETE_POST, payload: id }
}

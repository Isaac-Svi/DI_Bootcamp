import { DELETE_POST } from './constants'

const initialState = {
    posts: [
        {
            id: '1',
            title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat',
        },
        {
            id: '2',
            title: 'Dolorem eum magni eos aperiam quia',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat',
        },
        {
            id: '3',
            title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat',
        },
    ],
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case DELETE_POST:
            const id = action.payload
            return { posts: state.posts.filter((post) => post.id !== id) }
        default:
            return { ...state }
    }
}

export default reducer

import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'

const XP = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

export default XP

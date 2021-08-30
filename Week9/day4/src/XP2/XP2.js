import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import AgeCounter from './components/AgeCounter'

const XP2 = () => {
    return (
        <Provider store={store}>
            <AgeCounter />
        </Provider>
    )
}

export default XP2

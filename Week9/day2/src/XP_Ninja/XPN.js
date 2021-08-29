import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import VisibleTodoList from './VisibleTodoList'

const XPN = () => {
    return (
        <Provider store={store}>
            <VisibleTodoList />
        </Provider>
    )
}

export default XPN

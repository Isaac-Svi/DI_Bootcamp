import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import TransactionList from './components/TransactionList'

const XP = () => {
    return (
        <Provider store={store}>
            <TransactionList />
        </Provider>
    )
}

export default XP

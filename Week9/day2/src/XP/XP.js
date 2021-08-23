import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './reducers'
import Counter from './Counter'

export default class XP extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        )
    }
}

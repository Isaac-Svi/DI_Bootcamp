import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'

const XPG = () => {
    return (
        <div>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    )
}

export default XPG

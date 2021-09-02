import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// TODO: figure out what/how to store in localStorage
// if (!('projects' in localStorage)) {
//     localStorage.setItem('projects', JSON.stringify({}))
// }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then((registration) => {
            console.log('SW Registered!')
            console.log(registration)
        })
        .catch((error) => {
            console.log('SW Registration failed!')
            console.log(error)
        })
}

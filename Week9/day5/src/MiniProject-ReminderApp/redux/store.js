import { createStore } from 'redux'
// import { read_cookie } from 'sfcookies'
import reducers from './reducers'

if (!localStorage.getItem('reminders')) {
    localStorage.setItem('reminders', JSON.stringify([]))
}

const initialState = {
    text: '',
    date: '',
    // reminders: read_cookie('reminders'),
    reminders: JSON.parse(localStorage.getItem('reminders')),
}

export default createStore(reducers, initialState)

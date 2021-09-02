// import { bake_cookie, delete_cookie } from 'sfcookies'
import {
    CHANGE_TEXT,
    CHANGE_DATE,
    ADD_REMINDER,
    REMOVE_REMINDER,
    CLEAR_REMINDERS,
} from './constants'
import Reminder from '../utils/Reminder'

const reducer = (state, action = {}) => {
    let newReminders

    switch (action.type) {
        case CHANGE_TEXT:
            return { ...state, text: action.payload }
        case CHANGE_DATE:
            return { ...state, date: action.payload }
        case ADD_REMINDER:
            newReminders = [
                ...state.reminders,
                new Reminder(state.text, state.date),
            ]
            localStorage.setItem('reminders', JSON.stringify(newReminders))
            // bake_cookie('reminders', newReminders)
            return { text: '', date: '', reminders: newReminders }
        case REMOVE_REMINDER:
            state.reminders.splice(action.payload, 1)
            newReminders = [...state.reminders]
            localStorage.setItem('reminders', JSON.stringify(newReminders))
            // bake_cookie('reminders', newReminders)
            return { ...state, reminders: newReminders }
        case CLEAR_REMINDERS:
            localStorage.setItem('reminders', JSON.stringify([]))
            // delete_cookie('reminders')
            return { ...state, reminders: [] }
        default:
            return { ...state }
    }
}

export default reducer

import {
    CHANGE_TEXT,
    CHANGE_DATE,
    ADD_REMINDER,
    REMOVE_REMINDER,
    CLEAR_REMINDERS,
} from './constants'

export const changeText = (e) => {
    const { value } = e.target

    return { type: CHANGE_TEXT, payload: value }
}

export const changeDate = (e) => {
    const { value } = e.target

    return { type: CHANGE_DATE, payload: value }
}

export const addReminder = () => {
    return { type: ADD_REMINDER }
}

export const removeReminder = (index) => {
    return { type: REMOVE_REMINDER, payload: index }
}

export const clearReminders = () => {
    return { type: CLEAR_REMINDERS }
}

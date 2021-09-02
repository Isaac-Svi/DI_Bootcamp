import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import ReminderForm from './components/ReminderForm'
import ReminderList from './components/ReminderList'
import './styles/ReminderApp.css'

const ReminderApp = () => {
    return (
        <Provider store={store}>
            <div className='reminder-app container p-4 text-center'>
                <h1>Reminder App</h1>
                <ReminderForm />
                <ReminderList />
            </div>
        </Provider>
    )
}

export default ReminderApp

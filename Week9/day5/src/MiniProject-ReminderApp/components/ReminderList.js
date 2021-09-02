import React from 'react'
import { connect } from 'react-redux'
import { clearReminders } from '../redux/actions'
import Reminder from './Reminder'
import '../styles/ReminderList.css'

const ReminderList = ({ reminders, dispatch }) => {
    return (
        <>
            <ul className='reminder-list list-group col-sm-4'>
                {reminders.map((info, i) => {
                    return (
                        <Reminder key={`reminder-${i}`} index={i} {...info} />
                    )
                })}
            </ul>
            <button
                onClick={() => dispatch(clearReminders())}
                className='btn btn-danger'
            >
                Clear Reminders
            </button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        reminders: state.reminders,
    }
}

export default connect(mapStateToProps)(ReminderList)

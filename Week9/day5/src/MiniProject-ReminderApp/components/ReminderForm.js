import React from 'react'
import { connect } from 'react-redux'
import { changeText, changeDate, addReminder } from '../redux/actions'
import '../styles/ReminderForm.css'

const ReminderForm = ({ text, date, changeText, changeDate, addReminder }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text) return
        addReminder()
    }
    return (
        <form className='reminder-form form-group' onSubmit={handleSubmit}>
            <input
                className='form-control'
                type='text'
                placeholder='I have to...'
                value={text}
                onChange={changeText}
            />
            <input
                className='form-control'
                type='datetime-local'
                value={date}
                onChange={changeDate}
            />
            <button className='btn btn-success'>Add Reminder</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        text: state.text,
        date: state.date,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (e) => dispatch(changeText(e)),
        changeDate: (e) => dispatch(changeDate(e)),
        addReminder: () => dispatch(addReminder()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderForm)

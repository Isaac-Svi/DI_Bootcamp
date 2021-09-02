import React from 'react'
import { connect } from 'react-redux'
import { removeReminder } from '../redux/actions'
import { reduceDate } from '../utils/reduce-date'

const Reminder = ({ index, text, date, dispatch }) => {
    return (
        <li className='list-group-item'>
            <div className='info'>
                <div>{text}</div>
                <div>
                    <em>{reduceDate(date)}</em>
                </div>
            </div>
            <div
                onClick={() => dispatch(removeReminder(index))}
                className='list-item delete-button'
            >
                ✕
            </div>
        </li>
    )
}

export default connect()(Reminder)

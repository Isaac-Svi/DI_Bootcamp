import React, { Component } from 'react'
import Ring from './Ring'

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
]

export default class Clock extends Component {
    constructor(props) {
        super(props)

        const date = new Date()

        this.state = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            dow: date.getDay() + 1, // day of week
            dom: date.getDate(), // day of month
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }
    }

    getNumDaysInMonth = () => {
        const { year, month } = this.state
        return new Date(year, month, 0).getDate()
    }

    tick = setInterval(() => {
        const date = new Date()

        this.setState({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            dow: date.getDay() + 1,
            dom: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        })
    }, 1000)

    render() {
        const { year, dom, dow, month, hour, minute, second } = this.state

        return (
            <div>
                <h1 className='year'>
                    {year}
                    <small>/ Year</small>
                </h1>
                <Ring numSections={12} targetIndex={month} translate={5} type='month' />
                <Ring
                    percentage={15}
                    numSections={7}
                    targetIndex={dow}
                    translate={11}
                    type='week'
                />
                <Ring
                    numSections={this.getNumDaysInMonth()}
                    targetIndex={dom}
                    translate={16.5}
                    type='day'
                />
                <Ring numSections={24} targetIndex={hour} translate={21} type='hr' />
                <Ring numSections={60} targetIndex={minute} translate={25.5} type='min' />
                <Ring numSections={60} targetIndex={second} translate={31} type='sec' />
                <h1 className='month'>{months[month]}</h1>
            </div>
        )
    }
}

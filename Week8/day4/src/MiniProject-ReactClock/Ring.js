import React, { Component } from 'react'
import './Ring.css'

export default class Ring extends Component {
    constructor(props) {
        super(props)

        this.percentage = 360 / this.props.numSections
        this.arr = Array(this.props.numSections).fill(0)
    }

    render() {
        const { targetIndex, type, translate } = this.props

        return (
            <div
                className='ring'
                style={{
                    '--ratio': this.percentage + 'deg',
                    '--rotation': this.percentage * -targetIndex + 'deg',
                }}
            >
                {this.arr.map((_, i) => {
                    return (
                        <span
                            key={`${type}-${++i}`}
                            className={targetIndex === i ? 'target' : ''}
                            style={{ '--i': i, '--translate': translate + 'em' }}
                        >
                            {i} {type}
                        </span>
                    )
                })}
            </div>
        )
    }
}

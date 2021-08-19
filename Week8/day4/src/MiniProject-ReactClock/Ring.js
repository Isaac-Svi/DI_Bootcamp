import React from 'react'
import './Ring.css'

const Ring = ({ percentage, numSections, targetIndex, type, translate }) => {
    percentage = percentage ?? 360 / numSections

    const arr = Array(numSections).fill(0)

    return (
        <div
            className='ring'
            style={{
                '--ratio': percentage + 'deg',
                '--rotation': percentage * -targetIndex + 'deg',
            }}
        >
            {arr.map((_, i) => {
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

export default Ring

import React from 'react'

const Select = React.forwardRef(({ keys: [value, text], options, handleChange }, ref) => {
    return (
        <select ref={ref} onChange={handleChange}>
            {options.map((option) => {
                return (
                    <option key={option[text]} value={option[value]}>
                        {option[text]}
                    </option>
                )
            })}
        </select>
    )
})

export default Select

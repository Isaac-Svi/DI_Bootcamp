import React from 'react'

const Result = ({ results: { fname, sname, percentage, result } }) => {
    return (
        <div>
            {fname && (
                <>
                    <p>Results:</p>
                    <p>
                        {fname} &amp; {sname}
                    </p>
                    <p>percentage: {percentage}</p>
                    <p>result: {result}</p>
                </>
            )}
        </div>
    )
}

export default Result

import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = (state) => {
    return {
        results: state.result,
    }
}

export default connect(mapStateToProps)(Result)

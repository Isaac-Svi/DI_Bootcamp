import React, { Component } from 'react'
import data from './data.json'

const styles = {
    display: 'block',
    textAlign: 'left',
}

export default class Example3 extends Component {
    render() {
        return (
            <>
                {data.Experiences.map((experience, i) => {
                    const {
                        companyName,
                        logo,
                        url,
                        roles: [{ title, description, startDate, location }],
                    } = experience

                    return (
                        <div key={`e-${i}`}>
                            <img src={logo} alt='image' />
                            <a style={styles} href={url}>
                                {companyName}
                            </a>
                            <h4>{title}</h4>
                            <p>
                                {startDate}
                                {location}
                            </p>
                            <p>{description}</p>
                        </div>
                    )
                })}
            </>
        )
    }
}

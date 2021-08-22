import React, { Component } from 'react'

const fetchData = async () => {
    try {
        const res = await fetch(
            'https://webhook.site/e662280f-7e2d-4d67-951b-73ce886856d4',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    key1: 'myusername',
                    email: 'mymail@gmail.com',
                    name: 'Isaac',
                    lastname: 'Doe',
                    age: 27,
                }),
            }
        )

        console.log(res)
    } catch (err) {
        console.log(err.message)
    }
}

export default class FetchButton extends Component {
    render() {
        return <button onClick={fetchData}>Fetch data</button>
    }
}

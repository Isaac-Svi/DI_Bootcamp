import React, { Component } from 'react'
import '../styles/Exercise2.css'

export default class Exercise2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            submitted: false,
            error: '',
        }
    }

    handleChange = (e) => {
        const { value, name, pattern } = e.target

        if (pattern) {
            const regex = new RegExp(pattern)

            console.log(regex, regex.test(value))

            if (!regex.test(value)) {
                this.setState({ [name]: value, error: `${name} is invalid` })
                return
            }
        }

        this.setState({ [name]: value, error: '' })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { fname, lname, phone, email } = e.target

        this.setState({
            fname: fname.value,
            lname: lname.value,
            phone: phone.value,
            email: email.value,
            submitted: true,
        })
    }

    reset = (e) => {
        e.preventDefault()

        this.setState({
            fname: '',
            lname: '',
            phone: '',
            email: '',
            submitted: false,
        })
    }

    render() {
        const { fname, lname, phone, email, submitted, error } = this.state

        return (
            <form onSubmit={!submitted ? this.handleSubmit : this.reset}>
                {!submitted ? (
                    <>
                        <h1>Welcome!</h1>
                        {error && <div className='error'>{error}</div>}
                        <input
                            onChange={this.handleChange}
                            value={fname}
                            type='text'
                            name='fname'
                            placeholder='First Name'
                        />
                        <input
                            onChange={this.handleChange}
                            value={lname}
                            type='text'
                            name='lname'
                            placeholder='Last Name'
                        />
                        <input
                            onChange={this.handleChange}
                            value={phone}
                            type='text'
                            name='phone'
                            pattern='^(\d{1}-)?\d{3}-\d{3}-\d{4}$'
                            placeholder='Phone Number'
                        />
                        <input
                            onChange={this.handleChange}
                            value={email}
                            type='email'
                            name='email'
                            placeholder='Email Address'
                        />
                        <button>Submit</button>
                    </>
                ) : (
                    <>
                        <p>
                            {lname}, {fname}
                        </p>
                        <p>
                            {phone} | {email}
                        </p>
                        <button>Reset</button>
                    </>
                )}
            </form>
        )
    }
}

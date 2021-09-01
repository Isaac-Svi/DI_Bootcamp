import React, { useState } from 'react'
import '../styles/AuthFiles.css'
import { useAuth } from '../providers/AuthProvider'
import { validateForm } from '../utils/validate-form'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, setError, login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateForm(email, password)) {
            setError('Empty fields')
        } else {
            login(email, password)
        }
    }

    return (
        <form className='auth-form' onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                />
            </div>
            <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                />
            </div>
            <button>Sign In</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default Signin

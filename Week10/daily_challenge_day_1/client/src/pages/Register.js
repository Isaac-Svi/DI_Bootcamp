import React, { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { validateForm } from '../utils/validate-form'
import '../styles/AuthFiles.css'

const Register = () => {
    const { user, register, error, setError } = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateForm(name, email, password)) {
            setError('Empty fields')
        } else {
            register(name, email, password)
        }
    }

    return (
        <form className='auth-form' onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='input-group'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter name (max 8 characters)'
                />
            </div>
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
            <button>Register</button>
            {error && <div>{error}</div>}
            {user.name && <div>Already registered</div>}
        </form>
    )
}

export default Register

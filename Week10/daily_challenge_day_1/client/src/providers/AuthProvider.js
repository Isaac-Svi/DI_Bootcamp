import React, { createContext, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

const AuthContext = createContext(null)

const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('Must be used in AuthProvider')
    return context
}

const AuthProvider = ({ children }) => {
    const history = useHistory()
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        name: '',
        email: '',
        token: '',
    })

    const login = async (email, password) => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })
            const { user, token, error: e } = await res.json()

            if (e) throw new Error(e)

            setUser({
                name: user.name,
                email: user.email,
                token: token,
            })
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    const register = async (name, email, password) => {
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            })
            const { info, error: e } = await res.json()

            if (e) throw new Error(e)

            console.log(info)
            history.push('/signin')
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    const logout = () => {
        setUser({ name: '', email: '', token: '' })
        history.push('/')
    }

    const verify = async () => {
        try {
            const res = await fetch('/api/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: user.token }),
            })
            const { ok } = await res.json()

            if (!Boolean(ok)) throw new Error('Unauthorized')

            return Boolean(ok)
        } catch (err) {
            throw new Error(err)
        }
    }

    const value = {
        user,
        error,
        setError,
        setUser,
        login,
        register,
        logout,
        verify,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
export { useAuth }

import React, { useState, useEffect } from 'react'
import { useAuth } from '../providers/AuthProvider'
import Loader from '../components/Loader'
import { Redirect } from 'react-router-dom'

export const withAuth = (Component, redirect) => {
    return (props) => {
        const { verify, setUser } = useAuth()
        const [loading, setLoading] = useState(true)
        const [authorized, setAuthorized] = useState(false)

        useEffect(() => {
            verify()
                .then(() => {
                    setAuthorized(true)
                })
                .catch((err) => {
                    console.log(err.message)
                    setUser({ name: '', email: '', token: '' })
                })
                .finally(() => {
                    setLoading(false)
                })
        }, [])

        if (loading) return <Loader />

        if (!authorized) return <Redirect to={redirect || '/signin'} />

        return <Component {...props} />
    }
}

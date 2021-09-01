import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { jwtDecode } from '../utils/jwt-decode'

const PrivateRoute = ({ redirect, ...props }) => {
    const {
        user: { token },
    } = useAuth()

    return (
        <>
            {token && jwtDecode(token).body.exp * 1000 > Date.now() ? (
                <Route {...props} />
            ) : (
                <Redirect to={redirect || '/'} />
            )}
        </>
    )
}

export default PrivateRoute

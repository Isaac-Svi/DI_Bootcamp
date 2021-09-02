import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { jwtDecode } from '../utils/jwt-decode'
import { withAuth } from '../utils/withAuth'

const PrivateRoute = ({ redirect, component, ...props }) => {
    const {
        user: { token },
    } = useAuth()

    return (
        <>
            {token && jwtDecode(token).body.exp * 1000 > Date.now() ? (
                <Route {...props} component={withAuth(component)} />
            ) : (
                <Redirect to={redirect || '/'} />
            )}
        </>
    )
}

export default PrivateRoute

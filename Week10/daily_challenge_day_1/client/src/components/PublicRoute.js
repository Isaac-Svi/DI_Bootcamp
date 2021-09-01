import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const PublicRoute = ({ redirect, ...props }) => {
    const { user } = useAuth()

    return (
        <>
            {!user.name ? (
                <Route {...props} />
            ) : (
                <Redirect to={redirect || '/'} />
            )}
        </>
    )
}

export default PublicRoute

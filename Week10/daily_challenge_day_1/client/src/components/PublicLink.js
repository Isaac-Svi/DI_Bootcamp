import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const PublicLink = ({ children, ...props }) => {
    const { user } = useAuth()

    return <>{!user.name && <Link {...props}>{children}</Link>}</>
}

export default PublicLink

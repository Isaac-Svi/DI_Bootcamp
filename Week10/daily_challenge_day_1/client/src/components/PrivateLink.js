import React from 'react'
import { Link } from 'react-router-dom'
import { jwtDecode } from '../utils/jwt-decode'
import { useAuth } from '../providers/AuthProvider'

const PrivateLink = ({ children, ...props }) => {
    const {
        user: { token },
    } = useAuth()

    if (token && jwtDecode(token).body.exp * 1000 > Date.now())
        return <Link {...props}>{children}</Link>

    return null
}

export default PrivateLink

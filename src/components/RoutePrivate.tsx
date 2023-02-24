import React from 'react'
import { Navigate } from 'react-router-dom'
import { userAuth } from '../context/auth'

const RoutePrivate = ({ children }) => {
    const { user } = userAuth()

    if (!user) {
        return (
            <Navigate to="/notAuthorized" />
        )
    }

    return children
}

export default RoutePrivate
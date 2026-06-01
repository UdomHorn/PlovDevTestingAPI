import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext(null)
const TOKEN_KEY = 'token'

const getUserFromToken = (token) => {
  if (!token) return null

  try {
    const decoded = jwtDecode(token)
    const isExpired = decoded.exp && decoded.exp * 1000 <= Date.now()

    if (isExpired) {
      localStorage.removeItem(TOKEN_KEY)
      return null
    }

    return {
      id: decoded.id,
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
      role: decoded.role || 'student',
    }
  } catch (error) {
    localStorage.removeItem(TOKEN_KEY)
    return null
  }
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))
  const [user, setUser] = useState(() => getUserFromToken(localStorage.getItem(TOKEN_KEY)))

  const login = useCallback((newToken) => {
    localStorage.setItem(TOKEN_KEY, newToken)
    setToken(newToken)
    setUser(getUserFromToken(newToken))
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }, [])

  useEffect(() => {
    if (!token) return

    let decoded

    try {
      decoded = jwtDecode(token)
    } catch (error) {
      logout()
      return
    }

    if (!decoded.exp) return

    const timeout = decoded.exp * 1000 - Date.now()

    if (timeout <= 0) {
      logout()
      return
    }

    const timer = window.setTimeout(logout, timeout)
    return () => window.clearTimeout(timer)
  }, [token, logout])

  const value = useMemo(() => ({
    token,
    user,
    isAuthenticated: Boolean(user && token),
    login,
    logout,
  }), [token, user, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}

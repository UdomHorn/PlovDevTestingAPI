import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Loginpage = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const navigate = useNavigate()

  const validate = () => {
    const errors = {}
    if (!email.trim()) errors.email = 'Email is required'
    if (!password.trim()) errors.password = 'Password is required'
    return errors
  }

  const handleBlur = (fieldName, value) => {
    if (!value.trim()) {
      setFieldErrors(prev => ({ ...prev, [fieldName]: `${fieldName === 'email' ? 'Email' : 'Password'} is required` }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validate()
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (res.ok) {
        onLogin(data.user)
        navigate('/')
      } else {
        setError(data.message || 'Login failed. Please check your credentials.')
      }
    } catch (err) {
      console.error(err)
      setError('Connection error. Please check if the server is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-md w-full space-y-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-teal-100/50 transition-all duration-300 hover:shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome back to <span className="text-black">Plov</span><span className="text-yellow-500">Dev</span>
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/signup" className="font-medium text-teal-600 hover:text-teal-500 transition-colors duration-200">
              create a new account for free
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-red-400">⚠️</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          <div className=" space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setFieldErrors(prev => ({ ...prev, email: '' })) }}
                onBlur={(e) => handleBlur('email', e.target.value)}
                className={`appearance-none relative block w-full px-3 py-3 border ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:ring-2 ${fieldErrors.email ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-teal-500 focus:border-teal-500'} sm:text-sm transition-all duration-200`}
              />
              {fieldErrors.email && <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setFieldErrors(prev => ({ ...prev, password: '' })) }}
                onBlur={(e) => handleBlur('password', e.target.value)}
                className={`appearance-none relative block w-full px-3 py-3 border ${fieldErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:ring-2 ${fieldErrors.password ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-teal-500 focus:border-teal-500'} sm:text-sm transition-all duration-200`}
              />
              {fieldErrors.password && <p className="mt-1 text-sm text-red-600">{fieldErrors.password}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-[1px]"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Loginpage

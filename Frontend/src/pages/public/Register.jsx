import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const navigate = useNavigate()

  const validate = () => {
    const errors = {}
    if (!form.firstName.trim()) errors.firstName = 'First name is required'
    if (!form.lastName.trim()) errors.lastName = 'Last name is required'
    if (!form.email.trim()) errors.email = 'Email is required'
    if (!form.password.trim()) errors.password = 'Password is required'
    return errors
  }

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
    // Clear field error when user types
    setFieldErrors(prev => ({ ...prev, [name]: '' }))
  }

  // Handle blur - show error when user leaves an empty field
  const fieldLabels = { firstName: 'First name', lastName: 'Last name', email: 'Email', password: 'Password' }
  const handleBlur = (e) => {
    const { name, value } = e.target
    if (!value.trim()) {
      setFieldErrors(prev => ({ ...prev, [name]: `${fieldLabels[name]} is required` }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validate()
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setLoading(true)
    setMessage("")
    setIsSuccess(false)

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (res.ok) {
        setIsSuccess(true)
        setMessage("Account created successfully! Redirecting to login...")
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        })
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      } else {
        setIsSuccess(false)
        setMessage(data.message || "Registration failed. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSuccess(false)
      setMessage("Server error.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-md w-full space-y-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-teal-100/50 transition-all duration-300 hover:shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your <span className="text-black">Plov</span><span className="text-yellow-500">Dev</span> account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-teal-600 hover:text-teal-500 transition-colors duration-200">
              sign in here
            </Link>
          </p>
        </div>

        {message && (
          <div className={`${isSuccess ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'} border-l-4 p-4 rounded-md`}>
            <div className="flex">
              <div className="flex-shrink-0">
                <span className={isSuccess ? 'text-green-400' : 'text-red-400'}>{isSuccess ? 'OK' : '!'}</span>
              </div>
              <div className="ml-3">
                <p className={`text-sm ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>{message}</p>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          <div className=" space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`appearance-none relative block w-full px-3 py-3 border ${fieldErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:ring-2 ${fieldErrors.firstName ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-teal-500 focus:border-teal-500'} sm:text-sm transition-all duration-200`}
                />
                {fieldErrors.firstName && <p className="mt-1 text-sm text-red-600">{fieldErrors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`appearance-none relative block w-full px-3 py-3 border ${fieldErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:ring-2 ${fieldErrors.lastName ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-teal-500 focus:border-teal-500'} sm:text-sm transition-all duration-200`}
                />
                {fieldErrors.lastName && <p className="mt-1 text-sm text-red-600">{fieldErrors.lastName}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="register-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none relative block w-full px-3 py-3 border ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:ring-2 ${fieldErrors.email ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-teal-500 focus:border-teal-500'} sm:text-sm transition-all duration-200`}
              />
              {fieldErrors.email && <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="register-password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
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
                  Creating account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Register

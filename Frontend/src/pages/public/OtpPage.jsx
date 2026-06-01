import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OtpPage = () => {
  const [email, setEmail] = useState('')
  const [digits, setDigits] = useState(['', '', '', ''])
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const inputs = useRef([])
  const navigate = useNavigate()

  const updateDigit = (index, value) => {
    const nextValue = value.replace(/\D/g, '').slice(-1)
    const nextDigits = [...digits]
    nextDigits[index] = nextValue
    setDigits(nextDigits)
    setError('')
    setMessage('')

    if (nextValue && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handleSendOtp = async () => {
    if (!email.trim()) {
      setError('Email is required.')
      return
    }

    setLoading(true)
    setError('')
    setMessage('')

    try {
      const res = await fetch('/api/otp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Server error.')
        return
      }

      setMessage(data.message)
      inputs.current[0]?.focus()
    } catch (error) {
      console.error(error)
      setError('Server error.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setError('Email is required.')
      return
    }

    if (digits.some((digit) => !digit)) {
      setError('Enter the 4 digit OTP code.')
      return
    }

    setLoading(true)
    setError('')
    setMessage('')

    try {
      const res = await fetch('/api/otp/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code: digits.join('') }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Server error.')
        return
      }

      navigate('/login', {
        replace: true,
        state: {
          verifiedEmail: email.trim(),
          message: 'OTP verified successfully. Please sign in.',
        },
      })
    } catch (error) {
      console.error(error)
      setError('Server error.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-md w-full space-y-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-teal-100/50">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify OTP
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the 4 digit code sent to your email.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {message && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md">
            <p className="text-sm text-green-700">{message}</p>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="otp-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <div className="flex gap-2">
              <input
                id="otp-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setError('')
                  setMessage('')
                }}
                className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="button"
                onClick={handleSendOtp}
                disabled={loading}
                className="rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputs.current[index] = element
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={digit}
                onChange={(event) => updateDigit(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                className="h-14 w-14 rounded-lg border border-gray-300 bg-white text-center text-2xl font-semibold text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-teal-500 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            {loading ? 'Please wait...' : 'Verify Code'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default OtpPage

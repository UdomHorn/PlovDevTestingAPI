import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetUser from './components/users/GetUser'
import Homepage from './pages/public/Homepage'
import NavbarBeforeLogin from './layout/NavbarBeforeLogin'
import NavbarAfterLogin from './layout/NavbarAfterLogin'
import Register from './pages/public/Register'
import Loginpage from './pages/public/Loginpage'
import React, { useState } from 'react'
import Coursespage from './pages/public/Coursespage'
import AboutUspage from './pages/public/AboutUspage'
import Jobboardpage from './pages/public/Jobboardpage'
import Userlist from './components/users/Userlist'
import Footer from './layout/Footer'
import SidebarAdmin from './layout/SidebarAdmin'
import SidebarUser from './layout/SidebarUser'

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user")
    return savedUser ? JSON.parse(savedUser) : null
  })

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <BrowserRouter>
      <div className=''>
        <div className='w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-360 m-auto p-[auto]  justify-center bg-white '>
          {user ? (
            <NavbarAfterLogin user={user} onLogout={handleLogout} />
          ) : (
            <NavbarBeforeLogin />
          )}

          <Routes >
            <Route path="/" element={<Homepage />} />
            <Route path="/courses" element={<Coursespage />} />
            <Route path="/aboutus" element={<AboutUspage />} />
            <Route path="/jobboard" element={<Jobboardpage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Loginpage onLogin={handleLogin} />} />
          </Routes>

          <Footer />
          {/* <SidebarAdmin /> */}
          {/* <SidebarUser /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

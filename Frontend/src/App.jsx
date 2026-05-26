import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import GetUser from './components/users/GetUser'
import Homepage from './public/Homepage'
import Nav from './public/Nav'
import Register from './public/Register'
import React from 'react'
import Coursespage from './public/Coursespage'
import AboutUspage from './public/AboutUspage'
import Jobboardpage from './public/Jobboardpage'
import Userlist from './components/users/Userlist'
import Footer from './public/Footer'
function App() {

  return (
    <BrowserRouter>
      <div className='bg-gray-100'>
        <div className='w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-360 m-auto p-[auto]  justify-center bg-white '>
        <Nav />

  <Routes >
    <Route path="/" element={<Homepage />} />
    <Route path="/courses" element={<Coursespage />} />
    <Route path="/aboutus" element={<AboutUspage />} />
    <Route path="/jobboard" element={<Jobboardpage />} />
    <Route path="/register" element={<Register />} />
  </Routes>

      <Footer />
      
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App

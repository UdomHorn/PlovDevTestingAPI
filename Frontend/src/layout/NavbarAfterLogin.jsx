import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Search from '../components/commons/Search'
import { IoMenu } from "react-icons/io5"

const NavbarAfterLogin = ({ user, onLogout }) => {
  const [menuOpen, IsmenuOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [hasTyped, setHasTyped] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!hasTyped) return
    const isSearchEnabledPage = location.pathname === '/courses' || location.pathname === '/'
    if (!isSearchEnabledPage) return

    const timer = setTimeout(() => {
      const query = searchTerm.trim()
      const targetPath = location.pathname
      const targetSearch = query ? `?search=${encodeURIComponent(query)}` : ''

      const currentUrl = `${location.pathname}${location.search}`
      const targetUrl = `${targetPath}${targetSearch}`

      if (currentUrl !== targetUrl) {
        navigate(targetUrl)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm, hasTyped, navigate, location.pathname, location.search])

  useEffect(() => {
    const isSearchEnabledPage = location.pathname === '/courses' || location.pathname === '/'
    if (!isSearchEnabledPage) return

    const currentSearch = new URLSearchParams(location.search).get('search') || ''
    setSearchTerm(currentSearch)
  }, [location.pathname, location.search])
 
  return (
    <nav className='fixed top-0 left-0 w-full   z-500  '>
    <div className='bg-white/50 backdrop-blur-sm flex justify-center items-center text-lg mx-auto border-b-1 border-amber-300/90'>

      <div className=' flex justify-between items-center  max-2xl:w-[96%] m-4 gap-6 '>
        <div className='flex items-center gap-2 cursor-pointer '>
          <div className=' text-xl text black '>
            <h1 className="text-2xl font-bold text-black" onClick={() => navigate('/')}>
              Plov<span className="text-yellow-400">Dev</span>
            </h1>
          </div>
        </div>
        <ul className='m-4 max-lg:hidden flex gap-6 items-center '>
          <li className=''><NavLink to="/" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Home</NavLink> </li>
          <li className=''><NavLink to="/courses"  className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Courses</NavLink></li>
          <li className=''><NavLink to="/aboutus"  className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>About Us</NavLink></li>
          <li className=''><NavLink to="/jobboard"  className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Job Board</NavLink> </li>
        </ul>
        {/* search  */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setHasTyped={setHasTyped} />
        
        <div className='flex items-center gap-4'>
          <div className=' max-md:hidden'><NavLink to="/instructor" className='hover:text-teal-500  duration-200'>Instructor</NavLink></div>
          <div className=' max-md:hidden'><NavLink to="/mylearning" className='hover:text-teal-500  duration-200'>MyLearning</NavLink></div>
          
          {/* User profile dropdown */}
          <div className="relative">
            <button 
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className='w-[44px] h-[44px] rounded-full border-2 border-solid border-teal-400 bg-teal-50 text-[#026357] font-bold flex items-center justify-center cursor-pointer hover:bg-teal-100 transition-colors duration-200 max-sm:hidden focus:outline-none'
            >
              {user?.firstName?.[0]?.toUpperCase() || 'U'}{user?.lastName?.[0]?.toUpperCase() || ''}
            </button>
            {profileDropdownOpen && (
              <div className=" max-sm:hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 truncate">{user?.firstName} {user?.lastName}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false)
                    onLogout()
                    navigate('/')
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-150 flex items-center gap-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <div className='lg:hidden h-[40px] w-[52px]  justify-center flex items-center' onClick={()=>IsmenuOpen(!menuOpen)}>  <IoMenu />
          </div>
        </div>
      </div>
    </div>

    <div className ={`bg-white/50 backdrop-blur-sm absolute  right-0   w-full h-svh bg-white  text-lg lg:hidden duration-500 p-8 ${menuOpen ? 'opacity-100' : 'opacity-0'}  `}> 
      <ul >
          <li ><NavLink to="/" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Home</NavLink> </li>
          <li ><NavLink to="/courses" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Courses</NavLink></li>
          <li className=''><NavLink to="/aboutus" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>About Us</NavLink></li>
          <li className=''><NavLink to="/jobboard" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Job Board</NavLink> </li>

          <div className=' md:hidden mt-12'><NavLink to="/instructor" onClick={() => IsmenuOpen(false)} className='hover:text-teal-500  duration-200'>Instructor</NavLink></div>
          <div className=' md:hidden mt-4'><NavLink to="/mylearning" onClick={() => IsmenuOpen(false)} className='hover:text-teal-500  duration-200'>MyLearning</NavLink></div>
          
          <div className='  mt-8 pt-4 border-t border-gray-200'>
            <p className="text-sm font-semibold text-gray-800">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs text-gray-500 truncate mb-4">{user?.email}</p>
            <button
              onClick={() => {
                IsmenuOpen(false)
                onLogout()
                navigate('/')
              }}
              className=" w-full py-2 text-center text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
  </nav>
  )
}

export default NavbarAfterLogin

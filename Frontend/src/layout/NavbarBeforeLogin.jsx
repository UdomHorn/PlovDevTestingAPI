import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Search from '../components/commons/Search'
import { IoMenu } from "react-icons/io5"

const NavbarBeforeLogin = () => {
    const [menuOpen, IsmenuOpen] = useState(false)
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
                            <h1 className="text-2xl font-bold text-black">
                                Plov<span className="text-yellow-400">Dev</span>
                            </h1>
                        </div>
                    </div>
                    <ul className='m-4 max-lg:hidden flex gap-6 items-center '>
                        <li className=''><NavLink to="/" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Home</NavLink> </li>
                        <li className=''><NavLink to="/courses" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Courses</NavLink></li>
                        <li className=''><NavLink to="/aboutus" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>About Us</NavLink></li>
                        <li className=''><NavLink to="/jobboard" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Job Board</NavLink> </li>
                    </ul>
                    {/* search  */}
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setHasTyped={setHasTyped} />

                    <div className='flex items-center gap-2'>
                        <div className=' max-md:hidden'><NavLink to="/login" className='hover:text-teal-500  duration-200'>Sign In</NavLink></div>
                        <div className=' max-md:hidden'><NavLink to="/signup" className='hover:text-white text-white  bg-teal-400 rounded-md active:text-black p-2 duration-200'>
                            Signup Free</NavLink></div>
                        <div className='lg:hidden h-[40px] w-[52px]  justify-center flex items-center' onClick={() => IsmenuOpen(!menuOpen)}>  <IoMenu />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-white/50 backdrop-blur-sm absolute  right-0   w-full h-svh bg-white  text-lg lg:hidden duration-500 p-8 ${menuOpen ? 'opacity-100' : 'opacity-0'}  `}>
                <ul >
                    <li ><NavLink to="/" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Home</NavLink> </li>
                    <li ><NavLink to="/courses" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Courses</NavLink></li>
                    <li className=''><NavLink to="/aboutus" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>About Us</NavLink></li>
                    <li className=''><NavLink to="/jobboard" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Job Board</NavLink> </li>

                    <div className=' md:hidden mt-12'><NavLink to="/login" className='hover:text-teal-500  duration-200'>Sign In</NavLink></div>
                    <div className=' md:hidden mt-4'><NavLink to="/signup" className='hover:text-white text-white  bg-teal-400 rounded-md active:text-black p-2 duration-200'>
                        Signup Free</NavLink></div>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarBeforeLogin

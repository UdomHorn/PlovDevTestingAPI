import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";

const SidebarAdmin = () => {
  return (
    <nav className='h-screen fixed top-0 left-0 z-100  w-[250px] bg-white  
     '>
      <ul className='mt-28 h-full rounded-lg shadow-lg '>

        <div className='mx-2 py-8  font-bold text-xs text-black'> OVERVIEW </div>

        <li className='p-4' ><NavLink to="/dashboard" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'>
          <MdOutlineDashboard /> Dashboard
        </NavLink> </li>

        <li className='p-4'><NavLink to="/mycourse" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><MdOutlineVideoSettings /> Courses </NavLink></li>

        <li className='p-4'><NavLink to="/users" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><FaUserGroup /> Users </NavLink> </li>

        <li className='p-4'><NavLink to="/payment" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><MdOutlinePayment /> Payment</NavLink> </li>

        <li className='p-4'><NavLink to="/payout" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer0'><RiMoneyDollarCircleFill /> Payout</NavLink> </li>

        <li className='p-4'><NavLink to="/word" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer0'><MdOutlineWork/> Job Board</NavLink> </li>

        <div className='mx-2 my-8  font-bold text-xs text-black'> ACCOUNT </div>

        <li className='p-4'><NavLink to="/myprofile" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><CgProfile /> My Profile</NavLink> </li>
        <li className='p-4'><NavLink to="/setting" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><IoSettingsOutline /> Setting</NavLink> </li>



        <div className='absolute w-full  p-4 mt-auto border-t-2 border-gray-200 flex justify-center bottom-0'><NavLink to="/logout" className=' gap-2 duration-200 flex items-center pointer hover:text-red-600'><LuLogOut />Logout</NavLink> </div>

      </ul>
      
    </nav>
  )
}

export default SidebarAdmin
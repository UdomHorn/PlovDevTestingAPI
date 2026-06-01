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

const navLinkClass = ({ isActive }) =>
  `gap-2 duration-200 flex items-center pointer rounded-md px-4 py-2 ${
    isActive ? 'bg-teal-400 text-white hover:text-white' : 'hover:text-teal-500'
  }`

const SidebarAdmin = () => {
  return (
    <nav className='z-100 bg-white max-lg:w-full max-lg:overflow-x-auto lg:h-screen lg:fixed lg:top-0 lg:left-0 lg:w-[250px] lg:overflow-hidden  
     '>
      <ul className='mt-28 rounded-lg shadow-lg max-lg:flex max-lg:w-max max-lg:h-auto lg:h-[calc(100vh-7rem)] lg:block lg:overflow-y-auto lg:pb-4 lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden '>

        <div className='mx-2  mt-8 mb-4 font-bold text-xs text-black max-lg:hidden'> OVERVIEW </div>

        <li className='p-4' ><NavLink to="/admin/dashboard" className={navLinkClass}>
          <MdOutlineDashboard /> Dashboard
        </NavLink> </li>

        <li className='p-4'><NavLink to="/admin/courses" className={navLinkClass}><MdOutlineVideoSettings /> Courses </NavLink></li>

        <li className='p-4'><NavLink to="/admin/users" className={navLinkClass}><FaUserGroup /> Users </NavLink> </li>

        <li className='p-4'><NavLink to="/admin/payment" className={navLinkClass}><MdOutlinePayment /> Payment</NavLink> </li>

        <li className='p-4'><NavLink to="/admin/payout" className={navLinkClass}><RiMoneyDollarCircleFill /> Payout</NavLink> </li>

        <li className='p-4'><NavLink to="/admin/jobs" className={navLinkClass}><MdOutlineWork/> Job Board</NavLink> </li>

        <div className='mx-2 my-4  font-bold text-xs text-black max-lg:hidden'> ACCOUNT </div>

        <li className='p-4'><NavLink to="/admin/profile" className={navLinkClass}><CgProfile /> My Profile</NavLink> </li>
        <li className='p-4'><NavLink to="/admin/setting" className={navLinkClass}><IoSettingsOutline /> Setting</NavLink> </li>



        <div className='w-full p-4 border-t-2 border-gray-200 flex justify-center max-lg:w-auto max-lg:border-t-0'><NavLink to="/logout" className=' gap-2 duration-200 flex items-center pointer hover:text-red-600'><LuLogOut />Logout</NavLink> </div>

      </ul>
      
    </nav>
  )
}

export default SidebarAdmin

import { NavLink, Outlet } from 'react-router-dom'

const tabClass = ({ isActive }) =>
  `duration-200 ${
    isActive ? 'text-black' : 'text-gray-500 hover:text-gray-700'
  }`

const InstructorMycourse = () => {
  return (
    <div>
      <div className="font-bold text-4xl mb-8">Manage your course</div>
      <div className="flex gap-8 mt-4 text-2xl pl-4 font-bold">
        <NavLink to="published" className={tabClass}>Published</NavLink>
        <NavLink to="pending" className={tabClass}>Pending</NavLink>
      </div>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  )
}

export default InstructorMycourse

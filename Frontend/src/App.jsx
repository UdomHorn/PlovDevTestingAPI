import './App.css'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/public/Homepage'
import NavbarBeforeLogin from './layout/NavbarBeforeLogin'
import NavbarAfterLogin from './layout/NavbarAfterLogin'
import Register from './pages/public/Register'
import Loginpage from './pages/public/Loginpage'
import { useEffect, useState } from 'react'
import Coursespage from './pages/public/Coursespage'
import AboutUspage from './pages/public/AboutUspage'
import Jobboardpage from './pages/public/Jobboardpage'
import Footer from './layout/Footer'
import SidebarAdmin from './layout/SidebarAdmin'
import SidebarUser from './layout/SidebarUser'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminCoursesPage from './pages/admin/AdminCoursesPage'
import AdminUsersPage from './pages/admin/AdminUsersPage'
import AdminPaymentPage from './pages/admin/AdminPaymentPage'
import AdminPayoutPage from './pages/admin/AdminPayoutPage'
import AdminJobsPage from './pages/admin/AdminJobsPage'
import AdminProfilePage from './pages/admin/AdminProfilePage'
import AdminSettingPage from './pages/admin/AdminSettingPage'
import InstructorDashboard from './pages/instructor/InstructorDashboard'
import InstructorCreateCoursePage from './pages/instructor/InstructorCreateCoursePage'
import InstructorPayoutPage from './pages/instructor/InstructorPayoutPage'
import InstructorProfilePage from './pages/instructor/InstructorProfilePage'
import InstructorSettingPage from './pages/instructor/InstructorSettingPage'
import InstructorStudentPage from './pages/instructor/InstructorStudentPage'
import InprocessPage from './pages/mylearning/InprocessPage'
import CompletePage from './pages/mylearning/CompletePage'
import FavoritePage from './pages/mylearning/FavoritePage'
import CertifiatePage from './pages/mylearning/CertifiatePage'
import InstructorQnA from './pages/instructor/InstructorQnA'
import InstructorMycourse from './pages/instructor/InstructorMycourse'

const DashboardLayout = ({ type }) => {
  const Sidebar = type === 'admin' ? SidebarAdmin : SidebarUser

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="min-h-screen pt-28 pl-[280px] pr-6 pb-10 max-lg:pl-6">
        <Outlet />
      </main>
    </div>
  )
}

const MyLearningLayout = () => {
  return (
    <main className="min-h-screen pt-28 pb-10">
      <Outlet />
    </main>
  )
}

const LogoutRoute = ({ onLogout }) => {
  useEffect(() => {
    onLogout()
  }, [onLogout])

  return <Navigate to="/" replace />
}

const PageFooter = () => {
  const location = useLocation()
  const hideFooter = location.pathname.startsWith('/admin') || location.pathname.startsWith('/instructor')

  return hideFooter ? null : <Footer />
}

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
        <div className=' '>
        {/* w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-360 m-auto p-[auto]  justify-center bg-white */}
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
            <Route path="/logout" element={<LogoutRoute onLogout={handleLogout} />} />

            <Route path="/admin" element={<DashboardLayout type="admin" />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="courses" element={<AdminCoursesPage />} />
              <Route path="users" element={<AdminUsersPage />} />
              <Route path="payment" element={<AdminPaymentPage />} />
              <Route path="payout" element={<AdminPayoutPage />} />
              <Route path="jobs" element={<AdminJobsPage />} />
              <Route path="profile" element={<AdminProfilePage />} />
              <Route path="setting" element={<AdminSettingPage />} />
            </Route>

            <Route path="/instructor" element={<DashboardLayout type="instructor" />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<InstructorDashboard />} />
              <Route path="my-course" element={<InstructorMycourse />} />
              <Route path="q&a" element={<InstructorQnA />} />
              <Route path="create-course" element={<InstructorCreateCoursePage />} />
              <Route path="students" element={<InstructorStudentPage />} />
              <Route path="payout" element={<InstructorPayoutPage />} />
              <Route path="profile" element={<InstructorProfilePage />} />
              <Route path="setting" element={<InstructorSettingPage />} />
            </Route>

            <Route path="/mylearning" element={<MyLearningLayout />}>
              <Route index element={<InprocessPage />} />
              <Route path="inprocess" element={<InprocessPage />} />
              <Route path="complete" element={<CompletePage />} />
              <Route path="favorite" element={<FavoritePage />} />
              <Route path="certificate" element={<CertifiatePage />} />
            </Route>

            <Route path="/dashboard" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/mycourse" element={<Navigate to="/admin/courses" replace />} />
            <Route path="/users" element={<Navigate to="/admin/users" replace />} />
            <Route path="/payment" element={<Navigate to="/admin/payment" replace />} />
            <Route path="/payout" element={<Navigate to="/admin/payout" replace />} />
            <Route path="/word" element={<Navigate to="/admin/jobs" replace />} />
            <Route path="/myprofile" element={<Navigate to="/admin/profile" replace />} />
            <Route path="/setting" element={<Navigate to="/admin/setting" replace />} />
            <Route path="/createcourse" element={<Navigate to="/instructor/create-course" replace />} />
            <Route path="/student" element={<Navigate to="/instructor/students" replace />} />
            <Route path="/q&a" element={<Navigate to="/instructor/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <PageFooter />
          {/* <SidebarAdmin /> */}
          {/* <SidebarUser /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

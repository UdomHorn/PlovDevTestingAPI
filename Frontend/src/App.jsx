import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Userform from './components/users/Userform'
import Userlist from './components/users/Userlist'
import Homepage from './public/Homepage'
import React from 'react'
import Jobcount from './components/jobs/Jobcount'
import API_URL from './config/api'

function App() {
  const [user, setUser] = useState([])
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  
  useEffect(()=>{

  // get User
    const getUser = async ()=>{
      try{
        const res = await fetch(`${API_URL}/api/user`)
        const data = await res.json()
        setUser(data.users)
      }
      catch(error){
        console.error("Error fetching users:",error)
      }
    }

    getUser()
  },[])

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent page reload
    setLoading(true)
    setMessage("")

    try {
      const res = await fetch(`${API_URL}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      
      const data = await res.json()
      
      if (res.ok) {
        setMessage("✅ User created successfully!")
        // Reset form
        setForm({
          firstName: "",
          lastName: "",
          email: ""
        })
      } else {
        setMessage("❌ Error: " + data.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setMessage("❌ Error submitting form")
    } finally {
      setLoading(false)
    }
  }
  // Handle user deletion
const handleDeleteUser = async (userId) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    try {
      const res = await fetch(`${API_URL}/api/user/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      
      if (res.ok) {
        // Remove user from state after successful deletion
        setUser(user.filter(u => u.id !== userId))
        setMessage("✅ User deleted successfully!")
      } else {
        setMessage("❌ Failed to delete user")
      }
    } catch (error) {
      console.error("Error deleting user:", error)
      setMessage("❌ Error deleting user")
    }
  }
}

  return (
    <div className='w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-[1440px] m-[auto] p-[auto] overflow-hidden justify-center bg-gray-100 '>

      <Homepage />

      <div className='w-[300px] h-[400px] bg-red-900 m-12 rounded-xl relative'>
        <div className='w-[300px] h-[150px] bg-blue-500 rounded-xl'></div>
        <div className='bg-white w-[300px] h-[20px] top-[35%] absolute'></div>
      </div>


      <Userform 
        form={form} 
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
      
      {message && <p className='m-12 text-lg font-bold'>{message}</p>}
      {loading && <p className='m-12'>Loading...</p>}

      <Userlist user={user} onDelete={handleDeleteUser} />
    </div>
  ) 

}

export default App
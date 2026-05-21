import React from 'react'
import { useEffect,useState } from 'react'
import Userform from '../components/users/Userform'

const Register = () => {

     const [form, setForm] = useState({
       firstName: "",
       lastName: "",
       email: "",
       password:"",
     })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
 

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
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      
      const data = await res.json()
      
      if (res.ok) {
        setMessage("✅ You register successfully!")
        // Reset form
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password:""
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
 
  return (
    <div className='bg-white fixed z-10 right-0 w-[300px]'>
     <div>
         <Userform 
        form={form} 
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
    <div className=''>
        {message && <p className='m-12 text-lg font-bold'>{message}</p>}
        {loading && <p className='m-12'>Loading...</p>}
    </div>

     </div>

    
  
     
    </div>
  )
}

export default Register

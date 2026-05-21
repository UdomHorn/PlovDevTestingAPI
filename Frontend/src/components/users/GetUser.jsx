import React, { useEffect,useState } from 'react'
import Userlist from './Userlist'

const GetUser = () => {

    const [user, setUser] = useState([])
      
        useEffect(()=>{

//   get User
    const getUser = async ()=>{
      try{
        const res = await fetch("/api/user")
        const data = await res.json()
        setUser(data.users)
      }
      catch(error){
        console.error("Error fetching users:",error)
      }
    }
    getUser()
  },[])

 // Handle user deletion
const handleDeleteUser = async (userId) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    try {
      const res = await fetch(`/api/user/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      
      if (res.ok) {
        // Remove user from state after successful deletion
        setUser(user.filter(u => u.id !== userId))
        window.confirm("✅ User deleted successfully!")
      } else {
       window.confirm("❌ Failed to delete user")
      }
    } catch (error) {
      console.error("Error deleting user:", error)
      window.confirm("❌ Error deleting user")
    }
  }
}   
  return (
    <div>
       <Userlist user={user} onDelete={handleDeleteUser} />
    
    </div>
  )
}

export default GetUser

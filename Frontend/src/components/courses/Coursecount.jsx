import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import API_URL from '../../config/api'

const Coursecount = () => {
    const [coursecount,setCourseCount] = useState(0)
    
    useEffect (()=>{
        const getCourseCount = async () =>{
            try{
                const res = await fetch(`${API_URL}/api/thumnail/count`)
                const data = await res.json()
                setCourseCount (data.count||0)
            }catch(error){
                console.error("Error fetching course count:", error)
            }
        }
        getCourseCount()
    },[])

  return (
    <div>
        {coursecount}
    </div>
  )
}

export default Coursecount

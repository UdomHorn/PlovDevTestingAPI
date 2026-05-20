import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Coursecount = () => {
    const [coursecount,setCourseCount] = useState(0)
    
    useEffect (()=>{
        const getCourseCount = async () =>{
            try{
                const res = await fetch("/api/thumnail/count")
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
      <div className='font-bold text-2xl  max-md:text-sm'>{coursecount}</div>
      <div className='text-sm text-gray-400 max-md:text-xs'>Courses</div>
    </div>
  )
}

export default Coursecount

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CourseCard from './CourseCard'
import API_URL from '../../config/api'

const CourseGrid = () => {
    const [thumnail, setThumnail] = useState([])
 
    useEffect(()=>{
    const getThumnail = async ()=>{
      try{
        const res = await fetch(`${API_URL}/api/thumnail`)
        const data = await res.json()
        setThumnail(data.newthumnails)
      }
      catch(error){
        console.error("Error fetching thumnails:", error)
      }
    }
    getThumnail()
  },[])

  return (
      <div className='grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 justify-items-center'>
        {thumnail.map(data=>{
          return <CourseCard key={data.id} data={data} />
        })}
      </div> 
   
  )
}

export default CourseGrid

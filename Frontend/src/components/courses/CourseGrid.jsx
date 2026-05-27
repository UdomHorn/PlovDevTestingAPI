import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CourseCard from './CourseCard'
import { useSearchParams } from 'react-router-dom'

const CourseGrid = () => {
    const [thumnail, setThumnail] = useState([])
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search') || ''
 
    useEffect(()=>{
    const getThumnail = async ()=>{
      try{
        const query = search.trim() ? `?search=${encodeURIComponent(search.trim())}` : ''
        const res = await fetch(`/api/thumnail${query}`)
        const data = await res.json()
        setThumnail(data.newthumnails)
      }
      catch(error){
        console.error("Error fetching thumnails:", error)
      }
    }
    getThumnail()
  },[search])

  if (!thumnail.length) {
    return (
      <div className='py-8 text-center text-gray-500'>No courses found.</div>
    )
  }

  return (
      <div className='grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 justify-items-center'>
        {thumnail.map(data=>{
          return <CourseCard key={data.id} data={data} />
        })}
      </div> 
   
  )
}

export default CourseGrid

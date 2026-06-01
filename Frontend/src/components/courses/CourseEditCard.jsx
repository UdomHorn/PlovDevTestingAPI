import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
const SingleCourseEditCard = ({data}) => {
  return (
    <div className='m-12 w-[209px] h-[350px] border-1 border-gray-300 rounded-lg relative  
       bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-teal-100/50 transition-all duration-300 hover:shadow-2xl
      '>
      <div className='relative'>
        <div>
          <img
            className='rounded-lg'
            src={"https://i.pinimg.com/736x/8e/5d/86/8e5d86a7639eb6d9e18d6787489724d6.jpg"}
            alt={data.title}
          />
        </div>
        <div className='absolute bottom-8 left-3 bg-black text-white px-4 text-sm'>
          {data.duration}
        </div>
      </div>
      <div className='bg-white w-[207px] h-[30px] top-[60%] absolute'></div>
      <div className='p-4 '>
        <div className='text-orange-500 text-sm text-bold font-bold'>
          {data.category}
        </div>
        <div className='text-sm'>{data.title}</div>

        <div className='flex justify-between items-center'>
          <div className='text-[8px] text-orange-500 flex gap-1'>
            {data.rating}
            <div>★★★★★</div>
            <div className='text-gray-400'>{data.student}</div>
          </div>
          <div className='flex items-center gap-1'>
            <div className='font-bold text-sm'>{data.price}</div>
            <div className='text-[8px] text-red-900'>{data.oldPrice}</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function CourseEditCard() {
  const [thumnail, setThumnail] = useState([])
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || ''

  useEffect(() => {
    const getThumnail = async () => {
      try {
        const query = search.trim() ? `?search=${encodeURIComponent(search.trim())}` : ''
        const res = await fetch(`/api/thumnail${query}`)
        const data = await res.json()
        setThumnail(data.newthumnails)
      } catch (error) {
        console.error("Error fetching thumnails:", error)
      }
    }

    getThumnail()
  }, [search])

  if (!thumnail.length) {
    return (
      <div className='py-8 text-center text-gray-500'>No courses found.</div>
    )
  }

  return (
    <div className='grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 justify-items-center '>
      {thumnail.map(data => {
        return <SingleCourseEditCard key={data.id} data={data} />
      })}
    </div>
  )
}
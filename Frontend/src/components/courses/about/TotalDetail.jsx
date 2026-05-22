import React from 'react'
import Coursecount from '../Coursecount'
import Jobcount from '../../jobs/Jobcount'

const TotalDetail = () => {
  return (
    <div className='bg-black w-full p-12 max-md:p-6 text-white grid grid-cols-4 text-center mt-18'>
        <div>
             <div className='font-bold text-2xl  max-md:text-sm'><Coursecount /></div>
            <div className='text-sm text-gray-400 max-md:text-xs'>Courses</div>
        </div>

        <div>
             <div className='font-bold text-2xl  max-md:text-sm'><Jobcount/></div>
            <div className='text-sm text-gray-400 max-md:text-xs'>Active Jobs</div>
        </div>
        
       
      </div>
  )
}

export default TotalDetail

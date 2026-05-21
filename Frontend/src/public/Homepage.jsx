import React from 'react'
import img1 from "../assets/Tumnailimage.png"
import CourseGrid from '../components/courses/CourseGrid'
import Coursecount from '../components/courses/Coursecount'
import Jobcount from '../components/jobs/Jobcount'
const Homepage = () => {
  return (
    <div className=' m-[auto] p-[auto] '>
      <div className=' h-[570px]flex m-auto text-2xl text-white max-lg:text-sm'>
        <div className='relative  bg-black'>
          <img src={"https://i1-e.pinimg.com/1200x/65/bd/46/65bd465d2d14121bfeb35eb369442a8c.jpg"} alt="" className='w-full h-screen max-lg:h-[50%] rounded-xl' />

          <div className='absolute top-[20%] pl-[10%] w-full '>
            <div className='text-[70px] max-xl:text-[48px] font-bold text-black'>Code Smarter. <br />Build Real <span className='text-teal-300'>Skills.</span> </div>
            <div className='min-lg:mt-24  md:mt-12'>Start learning with PlovDev, earn certificates, and land a job.</div>
            <div className='font-bold min-lg:mt-24  '>
                <button className='underline pr-12  md:mt-12'>Start For Free</button>
                <button className='bg-teal-300 px-4 py-4 rounded-md  md:mt-12'>Explore Courses</button>
            </div>
          </div>
          <div className='absolute bottom-0 w-full bg-black text-white  '>
            <marquee behavior="" direction="">
                <div className='flex m-4 justify-around '>
                <div >html</div> <div>css</div><div>javascript</div><div>python</div><div>html</div> <div>css</div>
            </div>
            </marquee>
            </div>
        </div>
        
      </div>

      <CourseGrid />

      <div className='bg-black w-full p-12 max-md:p-6 text-white grid grid-cols-4 text-center'>
        <div>
             <div className='font-bold text-2xl  max-md:text-sm'><Coursecount /></div>
            <div className='text-sm text-gray-400 max-md:text-xs'>Courses</div>
        </div>

        <div>
             <div className='font-bold text-2xl  max-md:text-sm'><Jobcount/></div>
            <div className='text-sm text-gray-400 max-md:text-xs'>Active Jobs</div>
        </div>
        
       
      </div>

    
        <div className='grid grid-cols-3 text-center mt-24 max-md:mt-12'>
            <div>
                <div className='text-2xl mb-6'>
                     Our Vision
                </div>
                <div className='text-gray-500'>
                    We envision a world where anyone with the desire to learn has the tools and opportunities to succeed—regardless of location, background, or financial situation.
                </div>
            </div>
            <div>
                <div className='text-xl mb-6'>
                    Our Mission
                </div>
                <div className='text-gray-500'>
                    To make learning flexible, affordable, and impactful by connecting learners with expert knowledge and practical skills that matter in the real world. 
                </div>
            </div>
            <div>
                <div className='text-xl mb-6'>
                    Certificate with Job-board
                </div>
                <div className='text-gray-500'>
                    Earn a verifiable PDF certificate on completion.
Then use the PlovDev Job Board to apply directly
to hiring partners in Cambodia.
                </div>
            </div>
        </div>

     
    </div>
  )
}

export default Homepage

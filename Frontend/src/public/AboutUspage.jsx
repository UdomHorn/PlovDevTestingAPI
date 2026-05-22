import React from 'react'
import Coursecount from '../components/courses/Coursecount'
import CourseGrid from '../components/courses/CourseGrid'
import Jobcount from '../components/jobs/Jobcount'
import Aboutusimage from "../assets/Aboutus-img.png"
import { NavLink } from 'react-router-dom'
import AboutCard from '../components/courses/about/AboutCard'
import TotalDetail from '../components/courses/about/TotalDetail'
import PlovDevHelp from '../components/courses/about/PlovDevHelp'
const AboutUspage = () => {
  return (
   <div className=' m-[auto]  pt-30'>
      <div className='   m-auto text-2xl text-white max-lg:text-sm'>
        
          <div className='bg-black w-full min-md:flex'>
          <div className='   w-[50%] p-[8%] max-md:w-full'>
            <div className=' text-[70px] max-xl:text-[48px] font-bold'>About<span className='text-teal-300'>PlovDev</span> </div>
            <div className='min-lg:mt-24  md:mt-12'>We are on a mission to make quality tech
education accessible to everyone, everywhere.    </div>
<div className='mt-10 text-sm text-gray-500'>
    PlovDev is a structured learning platform for beginner and junior
for beginner and developer.
We create practical, project based courses that help you build
real skill and become job-ready.
</div>
            <div className='font-bold min-lg:mt-24 '>
                <button className='underline pr-12  md:mt-12'><NavLink to="/register">Start For Free</NavLink></button>
                <button className='bg-teal-300 px-4 py-4 rounded-md  md:mt-12'><NavLink to="/courses">Explore Courses</NavLink></button>
            </div>
          </div>
            <div className='flex items-center justify-center w-[50%] max-md:w-full'>
                <img src={Aboutusimage} alt=""   />
            </div>
          </div>
          <div className=' w-full bg-black text-white  '>
            <marquee behavior="" direction="">
                <div className='flex m-4 justify-around '>
                <div >html</div> <div>css</div><div>javascript</div><div>python</div><div>html</div> <div>css</div>
            </div>
            </marquee>
            </div>

        
      </div>

      <PlovDevHelp />

      <TotalDetail />

    
       <AboutCard />
     
    </div>
  )
}

export default AboutUspage

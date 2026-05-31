import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSectionCard = ({ Title1, Title2, Subtitle, body, img , marquee1,marquee2,marquee3,marquee4,marquee5,marquee6 }) => {
  return (
    <div className='   m-auto text-2xl text-white max-lg:text-sm'>

      <div className='bg-black w-full min-md:flex'>
        <div className='   w-[50%] p-[8%] max-md:w-full'>
          <div className=' text-[70px] max-xl:text-[48px] font-bold'>{Title1}<span className='text-teal-300'>{Title2}</span> </div>
          <div className='min-lg:mt-24  md:mt-12'>{Subtitle} </div>
          <div className='mt-10 text-sm text-gray-500'>{body}</div>
          <div className='font-bold min-lg:mt-24 '>
            <button className='underline pr-12  md:mt-12'><NavLink to="/register">Start For Free</NavLink></button>
            <button className='bg-teal-300 px-4 py-4 rounded-md  md:mt-12'><NavLink to="/courses">Explore Courses</NavLink></button>
          </div>
        </div>
        <div className='flex items-center justify-center w-[50%] max-md:w-full'>
          <img src={img} alt="" />
        </div>
      </div>
      <div className=' w-full bg-black text-white  '>
        <marquee behavior="" direction="">
          <div className='flex m-4 justify-around '>
            <div >{marquee1}</div> 
            <div>{marquee2}</div>
            <div>{marquee3}</div>
            <div>{marquee4}</div>
            <div>{marquee5}</div>
             <div>{marquee6}</div>
          </div>
        </marquee>
      </div>


    </div>
  )
}

export default HeroSectionCard

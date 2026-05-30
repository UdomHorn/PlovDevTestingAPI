import React from 'react'
import Heroimg from "../../assets/Hero-img.png"
import CourseGrid from '../../components/courses/CourseGrid'
import Coursecount from '../../components/courses/Coursecount'
import Jobcount from '../../components/jobs/Jobcount'
import { NavLink } from 'react-router-dom'
import AboutCard from '../../components/courses/about/AboutCard'
import TotalDetail from '../../components/courses/about/TotalDetail'
import HeroSectionCard from './HeroSectionCard'
const Homepage = () => {
  return (
    <div className=' m-[auto] p-[auto] pt-30'>
     
     <HeroSectionCard 
        Title1="Code Smarter Build Real" 
        Title2 ="Skills." 
        Subtitle= "Start learning with PlovDev, earn certificates, and land a job." 
        img={Heroimg} />
     
        <CourseGrid />
      

        <TotalDetail />

    
        <AboutCard />

     
    </div>
  )
}

export default Homepage
